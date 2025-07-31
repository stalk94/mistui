import { forwardRef, useCallback, useMemo } from 'react';
import type { ButtonProps } from './type';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { createGradientStyle } from '../hooks';
import { cs } from '../hooks/cs';
import { colord } from "colord";
import Ripple from './animation';


function isBright(colorStr: string): boolean {
    const c = colord(colorStr);
    const rgb = c.toRgb();
    // Формула восприятия яркости (0..255)
    const brightness = Math.sqrt(
        0.299 * (rgb.r * rgb.r) +
        0.587 * (rgb.g * rgb.g) +
        0.114 * (rgb.b * rgb.b)
    );
    
    return brightness > 200;
}



const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        style = {},
        children,
        size,
        variant = 'contained',
        color = 'neutral',
        fullWidth,
        className,
        isGradient,
        selected,
        shadow,
        ripple = true,
        ...props
    },
    ref
) {
    const { variants, autosizes, plugins, shadows } = useTheme();
    const uid = useUids('button');
    const getSize = (size && size!=='auto') ? `btn-${size}` : autosizes.btn;
    

    const colorContrast = useMemo(() => {
        if (variant === 'contained' || isGradient) {
            return isBright(variants[color] ?? color) ? 'black' : 'white';
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
    const getGradient = useMemo(() => {
        if (!isGradient) return {};
        const inlneBg = style?.backgroundColor;
        const curVariant = (variants[color] ?? color);

        return createGradientStyle(inlneBg ?? curVariant, 'to bottom');
    }, [style, color, variant, isGradient]);
    const getStyle = useMemo(() => {
        if (variant === 'ghost') return style;
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = { 
            ...style,
            backgroundColor: (variant !== 'soft' && variant !== 'link') && (variants[color] ?? color ?? inlneBg),
            borderColor: plugins.alpha(variants[color], 0.3) ?? inlneBorder,
            color: (variant === 'dash' || variant === 'outline')
                ? (variants[color] ?? color) 
                : colorContrast
        }
        
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                borderColor: (variants[color] ?? color) ?? inlneBorder,
                backgroundColor: inlneBg ?? 'inherit',
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }
        if (isGradient) {
            st.color = colorContrast;
            st.border = 'none';
        }
        if (selected) {
            st.backgroundColor = plugins.lighten(st.backgroundColor, 0.25);
            st.borderColor = plugins.lighten(st.borderColor, variant !== 'soft' ? 0.25 : 0.35);
        }

        return st;
    }, [style, color, variant, selected, isGradient]);
    const getColorHover = useCallback((key: 'backgroundColor' | 'color' | 'border') => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        const inlneTxt = style?.color;
        const curVariant = variants[color] ?? color;

        if (key === 'backgroundColor') return (inlneBg
            ? plugins.mixers.background(inlneBg, 'hover')
            : plugins.mixers.background(curVariant, 'hover')
        );
        else if (key === 'border') return (inlneBg
            ? plugins.mixers.border(inlneBorder, 'hover')
            : plugins.mixers.border(curVariant, 'hover')
        );
        else return (inlneTxt
            ? plugins.contrast(inlneTxt)
            : plugins.contrast((inlneBg ?? inlneBorder) ?? curVariant)
        );
    }, [style, color, variant]);
    
  
    return (
        <Ripple 
            isEnable={!props.disabled && ripple} 
            color={getColorHover('border')}
            fullWidth={fullWidth}
            className={`rounded text-shadow-none whitespace-nowrap ${className ?? ''}`}
        >
            {(!props['data-id'] && !selected) &&
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
                data-id={uid}
                style={{ 
                    boxShadow: shadows[shadow], 
                    opacity: props.disabled && 0.3,
                    ...getStyle,
                    ...getGradient,
                    color: props?.disabled ? '#d1d0d0' : getStyle.color
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
                    ${fullWidth ? 'w-full' : ''}
                    ${className ?? ''}
                `)}
                { ...props }
            >
                { children }
            </button>
        </Ripple>
    );
});


export default Button;