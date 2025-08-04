import { cs } from '../hooks/cs';
import type { OverflowProps } from './types';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';



export default function Overflow({ 
    children, 
    className, 
    isExpand = false,
    direction = 'row',
    justifyHorizontal = 'start',
    justifyVertical = 'end',
    style,
    onOverflow,
    overflowMap,
}: OverflowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(children.length);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const isRow = direction === 'row';

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const resizeObserver = new ResizeObserver(() => {
            const containerSize = direction === 'row' ? container.offsetWidth : container.offsetHeight;

            let totalSize = 0;
            let count = 0;

            for (let i = 0; i < children.length; i++) {
                const el = itemRefs.current[i];
                if (!el) continue;

                const elSize =
                    direction === 'row' ? el.offsetWidth : el.offsetHeight;

                if (totalSize + elSize > containerSize) break;

                totalSize += elSize;
                count++;
            }

            // Обновляем всегда, даже если count > visibleCount
            setVisibleCount(count);
        });

        resizeObserver.observe(container);
        return () => resizeObserver.disconnect();
    }, [children, direction]);
    useEffect(() => {
        itemRefs.current = Array(children.length).fill(null);
    }, [children.length]);
    useEffect(() => {
        const overflowed = children.slice(visibleCount);
        const mapped = overflowMap ? overflowMap.slice(visibleCount) : overflowed;
        onOverflow?.(mapped);
    }, [visibleCount, overflowMap, children]);


    if (itemRefs.current.length < children.length) {
        itemRefs.current.length = children.length;
    }


    return (
        <div
            ref={containerRef}
            className={cs(`
                flex
                ${isRow ? 'flex-row' : 'flex-col'} 
                ${className ?? ''} 
                overflow-hidden
            `)}
            style={style}
        >
             {children.map((child, index) => (
                <div
                    key={index}
                    ref={el => (itemRefs.current[index] = el!)}
                    className={cs(`
                        flex 
                        ${isExpand ? 'grow shrink-0 basis-0' : ''} 
                        items-${justifyVertical} 
                        justify-${justifyHorizontal}
                    `)}
                    style={{ visibility: index < visibleCount ? 'visible' : 'hidden' }}
                >
                    { child }
                </div>
            ))}
        </div>
    );
}