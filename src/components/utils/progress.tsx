import type { ProgressProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';



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
    const curSize = sizes.progress[size] ?? autosizes.progress;
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