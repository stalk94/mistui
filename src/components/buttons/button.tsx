import { forwardRef, useCallback, useMemo } from 'react';
import type { ButtonProps } from './type';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { createGradientStyle } from '../hooks';
import { cs } from '../hooks/cs';



const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        style = {},
        children,
        size,
        variant = 'contained',
        color = 'primary',
        className,
        isGradient,
        selected,
        shadow,
        ...props
    },
    ref
) {
    const { variants, autosizes, mixers, plugins, shadows } = useTheme();
    const uid = useUids('button');
    const getSize = (size && size!=='auto') ? `btn-${size}` : autosizes.btn;
    

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
            backgroundColor: (variant !== 'soft' && variant !== 'link') && (variants[color] ?? color ?? inlneBg),
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
                borderColor: (variants[color] ?? color) ?? inlneBorder,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }
        if (selected) {
            st.backgroundColor = plugins.lighten(st.backgroundColor, 0.25);
            st.borderColor = plugins.lighten(st.borderColor, variant !== 'soft' ? 0.25 : 0.35);
        }

        return st;
    }, [style, color, variant, selected]);
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
                    opacity: props.disabled && 0.3,
                    ...getStyle,
                    ...getGradient,
                    color: props?.disabled ? '#d1d0d0' : getStyle.color,
                }}
                className={cs(`
                    btn 
                    text-shadow-none
                    whitespace-nowrap
                    ${variant === 'ghost' && 'btn-ghost'}
                    ${variant ? `btn-${variant}` : ''} 
                    ${getSize}
                    ${variant === 'soft' && `btn-soft btn-${color}`}
                    ${variant === 'link' && 'btn-link'}
                    font-bold 
                    uppercase
                    transition-transform 
                    duration-200 
                    hover:scale-97
                    ${className ?? ''}
                `)}
                { ...props }
            >
                { children }
            </button>

        </>
    );
});


export default Button;