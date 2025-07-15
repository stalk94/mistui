import type { CollapseProps } from './types';
import { forwardRef, cloneElement, useMemo  } from 'react';
import { useTheme } from '../theme';


const Collapse = forwardRef<HTMLDivElement, CollapseProps>(function Collapse(
    {
        style = {},
        styleTitle = {},
        children,
        size,
        color,
        className,
        classNameTitle,
        title,
        content,
        icon,
        ...props
    },
    ref
) {
    const { shadows, autosizes } = useTheme();
    const curIcon = icon ? `collapse-${icon}` : '';
    const sizeText = (size && size !== 'auto') ? `text-${size}` : autosizes.text;


    return (
        <div 
            ref={ref} 
            className={`collapse ${curIcon} ${sizeText} ${className && className}`}
            style={style}
            { ...props }
        >
            <input type="checkbox" className="peer" />

            <div 
                className={`collapse-title ${classNameTitle && classNameTitle}`} 
                style={styleTitle}
            >
                { title }
            </div>
            <div className={`collapse-content`}>
                { children ?? content }
            </div>
        </div>
    );
});


export default Collapse;