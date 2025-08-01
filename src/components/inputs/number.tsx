import { useClientValidity } from '../hooks';
import type { NumberInputProps } from './type';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { FormWrapper, ValidatorBottomLabel } from './atomize'
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { forwardRef, useEffect, useRef, useState } from 'react';


const Icon = ({ useClick, tag, 'data-id': dataId }) => {
    const IconTag = { PlusIcon, MinusIcon }[tag];

    return(
        <button
            onClick={useClick}
            className={`
                btn 
                btn-sm
                p-0 m-0
                bg-transparent 
                hover:bg-transparent 
                border-none 
                shadow-none
            `}
        >
            <IconTag 
                className="label w-[1.1em] h-[1.1em] fill-current" 
            />
        </button>
    );
}


const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
    { 
        iconEnable, 
        onChange, 
        value, 
        step, 
        placeholder,
        color = 'neutral',
        required,
        validator,
        ...props 
    }, 
    ref
) {
    const internalRef = useRef<HTMLInputElement>(null);
    const inputRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;
    const uid = useUids('number');
    const { styles } = useTheme();
    const { isValid, text } = useClientValidity(validator, inputRef);
    const [val, setVal] = useState(
        typeof value === 'number' 
            ? value 
            : parseFloat(value as any) || undefined
    );

    
    const increment = () => {
        setVal((safeValue)=> {
            const result = safeValue + (step ?? 1);
            onChange?.(result);
            return result;
        });
    }
    const decrement = () => {
        setVal((safeValue)=> {
            const result = safeValue - (step ?? 1);
            onChange?.(result);
            return result;
        });
    }
    useEffect(()=> {
        if (value === undefined) return;

        if (value !== val) setVal(
            typeof value === 'number' 
                ? value 
                : parseFloat(value as any) || undefined
        );
    }, [value]);
    

    return (
        <FormWrapper
            data-id={uid}
            color={color}
            labelLeft={
                iconEnable &&
                    <Icon
                        data-id={props['data-id']}
                        tag='MinusIcon'
                        useClick={decrement}
                    />
            }
            labelRight={
                iconEnable &&
                    <Icon
                        data-id={props['data-id']}
                        tag='PlusIcon'
                        useClick={increment}
                    />
            }
            error={
                !isValid &&
                    <ValidatorBottomLabel>
                        { text }
                    </ValidatorBottomLabel>
            }
            { ...props }
        >
            <style>
                {`
                    input[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor}
                    }
                `}
            </style>

            <input
                type='number'
                ref={inputRef}
                placeholder={placeholder}
                required={required}
                style={{ 
                    display: 'block', 
                    width: '100%',
                    color: (props?.style?.color ?? styles?.input?.fontColor)
                }}
                value={val ?? ''}
                onChange={(e) => {
                    const v = e.target.value;

                    if (v === '') {
                        setVal(undefined);
                        onChange?.(undefined);
                    }
                    else if (v !== undefined && v !== null && !isNaN(+v)) {
                        setVal(+v);
                        onChange?.(+v);
                    }
                }}
            />
        </FormWrapper>
    );
});


export default NumberInput;