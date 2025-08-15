import { mapReactTree } from '../hooks/walk-react';
import { useTheme } from '../theme';
import type { ListProps } from './types';
import { Children, isValidElement, cloneElement } from 'react';


function isIconComponent(el: React.ReactElement): boolean {
    const type = el.type as any;

    // Встроенные SVG элементы
    if (type === 'svg') return true;

    // Убедимся, что тип есть и это компонент
    if (!type || typeof type !== 'function') return false;

    // Проверка по имени
    const name = type.displayName || type.name || '';
    return name.toLowerCase().includes('icon');
}
function deepMapWithSize(children: ReactNode, size: string): ReactNode {
    return mapReactTree(children, (el) => {
        if (isIconComponent(el)) {
            const prev = el.props.className || '';
            return cloneElement(el, { className: `${prev} ${size}` });
        }
        return el;
    });
}


export default function List({ 
    children, 
    shadow,
    color,
    size = 'auto',
    onClick,
    className,
    classNameList,
    style = {}, 
    listStyle = {},
    ...props 
}: ListProps) {
    const { variants, shadows, autosizes } = useTheme();
    const sizeText = (size && size !== 'auto') ? `text-${size}` : autosizes.text;

    
    const renderList = (childrenArray: React.ReactNode[]) => {
        return Children.map(childrenArray, (child, index) => {
            return(
                <li 
                    key={index} 
                    className={`list-row ${classNameList || ''}`} 
                    style={listStyle}
                    onClick={()=> onClick?.(index)}
                >
                    { child }
                </li>
            );
        });
    }


    if (children?.props?.children) {
        return (
            <ul
                className={`list ${className || ''} ${sizeText}`}
                style={style}
                {...props}
            >
                { renderList(children.props.children) }
            </ul>
        );
    } 
    else if (Array.isArray(children)) {
        return (
            <ul
                className={`list ${className || ''} ${sizeText}`}
                style={style}
                {...props}
            >
                { renderList(children) }
            </ul>
        );
    }
    else return (
        <ul
            className={`list ${className || ''} ${sizeText}`}
            style={style}
            {...props}
        >
            <li 
                className={`list-row ${classNameList || ''}`} 
                style={listStyle}
            >
                { children }
            </li>
        </ul>
    );
}