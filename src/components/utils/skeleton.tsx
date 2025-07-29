import { forwardRef, useEffect, useState, useRef } from 'react';
import type { SkeletonProps } from './types';
import { cs } from '../hooks/cs';


const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Sceleton(
    {
        size,
        className,
        children,
        variant = 'text',
        width,
        height,
        ...props
    },
    ref
) {
    const measureRef = useRef<HTMLDivElement>(null);
    const [cw, setCw] = useState(100);
    const [ch, setCh] = useState(100);


    useEffect(() => {
        if (!children || width || height) return;
        if (!measureRef.current) return;

        const updateSize = () => {
            const rect = measureRef.current!.getBoundingClientRect();
            setCw(rect.width);
            setCh(rect.height);
        };

        updateSize();

        const observer = new ResizeObserver(updateSize);
        observer.observe(measureRef.current);

        return () => observer.disconnect();
    }, [children, width, height]);

    const finalWidth = width ?? cw;
    const finalHeight = height ?? (variant === 'text' ? '1em' : ch);
    

    return (
        <div 
            ref={ref}
            className={cs(`
                skeleton
                ${className ?? ''}
            `)}
            style={{
                width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
                height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight,
                borderRadius: variant === 'circular' ? '50%' : (variant === 'rounded' ? 5 : 1),
            }}
            { ...props }
        >
            {!width && !height && children &&
                <div
                    ref={measureRef}
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                        pointerEvents: 'none',
                        height: 'auto',
                        width: 'auto',
                        overflow: 'hidden',
                    }}
                >
                    { children }
                </div>
            }
        </div>
    );
});


export default Skeleton;