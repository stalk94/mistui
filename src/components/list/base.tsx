import { useTheme } from '../theme';
import type { ListProps } from './types';



export default function List({ 
    style = {}, 
    listStyle = {},
    items, 
    ...props 
}: ListProps) {
    const {} = useTheme();


    return(
        <ul
            className={`list`}
            style={style}
            { ...props }
        >
            {items.map((item, index) => (
                <li 
                    key={index}
                    className={`list-row`} 
                    style={listStyle}
                >
                    
                </li>
            ))}
        </ul>
    );
}