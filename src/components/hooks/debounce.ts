'use client'
import { useRef, useEffect, useCallback } from 'react';


/**
 * Создаёт debounced-функцию с авто-очисткой при размонтировании компонента
 * @param callback Функция, которую нужно debounce-ить
 * @param delay Задержка в миллисекундах
 * @param deps Зависимости useMemo
 * @returns Безопасная debounced-функция
 */
export function useDebounced<T extends (...args: any[]) => void>(
    callback: T,
    delay: number,
    deps: any[] = []
): T {
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const callbackRef = useRef(callback);

    // Сохраняем последнюю версию callback
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    // Очищаем таймер при размонтировании
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined') {
                clearTimeout(timeoutRef.current!);
            }
        };
    }, []);

    // Мемоизированная функция
    const debounced = useCallback((...args: Parameters<T>) => {
        if (typeof window === 'undefined') return; // SSR-safe

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            callbackRef.current(...args);
        }, delay);
    }, [delay, ...deps]);

    return debounced as T;
}


export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 100): T {
    let timer: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    } as T;
}