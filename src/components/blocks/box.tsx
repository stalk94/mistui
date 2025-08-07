import { forwardRef, useMemo, useLayoutEffect, useState, useImperativeHandle, useRef } from 'react';
import type { BoxProps } from './types';
import { useUids } from '../hooks/uuid';
import { colord } from "colord";
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';



// ? небольшая цветовая коррекция background по яркости при shadowSize
// ? набор префабов при variants (frost)
const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
    {
        style = {},
        children,
        size: propSize,
        variant = 'contained',
        color = 'none',
        shadowSize = 1, 
        rounded = 0, 
        shadow,
        elevation,
        className,
        ...props
    },
    externalRef
) {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(externalRef, () => innerRef.current!, []);
    const [size, setSize] = useState({ width: 0, height: 0 });
    const { shadows, variants } = useTheme();
    


    const getClass = useMemo(() => {
        let str = '';

        if (!className?.includes('w-')) str = str + 'w-full';
        if (!className?.includes('h-')) str = str + ' h-full';

        return str;
    }, [className]);
    const getShadow = useMemo(() => {
        const absshadowSize = Math.min(Math.abs(shadowSize), 25);
        const maxBlur = size.height / 2;
        const maxSpread = size.height / 4;

        const blur = Math.min(absshadowSize * 2, maxBlur || 16);
        const spread = Math.min(absshadowSize, maxSpread || 8);
        const baseOpacity = Math.min(0.05 * absshadowSize, 0.6);
        const finalOpacity = typeof elevation === 'number'
            ? Math.max(0, Math.min(elevation, 1)) // clamp от 0 до 1
            : baseOpacity;

        if (variant === 'neumorph') {
            const shadowColor = colord(variants[color] ?? color)
                .darken(0.4)
                .alpha(finalOpacity * 0.6)
                .toRgbString();

            const lightColor = colord(variants[color] ?? color)
                .lighten(0.2)
                .alpha(finalOpacity)
                .toRgbString();

            const light = `-${spread}px -${spread}px ${blur}px ${lightColor}`;
            const dark = `${spread}px ${spread}px ${blur}px ${shadowColor}`;
            const type = shadowSize < 0 ? 'inset ' : '';
            return `${type}${dark}, ${type}${light}`;
        }

        const shadowColor = `rgba(0, 0, 0, ${finalOpacity})`;
        return shadowSize < 0
            ? `inset 0 ${spread}px ${blur}px ${shadowColor}`
            : `0 ${spread}px ${blur}px ${shadowColor}`;
    }, [shadowSize, variant, color, elevation, size.height]);
    const getBg = useMemo(() => {
        if (variant === 'neumorph') return ({
            background: 'linear-gradient(145deg, #1413136a, #14131335)'
        });
        else return ({
            backgroundColor: (variants[color] ? variants[color] : color)
        })
    }, [variant, color, style, shadowSize]);
    useLayoutEffect(() => {
        const el = innerRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, []);



    return (
        <div
            ref={innerRef}
            className={cs(`
                ${className ?? ''}
                ${getClass}
                ${variant === 'glass' ? 'glass' : ''}
            `)}
            style={{
                boxShadow: getShadow,
                borderRadius: rounded * 2,
                padding: 8,
                ...getBg,
                ...style
            }}
            { ...props }
        >
           { children }
        </div>
    );
});


export default Box;