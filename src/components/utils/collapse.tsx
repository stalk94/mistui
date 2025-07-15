import type { CollapseProps } from './types';
import { forwardRef, cloneElement, useMemo  } from 'react';
import { useTheme } from '../theme';


const Collapse = forwardRef<HTMLDivElement, CollapseProps>(function Collapse(
    {
        style = {},
        children,
        size,
        color,
        className,
        ...props
    },
    ref
) {
    const { shadows, autosizes } = useTheme();
    const getSize = (size && size !== 'auto') ? `text-${size}` : autosizes.text;


    return (
        <div 
            ref={ref} 
            className={`collapse ${className && className}`}
            style={style}
            { ...props }
        >
            <input type="checkbox" className="peer" />

            <div className={`collapse-title`}>

            </div>
            <div className={`collapse-content`}>
               
            </div>
        </div>
    )
});


export default Collapse;