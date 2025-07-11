import { forwardRef } from 'react';
import type { ButtonProps } from './type';
import { useTheme } from '../theme';


const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        style,
        children,
        size,
        variant,
        color,
        className,
        isSoft,
        ...props
    },
    ref
) {
    const { autosizes } = useTheme();
    const getSize = size ? `btn-${size}` : autosizes.btn;

    return (
        <button
            ref={ref}
            className={`
                btn 
                whitespace-nowrap
                ${variant ? `btn-${variant}` : ''} 
                ${color ? `btn-${color}` : ''} 
                ${getSize}
                ${isSoft ? 'btn-soft' : ''}
                font-bold 
                uppercase
                ${className ?? ''}
            `}
            style={style}
            { ...props }
        >
            { children }
        </button>
    );
});


export default Button;