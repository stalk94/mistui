import { useEffect, useRef, useState } from 'react';



export function useContainerSize<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
            setHeight(entry.contentRect.height);
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, width, height] as const;
}

export function parseCssToGroups(css: string) {
    const lines = css.split('\n');
    const result: Record<string, { comment?: string; styles: Record<string, string> }> = {};

    let currentComment: string | undefined = undefined;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // комментарий-блок
        const commentMatch = line.match(/^\/\*\s*(.*?)\s*\*\/$/);
        if (commentMatch) {
            currentComment = commentMatch[1];
            continue;
        }

        // селектор класса или id
        const selectorMatch = line.match(/^([.#][^{]+)\s*\{$/);
        if (selectorMatch) {
            const selector = selectorMatch[1];
            const styles: Record<string, string> = {};

            // читаем стили до закрывающей скобки
            while (++i < lines.length) {
                const styleLine = lines[i].trim();
                if (styleLine === '}') break;

                const [prop, val] = styleLine.split(':').map(s => s.trim());
                if (prop && val) {
                    styles[prop.replace(/;$/, '')] = val.replace(/;$/, '');
                }
            }

            result[selector] = {
                ...(currentComment ? { comment: currentComment } : {}),
                styles
            };

            currentComment = undefined; // сброс комментария после использования
        }
    }

    return result;
}