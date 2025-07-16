import { useTheme } from '../theme';
import type { ListProps } from './types';



export default function List({ 
    style = {}, 
    listStyle = {},
    items, 
    shadow,
    color,
    className,
    classNameList,
    ...props 
}: ListProps) {
    const { variants, shadows } = useTheme();


    return(
        <ul
            className={`list ${className && className}`}
            style={style}
            { ...props }
        >
            {items.map((child, index) => (
                <li 
                    key={index}
                    className={`list-row ${classNameList && classNameList}`} 
                    style={listStyle}
                >
                    { child }
                </li>
            ))}
        </ul>
    );
}