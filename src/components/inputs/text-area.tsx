import React, { useMemo } from 'react';
import type { BaseProps } from './type';
import { LabelTop } from './atomize';
import { useCache } from '../hooks';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { colord } from 'colord';



type TextAreaProps = Omit<BaseProps, 'type'>;


export default function TextAreaInput({ 
    onChange, 
    placeholder, 
    size, 
    color, 
    labelTop, 
    required, 
    value, 
    style = {},
    ...props 
}: TextAreaProps) {
    const { styles, autosizes, variants } = useTheme();
    const uid = useUids('text-area');
    const [val, setVal] = useCache(value);
    const sizes = size ? `textarea-${size}` : autosizes.textarea;

    
    const colorBorder = useMemo(() => {
        let propsColor = (variants[color] ?? color) ?? style.borderColor;

        propsColor = propsColor
            ? colord(propsColor).lighten(0.1).alpha(0.8).toRgbString()
            : styles?.input?.borderColor;

        return propsColor;
    }, [color, style, styles]);
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor) ?? styles?.input?.borderColor;

        return colorVarint;
    }, [color, style]);
    const colorBg = useMemo(() => {
        let propsColor = (variants[color] ?? color) ?? style.backgroundColor;

        propsColor = propsColor
            ? colord(propsColor).alpha(0.1).toRgbString()
            : styles?.input?.backgroundColor;

        return propsColor;
    }, [color, style, styles]);
    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }


    return (
        <React.Fragment>
            <style>
                {`
                    textarea[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor}
                    }
                    .input-focus:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `}
            </style>
            
            { labelTop &&
                <LabelTop size={size} required={required}>
                    { labelTop }
                </LabelTop>
            }

            <textarea
                data-id={uid}
                onChange={(e) => handle(e.target.value)}
                placeholder={placeholder}
                value={val}
                style={{
                    minHeight: 'calc(0.25rem * 10)',
                    color: styles?.input?.fontColor,
                    borderColor: colorBorder ?? styles?.input?.borderColor,
                    borderStyle: styles?.input?.borderStyle,
                    borderWidth: styles?.input?.borderWidth,
                    ...style,
                    backgroundColor: colorBg,
                }}
                className={`
                    textarea
                    w-full
                    input-focus
                    textarea-${color}
                    ${sizes}
                `}
                { ...props }
            />
        </React.Fragment>
    );
}