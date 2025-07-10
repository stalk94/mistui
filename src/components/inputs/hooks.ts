import { useState, useEffect, SetStateAction, Dispatch, useRef, useCallback } from 'react';

export function useClientValidity<T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
    ref: React.RefObject<T>
) {
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const onInvalid = (e: Event) => {
            //e.preventDefault(); // подавляем нативный тултип
            setInvalid(true);
        }
        const onInput = () => {
            setInvalid(!el.validity.valid);
        }

        el.addEventListener('invalid', onInvalid);
        el.addEventListener('input', onInput);

        // инициализация на клиенте
        setInvalid(!el.validity.valid);

        return () => {
            el.removeEventListener('invalid', onInvalid);
            el.removeEventListener('input', onInput);
        };
    }, [ref]);

    
    return invalid;
}


export function useCache<T>(value: T): [T, Dispatch<SetStateAction<T>>] {
    const isClient = typeof window !== 'undefined';

    // avoid running useState on server
    const [cache, setCache] = isClient
        ? useState<T>(value)
        : [value, (v: T) => { }] as [T, (v: T) => void];     
    
    // sync on client only
    useEffect(() => {
        if (!isClient) return;

        if (value !== undefined) {
            setCache(value);
        }
    }, [value]);

    return [cache, setCache];
}


export function useClickOutside(selectorsIgnore: string[], onClickOutside: ()=> void) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!(target instanceof HTMLElement)) return;

            if (selectorsIgnore.some((selector)=> target.closest(selector))) {
                return;
            }

            onClickOutside();
        }

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [selectorsIgnore, onClickOutside]);
}

export function useHover<T extends HTMLElement>() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const handleMouseEnter = useCallback(() => setHovered(true), []);
    const handleMouseLeave = useCallback(() => setHovered(false), []);

    const callbackRef = useCallback((node: T | null) => {
        if (ref.current) {
            ref.current.removeEventListener('mouseenter', handleMouseEnter);
            ref.current.removeEventListener('mouseleave', handleMouseLeave);
        }

        if (node) {
            node.addEventListener('mouseenter', handleMouseEnter);
            node.addEventListener('mouseleave', handleMouseLeave);
        }

        ref.current = node;
    }, [handleMouseEnter, handleMouseLeave]);

    return [callbackRef, hovered] as const;
}

export function useMultiHover<T extends HTMLElement>(count: number) {
    const [hoverStates, setHoverStates] = useState<boolean[]>(() =>
        Array(count).fill(false)
    );

    const refs = useRef<(T | null)[]>([]);

    const setRef = useCallback((index: number) => (node: T | null) => {
        if (refs.current[index]) {
            refs.current[index]?.removeEventListener('mouseenter', onEnter);
            refs.current[index]?.removeEventListener('mouseleave', onLeave);
        }

        if (node) {
            node.addEventListener('mouseenter', onEnter);
            node.addEventListener('mouseleave', onLeave);
        }

        refs.current[index] = node;

        function onEnter() {
            setHoverStates(prev => {
                const copy = [...prev];
                copy[index] = true;
                return copy;
            });
        }

        function onLeave() {
            setHoverStates(prev => {
                const copy = [...prev];
                copy[index] = false;
                return copy;
            });
        }
    }, []);

    return { refs: Array.from({ length: count }, (_, i) => setRef(i)), hoverStates };
}