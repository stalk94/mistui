import type { IndicatorProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';



const Indicator = forwardRef<HTMLDivElement, IndicatorProps>(function Indicator(
    {
        style = {},
        content,
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
            className={`indicator`}
            { ...props }
        >
            <span
                style={style}
                className={`
                    indicator-item
                    indicator-${position} 
                    indicator-${align}
                    ${className ?? ''}
                `}
                children={content}
            />

            { children }  
        </div>
    )
});


export default Indicator;