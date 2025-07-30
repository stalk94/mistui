import { forwardRef, useMemo } from 'react';
import type { BoxProps } from './types';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';



const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
    {
        style = {},
        children,
        size,
        variant = 'contained',
        color = 'neutral',
        elevation = 1, 
        rounded = 0, 
        shadow,
        className,
        ...props
    },
    ref
) {
    const { shadows, variants } = useTheme();

    const getClass = useMemo(() => {
        let str = '';

        if (!className?.includes('w-')) str = str + 'w-full';
        if (!className?.includes('h-')) str = str + ' h-full';

        return str;
    }, [className]);
    const getShadow = useMemo(() => {
        if (elevation) {
            const absElevation = Math.min(Math.abs(elevation), 25);

            if (Math.sign(elevation) === -1) {
                const cur = Math.abs(elevation) * 0.07;
                return `inset 0 ${absElevation}px ${absElevation * 2}px rgba(0, 0, 0, ${cur})`;
            }
            else {
                const cur = elevation * 0.05;
                return `0 ${absElevation}px ${absElevation * 2}px rgba(0, 0, 0, ${cur})`;
            }
        }
        else return shadows[shadow];
    }, [elevation]);
    const getBg = useMemo(() => {

    }, [variant, color, style, elevation]);
  

    return (
        <div
            ref={ref}
            className={cs(`
                ${className ?? ''}
                ${getClass}
                ${variant === 'glass' ? 'glass' : ''}
            `)}
            style={{
                boxShadow: getShadow,
                borderRadius: rounded * 2,
                padding: 8,
                backgroundColor: variants[color] ? variants[color] : color,
                ...style
            }}
            { ...props }
        >
           { children }
        </div>
    );
});


export default Box;