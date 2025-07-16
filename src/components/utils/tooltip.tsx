import type { TooltipProps } from './types';
import { useTheme } from '../theme';
import { useMemo } from 'react';



export default function Tooltip({
    style = {},
    children,
    size,
    color,
    variant,
    content,
    className,
    position = 'top',
    ...props
}: TooltipProps) {
    const { shadows, plugins, autosizes, variants } = useTheme();
    const sizeText = (size && size !== 'auto') ? `text-${size}` : autosizes.text;

    
    const colorContrast = useMemo(() => {
        if (variant === 'soft' || variant === 'contained') {
            return plugins.contrast((variants[color] ?? color));
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
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


    return (
        <div
            className={`tooltip tooltip-${position}`}
            style={getStyle}
            { ...props }
        >
            <span 
                className={`tooltip-content rounded shadow ${className ?? ''} ${sizeText}`}
            >
                { content }
            </span>

            { children }
        </div>
    )
}