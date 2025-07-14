import { forwardRef, useCallback, useMemo } from 'react';
import type { ButtonProps } from './type';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { createGradientStyle } from './helpers';



const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        style = {},
        children,
        size,
        variant,
        color,
        className,
        isSoft,
        isGradient,
        selected,
        shadow,
        ...props
    },
    ref
) {
    const { variants, autosizes, mixers, plugins, shadows } = useTheme();
    const uid = useUids('button');
    const getSize = size ? `btn-${size}` : autosizes.btn;


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
            color: (variant === 'dash' || variant === 'outline') ? (variants[color] ?? color) : ''
        }
        

        if ((variant === 'dash' || variant === 'outline')) {
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
    }, [style, color, variant, isSoft]);
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
    }, [style, color, variant, isSoft]);
    
  
    return (
        <>
            {!props['data-id'] && !selected &&
                <style>
                    {`
                        button[data-id="${uid}"]:hover {
                            background: ${getColorHover('backgroundColor')};
                            borderColor: ${getColorHover('border')};
                            color: ${getColorHover('color')};
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
                    ...getStyle,
                    ...getGradient,
                }}
                className={`
                    btn 
                    whitespace-nowrap
                    ${variant === 'ghost' && 'btn-ghost'}
                    ${variant ? `btn-${variant}` : ''} 
                    ${getSize}
                    ${isSoft ? 'btn-soft' : ''}
                    ${variant === 'soft' && `btn-soft btn-${color}`}
                    ${variant === 'link' && 'btn-link'}
                    font-bold 
                    uppercase
                    transition-transform 
                    duration-200 
                    hover:scale-97
                    ${selected && `bg-[var(--selected)] border-[var(--selected)]`}
                    ${className ?? ''}
                `}
                { ...props }
            >
                { children }
            </button>

        </>
    );
});


export default Button;