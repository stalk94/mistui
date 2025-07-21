import type { RadialProgressProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';

const sizes = {
    xs: '4rem',
    sm: '6rem',
    md: '8rem',
    lg: '10rem',
    xl: '12rem'
}
const thickness = {
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '12px',
    xl: '18px'
}

// !
const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(function RadialProgress(
    {
        style = {},
        value = 0,
        children,
        size,
        color,
        className,
        shadow,
        ...props
    },
    ref
) {
    const { shadows, variants } = useTheme();
    const curColor = variants[color] ?? color;


    return (
        <div 
            ref={ref} 
            className={`radial-progress`}
            style={{ 
                boxShadow: shadows[shadow],
                ...style,
                "--value": value,
            }}
            role="progressbar"
            aria-valuenow={value}
            { ...props }
        >
            { children }
        </div>
    );
});


export default RadialProgress;