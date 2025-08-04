import type { RadialProgressProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';


const thickness = {
    xs: '3px',
    sm: '4px',
    md: '8px',
    lg: '14px',
    xl: '20px'
}


const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(function RadialProgress(
    {
        style = {},
        value = 0,
        children,
        size,
        color = 'secondary',
        className,
        shadow,
        ...props
    },
    ref
) {
    const { shadows, variants, sizes, autosizes } = useTheme();
    const curSize = sizes['rad-progress'][size] ?? autosizes['rad-progress'];
    const curSizeThickness = thickness[size] ?? thickness.sm;
    const sizeText = sizes.text[size] ? `text-${sizes.text[size]}` : autosizes.text;
    const curColor = (variants[color] ?? color) ?? style?.color;
    

    return (
        <div 
            ref={ref} 
            role="progressbar"
            className={`radial-progress ${className ?? ''} ${sizeText}`}
            style={{ 
                boxShadow: shadows[shadow],
                ...style,
                color: curColor,
                "--value": value,
                "--size": curSize,
                "--thickness": curSizeThickness,
            }}
            aria-valuenow={value}
            { ...props }
        >
            { children }
        </div>
    );
});


export default RadialProgress;