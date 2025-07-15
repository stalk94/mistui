import { forwardRef, Fragment, useState } from 'react';
import type { PopoverProps } from './types';
import { useTheme } from '../theme';


const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(
    {
        children,
        content,
        className,
        isHover,
        style = {},
        ...props
    }, 
    ref
) {
    const { } = useTheme();


    return(
        <div 
            ref={ref} 
            className={`dropdown ${isHover && 'dropdown-hover'} ${className && className}`}
        >
            <span tabIndex={0}>
                { children }
            </span>

            <div className="dropdown-content">
                { content }
            </div>
        </div>
    );
});


export default Popover;