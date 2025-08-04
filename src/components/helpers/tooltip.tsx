import type { TooltipProps } from './types';
import { useTheme } from '../theme';
import { useMemo } from 'react';
import { useUids } from '../hooks/uuid';
import { cs } from '../hooks/cs';



export default function Tooltip({
    style = {},
    children,
    size,
    color,
    variant = 'contained',
    content,
    className,
    position = 'top',
    ...props
}: TooltipProps) {
    const { plugins, autosizes, variants } = useTheme();
    const uid = useUids('tooltip');
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
                backgroundColor: inlneBg ?? 'transparent',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderWidth: 1,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }

        return st;
    }, [style, color, variant]);
    const getStyleAfter = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = {
            ...style,
            borderWidth: 1,
            backgroundColor: (variant !== 'ghost' && variant !== 'link') && (variants[color] ?? color),
        }


        if (variant === 'dash' || variant === 'outline') {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: (variants[color] ?? color) ?? inlneBg ?? 'transparent',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderWidth: 1,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }

        return st;
    }, [style, color, variant]);


    return (
        <div
            className={`tooltip tooltip-${position}`}
            data-id={uid}
            { ...props }
        >
            <style>
               {`
                    .tooltip[data-id="${uid}"]::after {
                        background-color: ${getStyleAfter.backgroundColor} !important;
                        border-color: ${getStyleAfter.borderColor} !important;
                    }
                `}
            </style>

            <span 
                className={cs(`
                    tooltip-content 
                    rounded 
                    shadow 
                    ${className ?? ''} ${sizeText}
                `)}
                style={getStyle}
            >
                { content }
            </span>

            { children }
        </div>
    );
}