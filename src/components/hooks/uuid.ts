import { useId, useRef } from 'react';


// Заменяет все символы, которые могут сломать CSS-селекторы
function sanitizeId(raw: string): string {
    return raw.replace(/[^a-zA-Z0-9_-]/g, ''); // заменяем :, . и др. на _
}

let globalCounter = 0;


export function useUids(prefix = 'uid'): string {
    const fallbackId = useRef(`${prefix}-${++globalCounter}`); // SSR-safe
    const reactId = useId?.(); // ":r0:", может быть undefined
    const fullId = reactId ? `${prefix}-${sanitizeId(reactId)}` : fallbackId.current;

    const stableId = useRef(fullId);
    return stableId.current;
}