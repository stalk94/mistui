import type { BadgeProps } from './types';
import { forwardRef, cloneElement, useMemo  } from 'react';
import { useTheme } from '../theme';
import clsx from 'clsx';


const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
    {
        style = {},
        children,
        size,
        variant,
        color,
        className,
        isGradient,
        iconLeft,
        iconRight,
        shadow,
        ...props
    },
    ref
) {
    const { shadows } = useTheme();
    const getSize = size ? `badge-${size}` : 'badge-sm sm:badge-md md:badge-md lg:badge-lg xl:badge-lg';

    const memoIcon = useMemo(()=> {
        const result = {iconLeft:undefined, iconRight:undefined};

        if (iconLeft) result.iconLeft = cloneElement(iconLeft, {
            className: clsx(
                clsx(iconLeft?.props?.className, 'h-[60%]')
            ),
        });
        if (iconRight) result.iconRight = cloneElement(iconRight, {
            className: clsx(
                clsx(iconRight?.props?.className, 'h-[60%]')
            ),
        });

        return result;
    }, [iconLeft, iconRight]);
    

    return (
        <div 
            ref={ref}
            className={`
                badge 
                badge-${variant}
                badge-${color}
                ${getSize}
                ${className && className}
                animate-slide-up
            `}
            style={{
                boxShadow: shadows[shadow], 
                ...style
            }}
            { ...props} 
        >
            { memoIcon?.iconLeft }
            { children }
            { memoIcon?.iconRight }
        </div>
    )
});


export default Badge;