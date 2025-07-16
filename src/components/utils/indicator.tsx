import type { IndicatorProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';



const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function Indicator(
    {
        style = {},
        children,
        size,
        color,
        className,
        position = 'top',
        align = 'end',
        ...props
    },
    ref
) {
    const { shadows, autosizes } = useTheme();


    return (
        <div 
            ref={ref} 
            className={`indicator ${className && className}`}
            style={style}
            { ...props }
        >
            <span
                className={`
                    indicator-item 
                    indicator-${position} 
                    indicator-${align}
                `}
            />
            { children }
        </div>
    )
});


export default Indicator;