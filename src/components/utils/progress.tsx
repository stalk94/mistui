import type { ProgressProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';


const csizes = {
    xs: '0.1rem',
    sm: '0.3rem',
    md: '0.5rem',
    lg: '0.8rem',
    xl: '1.2rem'
}


const Progress = forwardRef<HTMLProgressElement, ProgressProps>(function Progress(
    {
        style = {},
        value,
        max = 100,
        size,
        color = 'secondary',
        className,
        shadow,
        ...props
    },
    ref
) {
    const { shadows, variants, sizes, autosizes } = useTheme();
    const curSize = csizes[size] ?? csizes.sm;
    const sizeText = sizes.text[size] ? `text-${sizes.text[size]}` : autosizes.text;
    const curColor = (variants[color] ?? color) ?? style?.color;
    

    return (
        <progress 
            ref={ref}
            className={`progress ${className ?? ''}`}
            value={value} 
            max={max}
            style={{
                boxShadow: shadows[shadow],
                color: curColor,
                height: curSize,
                ...style
            }}
            { ...props }
        />
    );
});


export default Progress;