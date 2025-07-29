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
        rounded = 0, 
        shadow,
        className,
        ...props
    },
    ref
) {
    const { shadows, styles } = useTheme();

    const getStyle = useMemo(() => {

    }, [variant, color, style]);
  

    return (
        <div
            ref={ref}
            className={cs(`
                ${className ?? ''}
                ${variant === 'glass' ? 'glass' : ''}
            `)}
            style={{
                boxShadow: shadows[shadow],
                ...style
            }}
            { ...props }
        >
           { children }
        </div>
    );
});


export default Box;