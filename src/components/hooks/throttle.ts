import { useRef, useEffect, useCallback } from 'react';


export function useThrottled<T extends (...args: any[]) => void>(
    callback: T,
    delay: number = 300
): T {
    const lastCall = useRef(0);
    const timeout = useRef<NodeJS.Timeout | null>(null);
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        return () => {
            if (timeout.current) clearTimeout(timeout.current);
        };
    }, []);

    const throttledFn = useCallback((...args: Parameters<T>) => {
        const now = Date.now();
        const remaining = delay - (now - lastCall.current);

        if (remaining <= 0) {
            lastCall.current = now;
            callbackRef.current(...args);
        } else if (!timeout.current) {
            timeout.current = setTimeout(() => {
                lastCall.current = Date.now();
                timeout.current = null;
                callbackRef.current(...args);
            }, remaining);
        }
    }, [delay]);

    return throttledFn as T;
}