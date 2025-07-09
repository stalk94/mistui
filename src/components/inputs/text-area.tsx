import React from 'react';
import type { BaseProps } from './type';
import { LabelTop } from './atomize';
import { useCache } from './hooks';

type TextAreaProps = Omit<BaseProps, 'type'>;


export default function TextAreaInput({ onChange, placeholder, size, color, labelTop, required, value, ...props }: TextAreaProps) {
    const [val, setVal] = useCache(value);
    const sizes = size ? `textarea-${size}` : `textarea-sm sm:textarea-md md:textarea-md lg:textarea-lg xl:textarea-lg`;

    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }

    return (
        <React.Fragment>
            { labelTop &&
                <LabelTop size={size} required={required}>
                    { labelTop }
                </LabelTop>
            }

            <textarea
                onChange={(e) => handle(e.target.value)}
                placeholder={placeholder}
                value={val}
                style={{ minHeight: 'calc(0.25rem * 10)' }}
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