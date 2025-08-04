import type { CollapseProps } from './types';
import { forwardRef, cloneElement, useMemo  } from 'react';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';


const Collapse = forwardRef<HTMLDivElement, CollapseProps>(function Collapse(
    {
        style = {},
        styleTitle = {},
        children,
        size,
        className,
        classNameTitle,
        title,
        content,
        icon,
        open,
        ...props
    },
    ref
) {
    const { autosizes } = useTheme();
    const curIcon = icon ? `collapse-${icon}` : '';
    const sizeText = (size && size !== 'auto') ? `text-${size}` : autosizes.text;


    return (
        <div 
            ref={ref} 
            className={cs(`
                collapse
                ${open ? 'collapse-open' : ''}
                ${curIcon} 
                ${sizeText} 
                ${className ?? ''}
            `)}
            style={style}
            { ...props }
        >
            <input type="checkbox" className="peer" />

            <div 
                className={cs(`
                    collapse-title 
                    text-left 
                    ${classNameTitle ?? ''}
                `)} 
                style={styleTitle}
            >
                { title }
            </div>
            <div 
                className={`collapse-content`} 
                style={{ padding: 0 }}
            >
                { children ?? content }
            </div>
        </div>
    );
});


export default Collapse;