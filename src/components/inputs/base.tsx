import React, { forwardRef, useMemo, useRef } from 'react';
import { FormWrapper, ValidatorBottomLabel } from './atomize';
import { useClientValidity, useCache } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import type { BaseProps } from './type';



const BaseInput = forwardRef<HTMLInputElement, BaseProps>(function BaseInput(
    {
        style,
        type,
        placeholder,
        size,
        color = 'primary',
        variant,
        labelLeft,
        labelTop,
        labelRight,
        validator,
        onChange,
        value,
        required,
        className,
        shadow,
        ...props
    },
    ref
) {
    const uid = useUids(type);
    const { styles, variants } = useTheme();
    const [val, setVal] = useCache(value);

    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const isInvalid = useClientValidity(inputRef);

    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor) ?? styles?.input?.borderColor;

        return colorVarint;
    }, [color, style]);

    
    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }
    

    return(
        <>
            <style>
                {`
                    input[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor}
                    }
                    .input-focus[data-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `}
            </style>
            
            <FormWrapper 
                data-id={uid}
                labelLeft={labelLeft}
                labelRight={labelRight}
                labelTop={labelTop}
                size={size}
                color={color}
                validator={validator}
                required={required}
                style={style}
                className={className}
                variant={variant}
                shadow={shadow}
            >
                <input
                    ref={inputRef}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    style={{
                        display: 'block', 
                        width: '100%', 
                        color: (style?.color ?? styles?.input?.fontColor)
                    }}
                    value={val}
                    onChange={(e)=> handle(e.target.value)}
                    { ...props }
                />
                { validator && typeof validator === 'boolean' && isInvalid &&
                    <ValidatorBottomLabel data-id={props['data-id']}>
                        !
                    </ValidatorBottomLabel>
                }
            </FormWrapper>
            { validator && isInvalid &&
                (typeof validator === 'object' || typeof validator === 'string') && 
                    <ValidatorBottomLabel data-id={props['data-id']}>
                        { validator }
                    </ValidatorBottomLabel>
            }
        </>
    );
});

export default BaseInput;