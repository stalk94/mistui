import { useState, useEffect, useRef, forwardRef } from 'react';
import type { MarqueeTextProps } from './types';
import Typography from './Typography';
import { useTheme } from '../theme';



const MarqueeText = forwardRef<HTMLDivElement, MarqueeTextProps>(function MarqueeText(
    {
        children,
        variant,
        style = {},
        pxPerSecond = 100,
        direction = 'right',
        color,
        pauseOnHover = false,
        gap = 12,
        copies = 4,
        ...props
    },
    ref
) {
    const { variants } = useTheme();
    const animationRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (animationRef.current) {
            const totalWidth = animationRef.current.scrollWidth;
            const oneCopyWidth = totalWidth / copies;
            setContentWidth(oneCopyWidth);
        }
    }, [children, gap, copies]);

    const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';
    // Если известна ширина, считаем время анимации по скорости
    const animationDuration = contentWidth ? contentWidth / pxPerSecond : 0;
    const animationStyle = contentWidth
        ? {
            animation: `${animationName} ${animationDuration}s linear infinite`,
            '--move-distance': `${contentWidth}px`,
        } as React.CSSProperties
        : {};


    return (
        <div style={{ overflowX: 'hidden', maxWidth: '100%', width: '100%', position: 'relative' }}>
            <div
                ref={(el) => {
                    animationRef.current = el;
                    if (typeof ref === 'function') ref(el);
                    else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
                }}
                onMouseEnter={(e) => {
                    if (pauseOnHover) e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                    if (pauseOnHover) e.currentTarget.style.animationPlayState = 'running';
                }}
                style={{
                    display: 'inline-flex',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    willChange: 'transform',
                    color: variants[color] ?? color,
                    ...style,
                    ...animationStyle,
                }}
            >
                {[...Array(copies)].map((_, i) => (
                    <div key={i} style={{ paddingRight: gap }}>
                        <Typography 
                            as="p" 
                            variant={variant ?? 'body1'}
                            { ...props }
                        >
                            { children }
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default MarqueeText;