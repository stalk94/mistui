import { useState, useEffect, SetStateAction, Dispatch } from 'react';


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