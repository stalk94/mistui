import type { OverflowProps } from './types';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useTheme } from '../theme';


function MoreDropdown({ items }: { items: React.ReactNode[] }) {
    return (
        <details className="dropdown">
            <summary className="btn btn-sm">+{items.length} ещё</summary>
            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-50">
                {items.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </details>
    );
}


export default function Overflow({ 
    children, 
    className, 
    direction = 'row',
    style 
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
    }, [children.length, direction]);


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
                    ref={(el) => (itemRefs.current[index] = el!)}
                    className="shrink-0"
                >
                    { child }
                </div>
            ))}

            {visibleCount < children.length && (
                <div className="shrink-0">
                    <MoreDropdown 
                        items={children.slice(visibleCount)} 
                    />
                </div>
            )}
        </div>
    );
}