import type { OverflowProps } from './types';
import { useRef, useState, useLayoutEffect, useEffect } from 'react';



export default function Overflow({ 
    children, 
    className, 
    isExpand,
    direction = 'row',
    justifyHorizontal = 'start',
    justifyVertical = 'end',
    style,
    onOverflow,
    overflowMap
}: OverflowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(children.length);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const isRow = direction === 'row';

    useLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const resizeObserver = new ResizeObserver(() => {
            const containerSize =
                direction === 'row' ? container.offsetWidth : container.offsetHeight;

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

            setVisibleCount(count);
        });

        resizeObserver.observe(container);
        return () => resizeObserver.disconnect();
    }, [children, direction]);
    useEffect(()=> {
        if (visibleCount < children.length) {
            if (overflowMap) onOverflow?.(overflowMap.slice(visibleCount, children.length));
            else onOverflow?.(children.slice(visibleCount, children.length));
        }
    }, [visibleCount, overflowMap]);


    if (itemRefs.current?.length !== children.length) {
        itemRefs.current = Array(children.length).fill(null);
    }


    return (
        <div
            ref={containerRef}
            className={`
                flex
                ${isRow ? 'flex-row' : 'flex-col'} 
                ${className ?? ''} 
                overflow-hidden
            `}
            style={style}
        >
            {children.slice(0, visibleCount).map((child, index) => (
                <div
                    key={index}
                    ref={el => (itemRefs.current[index] = el!, undefined)}
                    className={`
                        flex 
                        ${isExpand ? 'grow shrink-0 basis-0' : ''}  
                        items-${justifyVertical}
                        justify-${justifyHorizontal}
                    `}
                >
                    { child }
                </div>
            ))}
        </div>
    );
}