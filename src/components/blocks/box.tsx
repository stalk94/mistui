import { forwardRef, useCallback, useMemo } from 'react';
import type { BoxProps } from './types';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';



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

  
    return (
        <div
            ref={ref}
            className={`
                ${className ?? ''}
                ${variant === 'glass' ? 'glass' : ''}
            `}
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