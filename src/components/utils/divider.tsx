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
    variant = 'solid',
    className
}: DividerProps) {
    const uid = useUids('divider');
    const { variants, autosizes } = useTheme();
    const getSize = size ? `text-${size}` : autosizes.text;

    const getBorderStyle = useMemo(()=> {
        const hs = `border-top: 1px ${variant ?? 'solid'} ${(variants[color] ?? color) ?? 'currentColor'}`;
        const ws = `border-right: 1px ${variant ?? 'solid'} ${(variants[color] ?? color) ?? 'currentColor'}`;
        
        return orientation === 'horizontal' ? hs : ws;
    }, [color, orientation, variant])

    
    return (
        <Fragment>
            <style>
                {/*css*/`
                    .divider[data-id="${uid}"]::before,
                    .divider[data-id="${uid}"]::after {
                        ${ getBorderStyle }
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
                    borderColor: variant === 'solid' && color && color,        // !из темы
                    borderStyle: variant,
                    margin: 0,
                    ...style
                }}
            >
                {(typeof children === 'string') &&
                    <span className='text-xs sm:text-xs text-neutral-600 tracking-normal'>
                        { children }
                    </span>
                }
                {(children && typeof children !== 'string') &&
                    children 
                }
            </div>
        </Fragment>
    );
}