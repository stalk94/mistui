import type { IndicatorProps } from './types';
import { forwardRef  } from 'react';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';


// ! наследование варрианта и цвета
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
        shadow,
        ...props
    },
    ref
) {
    const { shadows } = useTheme();


    return (
        <div 
            ref={ref} 
            className={`indicator`}
            { ...props }
        >
            
            {/* multi */}
            { Array.isArray(content) && 
                content.map((elem, i) => 
                    <div
                        key={i}
                        style={{
                            boxShadow: shadows[elem.shadow],
                            ...elem.style
                        }}
                        className={cs(`
                            indicator-item
                            indicator-${elem.position} 
                            indicator-${elem.align}
                            ${elem.className ?? ''}
                        `)}
                        children={elem.content}
                    />
                )
            }

            {/* one */}
            { !Array.isArray(content) && 
                <span
                    style={{
                        boxShadow: shadows[shadow],
                        ...style
                    }}
                    className={cs(`
                        indicator-item
                        indicator-${position} 
                        indicator-${align}
                        ${className ?? ''}
                    `)}
                    children={content}
                />
            }

            { children }  
        </div>
    )
});


export default Indicator;