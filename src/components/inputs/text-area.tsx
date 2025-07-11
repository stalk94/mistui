import React from 'react';
import type { BaseProps } from './type';
import { LabelTop } from './atomize';
import { useCache } from '../hooks';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';

type TextAreaProps = Omit<BaseProps, 'type'>;


export default function TextAreaInput({ 
    onChange, 
    placeholder, 
    size, 
    color, 
    labelTop, 
    required, 
    value, 
    style,
    ...props 
}: TextAreaProps) {
    const { styles, autosizes } = useTheme();
    const uid = useUids('text-area');
    const [val, setVal] = useCache(value);
    const sizes = size ? `textarea-${size}` : autosizes.textarea;

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
                    borderColor: styles?.input?.borderColor,
                    borderStyle: styles?.input?.borderStyle,
                    borderWidth: styles?.input?.borderWidth,
                    backgroundColor: styles?.input?.backgroundColor,
                    ...style
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