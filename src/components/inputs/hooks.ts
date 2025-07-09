import { useState, useEffect, SetStateAction, Dispatch } from 'react';

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