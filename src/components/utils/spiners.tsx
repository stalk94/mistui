import { Fragment, useMemo, forwardRef } from 'react';
import { useUids } from '../hooks/uuid';
import type { SpinerProps } from './types';
import { cs } from '../hooks/cs';
import { useTheme } from '../theme';



const Spiner = forwardRef<HTMLSpanElement, SpinerProps>(function Spiner(
    {
        style = {},
        size,
        color = 'secondary',
        variant = 'spinner',
        className,
        ...props
    },
    ref
) {
    const { shadows, variants, sizes, autosizes } = useTheme();
    const curSize = sizes.text[size] ? `loading-${sizes.text[size]}` : autosizes.text;
    const curColor = (variants[color] ?? color) ?? style?.color;
    

    return (
        <span 
            ref={ref}
            className={cs(`
                loading
                loading-${variant}
                ${curSize}
                ${className ?? ''}
            `)}
            style={{
                backgroundColor: curColor,
                ...style
            }}
            { ...props }
        >

        </span>
    );
});


export default Spiner;