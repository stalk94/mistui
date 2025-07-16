import { useState, useEffect, useRef, forwardRef } from 'react';
import type { MarqueeTextProps } from './types';
import Typography from './Typography';



/**
 * Бегушая строка текст
 */
const MarqueeText = forwardRef<HTMLParagraphElement, MarqueeTextProps>(function MarqueeText(
    {
        children, 
        variant, 
        style = {},
        speed = 4,
        direction = 'left',
        ...props 
    },
    ref
) {
    const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

    return (
        <div
            style={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative',
                width: '100%',
            }}
        >
            <Typography
                ref={ref}
                variant={variant ?? "body1"}
                style={{
                    display: 'inline-block',
                    animation: `${animationName} ${speed}s linear infinite`,
                    ...style
                }}
                { ...props }
            >
                { children ?? 'Это пример бегущей строки. Но useHover лучше, когда ты хочешь хук для переиспользования' }
            </Typography>
        </div>
    );
});


export default MarqueeText;