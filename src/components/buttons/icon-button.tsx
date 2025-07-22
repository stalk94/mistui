import { forwardRef, useCallback, useMemo, cloneElement } from 'react';
import type { IconButtonProps } from './type';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { createGradientStyle } from '../hooks';
import { cs } from '../hooks/cs';
import clsx from 'clsx';



const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
    {
        icon,
        children,
        style = {},
        size,
        variant = 'contained',
        color,
        className,
        isRounded,
        isGradient,
        selected,
        shadow,
        ...props
    },
    ref
) {
    const { variants, autosizes, mixers, plugins, shadows } = useTheme();
    const uid = useUids('icon-button');
    const getSize = (size && size !== 'auto') ? `btn-${size}` : autosizes.btn;


    const mergedIcon = cloneElement((icon ?? children), {
        className: clsx(
            clsx((icon ?? children)?.props?.className, 'h-[70%]')
        ),
    });
    const colorContrast = useMemo(() => {
        if (variant === 'contained') {
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
        if (variant === 'ghost') return style;
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        
        let st = { 
            ...style,
            backgroundColor: (variant !== 'soft' && variant !== 'link') && (variants[color] ?? color),
            color: (variant === 'dash' || variant === 'outline') 
                ? (variants[color] ?? color) 
                : colorContrast
        }

        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: inlneBg ?? 'inherit',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }
        if ((inlneBg || inlneBorder) && (variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            return({
                ...rest,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
                borderColor: inlneBorder ?? inlneBg,
            });
        }
        
        return st;
    }, [style, color, variant]);
    const getColorHover = useCallback((key: 'backgroundColor' | 'color' | 'border') => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        const inlneTxt = style?.color;
        const curVariant = variants[color];

        if (key === 'backgroundColor') return (inlneBg
            ? mixers.button.background(inlneBg, 'hover')
            : mixers.button.background(curVariant, 'hover')
        );
        else if (key === 'border') return (inlneBg
            ? mixers.button.border(inlneBorder, 'hover')
            : mixers.button.border(curVariant, 'hover')
        );
        else return (inlneTxt
            ? plugins.contrast(inlneTxt)
            : plugins.contrast((inlneBg ?? inlneBorder) ?? curVariant)
        );
    }, [style, color, variant]);
    
    
    return (
        <>
            {!props['data-id'] && !selected &&
                <style>
                    {`
                        button[data-id="${uid}"]:hover {
                            background: ${getColorHover('backgroundColor')};
                            borderColor: ${getColorHover('border')};
                            color: ${getColorHover('color')};
                            opacity: 0.6;
                        }
                    `}
                </style>
            }

            <button
                ref={ref}
                type="button"
                data-id={props['data-id'] ?? uid}
                style={{ 
                    boxShadow: shadows[shadow], 
                    ...getGradient,
                    ...getStyle 
                }}
                className={cs(`
                    btn 
                    whitespace-nowrap
                    ${variant === 'ghost' && 'btn-ghost'}
                    ${isRounded ? 'btn-circle' : 'btn-square'}
                    ${variant ? `btn-${variant}` : ''} 
                    ${color ? `btn-${color}` : ''} 
                    ${getSize}
                    font-bold 
                    uppercase
                    transition-transform 
                    duration-200 
                    ${selected && 'bg-[var(--selected)] border-[var(--selected)] text-white'}
                    ${className ?? ''}
                `)}
                { ...props }
            >
                { mergedIcon }
            </button>

        </>
    );
});


export default IconButton;