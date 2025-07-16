import { Fragment, useMemo } from 'react';
import { useUids } from '../hooks/uuid';
import type { DividerProps } from './types';
import { useTheme } from '../theme';


export default function Divider({ 
    children,
    size, 
    color, 
    position, 
    orientation = 'horizontal', 
    style,
    variant,
    className
}: DividerProps) {
    const uid = useUids('divider');
    const { variants, autosizes } = useTheme();
    const getSize = size ? `text-${size}` : autosizes.text;


    return (
        <Fragment>
            <style>
                {/*css*/`
                    .divider[data-id="${uid}"]::before,
                    .divider[data-id="${uid}"]::after {
                        border-top: 1px ${variant ?? 'solid'} ${(variants[color] ?? color) ?? 'currentColor'};
                    }
                `}
            </style>

            <div 
                data-id={uid}
                className={`
                    divider
                    divider-${position}
                    ${orientation === 'vertical' ? 'divider-horizontal' : 'divider-vertical'}
                    ${getSize} 
                    text-neutral-500
                    ${className && className}
                `}
                style={{
                    borderColor: color && color,        // !из темы
                    borderStyle: variant,
                    ...style
                }}
            >
                {(typeof children === 'string') &&
                    <span className='text-xs sm:text-xs text-neutral-600 tracking-normal'>
                        { children }
                    </span>
                }
                {(typeof children !== 'string') &&
                    children 
                }
            </div>
        </Fragment>
    );
}