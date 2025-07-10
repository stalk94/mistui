import { useEffect } from 'react';


export function useScopedStyle(id: string, css: string) {
    useEffect(() => {
        const style = document.createElement('style');
        style.setAttribute('data-scope-id', id);
        style.innerHTML = css;
        document.head.appendChild(style);
        
        return () => {
            style.remove();
        };
    }, [id, css]);
}