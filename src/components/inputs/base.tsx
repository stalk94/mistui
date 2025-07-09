import React from 'react';
import { FormWrapper, ValidatorBottomLabel } from './atomize';
import { useClientValidity, useCache } from './hooks';
import type { BaseProps } from './type';


export default function BaseInput({ 
    style, 
    type, 
    placeholder, 
    size, 
    colorBorder, 
    labelLeft, 
    labelTop, 
    labelRight, 
    validator, 
    onChange, 
    value,
    required,
    styleInput,
    className,
    ...props 
}: BaseProps) {
    const [val, setVal] = useCache(value);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const isInvalid = useClientValidity(inputRef);

    const handle = (newValue: string) => {
        setVal(newValue);
        onChange?.(newValue);
    }
    
    return(
        <>
            <FormWrapper 
                labelLeft={labelLeft}
                labelRight={labelRight}
                labelTop={labelTop}
                size={size}
                colorBorder={colorBorder}
                validator={validator}
                required={required}
                data-id={props['data-id']}
                style={style}
                styleInput={styleInput}
                className={className}
            >
                <input
                    ref={inputRef}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    style={{display: 'block', width:'100%'}}
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
}