import { Fragment, useMemo } from 'react';
import { useUids } from '../hooks/uuid';
import type { DividerProps } from './types';
import { useTheme } from '../theme';


export default function Divider({ 
    children,
    size, 
    color, 
    position, 
    isHorizontal, 
    style,
    variant,
    className
}: DividerProps) {
    const uid = useUids('divider');
    const { variants, autosizes } = useTheme();
    const getSize = size ? `text-${size}` : autosizes.text;

    const getColor = useMemo(()=> {
        if (variants[color]) return variants[color];
        else return ( color ??  'currentColor');
    }, [color]);


    return (
        <Fragment>
            <style>
                {/*css*/`
                    .divider[data-id="${uid}"]::before,
                    .divider[data-id="${uid}"]::after {
                        border-top: 1px ${variant ?? 'solid'} ${getColor};
                    }
                `}
            </style>

            <div 
                data-id={uid}
                className={`
                    divider 
                    divider-${position}
                    ${isHorizontal && 'divider-horizontal'}
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