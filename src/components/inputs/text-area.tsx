import React from 'react';
import type { BaseProps } from './type';
import { LabelTop } from './atomize';
import { useCache } from './hooks';
import { useTheme } from '../theme';

type TextAreaProps = Omit<BaseProps, 'type'>;


export default function TextAreaInput({ onChange, placeholder, size, color, labelTop, required, value, ...props }: TextAreaProps) {
    const { styles } = useTheme();
    const [val, setVal] = useCache(value);
    const sizes = size ? `textarea-${size}` : `textarea-sm sm:textarea-md md:textarea-md lg:textarea-lg xl:textarea-lg`;

    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }

    return (
        <React.Fragment>
            <style>
                {`
                    textarea::placeholder {
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
                onChange={(e) => handle(e.target.value)}
                placeholder={placeholder}
                value={val}
                style={{
                    minHeight: 'calc(0.25rem * 10)',
                    color: styles?.input?.fontColor,
                    borderColor: styles?.input?.borderColor,
                    backgroundColor: styles?.input?.backgroundColor,
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