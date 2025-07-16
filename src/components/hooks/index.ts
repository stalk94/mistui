import { colord } from 'colord';
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

export function useConditionalRef<T extends HTMLElement>(uid?: string) {
    return uid ? useRef<T>(null) : null;
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

    const callbackRef = useCallback((node: T | null) => {
        if (ref.current) {
            ref.current.removeEventListener('mouseenter', onMouseEnter);
            ref.current.removeEventListener('mouseleave', onMouseLeave);
        }

        if (node) {
            node.addEventListener('mouseenter', onMouseEnter);
            node.addEventListener('mouseleave', onMouseLeave);
        }

        ref.current = node;
    }, []);

    const onMouseEnter = useCallback(() => setHovered(true), []);
    const onMouseLeave = useCallback(() => setHovered(false), []);

    return [callbackRef, hovered, setHovered] as const;
}


export function createGradientStyle(
    baseColor: string,
    direction: 'to right' | 'to left' | 'to top' | 'to bottom' | string = 'to right'
): React.CSSProperties {
    const base = colord(baseColor);

    const lighter = base.lighten(0.65).alpha(0.4).toHex();
    const darker = base.lighten(0.5).alpha(0.4).toHex();

    return {
        backgroundImage: `linear-gradient(${direction}, ${lighter}, ${baseColor}, ${darker})`,
    };
}