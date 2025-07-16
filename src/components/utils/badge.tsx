import type { BadgeProps } from './types';
import { forwardRef, cloneElement, useMemo, useCallback  } from 'react';
import { useTheme } from '../theme';
import { createGradientStyle } from '../hooks';
import clsx from 'clsx';


const Badge = forwardRef<HTMLDivElement, BadgeProps>(function Badge(
    {
        style = {},
        children,
        size,
        variant = 'contained',
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
    const { variants, shadows, autosizes, plugins } = useTheme();
    const getSize = (size && size !== 'auto') ? `badge-${size}` : autosizes.badge;

    
    const colorContrast = useMemo(() => {
        if (variant === 'soft' || variant === 'contained') {
            return plugins.contrast((variants[color] ?? color));
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
    const getGradient = useMemo(() => {
        if (!isGradient) return {};
        const inlneBg = style?.backgroundColor;
        const curVariant = variants[color];

        return createGradientStyle(inlneBg ?? curVariant);
    }, [style, color, variant, isGradient]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = {
            ...style,
            backgroundColor: (variant !== 'ghost' && variant !== 'link') && (variants[color] ?? color),
            color: (variant !== 'soft' && variant !== 'contained') 
                ? (variants[color] ?? color) 
                : colorContrast
        }


        if (variant === 'dash' || variant === 'outline') {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: inlneBg ?? '',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }

        return st;
    }, [style, color, variant]);
    const memoIcon = useMemo(() => {
        const result = { iconLeft: undefined, iconRight: undefined };

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
                ${variant === 'soft' && 'badge-soft'}
                ${getSize}
                ${className && className}
                animate-slide-up
            `}
            style={{
                boxShadow: shadows[shadow], 
                ...getStyle,
                ...style,
                ...getGradient
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