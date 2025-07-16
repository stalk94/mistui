import { useState, useEffect, useRef, forwardRef } from 'react';
import type { MarqueeTextProps } from './types';
import Typography from './Typography';
import { useTheme } from '../theme';


/**
 * Бегушая строка текст
 */
const MarqueeText = forwardRef<HTMLParagraphElement, MarqueeTextProps>(function MarqueeText(
    {
        children, 
        variant, 
        style = {},
        speed = 8,
        direction = 'right',
        color,
        ...props 
    },
    ref
) {
    const { variants } = useTheme();
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
                as='p'
                variant={variant ?? "body1"}
                style={{
                    display: 'inline-block',
                    animation: `${animationName} ${speed}s linear infinite`,
                    color: variants[color] ?? color,
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