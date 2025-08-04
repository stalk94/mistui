import { useMemo, forwardRef, useEffect, Fragment, useRef } from 'react';
import type { TextAreaProps } from './type';
import { LabelTop } from './atomize';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';



const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextAreaInput(
    { 
        onChange, 
        placeholder, 
        className,
        size, 
        color = 'neutral', 
        variant = 'outline',
        labelTop, 
        required, 
        value, 
        shadow,
        style = {},
        ...props 
    },
    ref
) {
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const inputRef = (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;
    const { styles, shadows, autosizes, variants, plugins } = useTheme();
    const uid = useUids('text-area');
    const sizes = size ? `textarea-${size}` : autosizes.textarea;


    const colorPlaceholder = useMemo(() => {
        const curColor = (variants[color] ?? color) ?? style?.color;
        let cur = 'white';

        if (!variants[color]) {
            const isBright = plugins.isBright(curColor, 100);

            if (!isBright) cur = 'white';
            else cur = curColor;

            if (variant === 'contained' || variant === 'soft') cur = 'black';
        }

        return plugins.alpha(cur, 0.4);
    }, [color, style, variant]);
    const borderVariant = useMemo(() => {
        if (variant === 'dash') return {
            borderStyle: 'dashed'
        }
        else if (variant === 'outline') return {
            borderStyle: 'solid'
        }
        else return {};
    }, [variant, style, styles]);
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor) ?? styles?.input?.borderColor;

        return colorVarint;
    }, [color, style]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        const fontColorTheme = styles?.input?.fontColor;
        const colorContrast = plugins.contrast((variants[color] ?? color));

        let st = {
            ...style,
            backgroundColor: (variant !== 'ghost') && (variants[color] ?? color),
            color: (variant === 'dash' || variant === 'outline')
                ? (variants[color] ?? color) ?? fontColorTheme
                : colorContrast,
        }

        if (variant === 'ghost') st.borderWidth = 0;
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: plugins.alpha((variants[color] ?? color) ?? inlneBg, 0.05) ?? 'inherit',
                borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.6),
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }


        return st;
    }, [style, color, variant]);
    const handle = (newValue: string) => {
        onChange?.(newValue);
    }

    useEffect(() => {
        if (value === undefined) return;

        if (value !== undefined && inputRef.current?.value !== value) {
            inputRef.current.value = String(value);
        }
    }, [value]);


    return (
        <Fragment>
            <style>
                {cs(`
                    .textarea[data-id="${uid}"]::placeholder {
                        color: ${colorPlaceholder}
                    }
                    .textarea[data-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `)}
            </style>
            
            { labelTop &&
                <LabelTop size={size} required={required}>
                    { labelTop }
                </LabelTop>
            }

            <textarea
                data-id={uid}
                ref={inputRef}
                onChange={(e) => handle(e.target.value)}
                placeholder={placeholder}
                style={{
                    minHeight: 'calc(0.25rem * 10)',
                    boxShadow: shadows[shadow],
                    ...getStyle,
                    ...borderVariant,
                    color: (style?.color ?? styles?.input?.fontColor),
                }}
                className={cs(`
                    textarea
                    w-full
                    input-focus
                    ${sizes}
                    ${className ?? ''}
                `)}
                { ...props }
            />
        </Fragment>
    );
});


export default TextAreaInput;