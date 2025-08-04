import { useClientValidity } from '../hooks';
import type { NumberInputProps } from './type';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { FormWrapper, ValidatorBottomLabel } from './atomize'
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { forwardRef, useEffect, useRef } from 'react';


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
    const safeStep = step ?? 1;

    const increment = () => {
        const current = parseFloat(inputRef.current?.value || '0');
        const result = current + safeStep;
        inputRef.current.value = result;

        onChange?.(result);
    }
    const decrement = () => {
        const current = parseFloat(inputRef.current?.value || '0');
        const result = current - safeStep;
        inputRef.current.value = result;
        
        onChange?.(result);
    }
    useEffect(() => {
        if (value === undefined || inputRef.current?.value === String(value)) return;
        inputRef.current!.value = String(value);
    }, [value]);
    

    return (
        <FormWrapper
            data-id={uid}
            color={color}
            required={required}
            labelLeft={
                iconEnable && (
                    <Icon
                        data-id={props['data-id']}
                        tag="MinusIcon"
                        useClick={decrement}
                    />
                )
            }
            labelRight={
                iconEnable && (
                    <Icon
                        data-id={props['data-id']}
                        tag="PlusIcon"
                        useClick={increment}
                    />
                )
            }
            error={
                !isValid && (
                    <ValidatorBottomLabel>
                        {text}
                    </ValidatorBottomLabel>
                )
            }
            {...props}
        >
            <style>
                {`
                    input[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor};
                    }
                `}
            </style>

            <input
                type="number"
                ref={inputRef}
                data-id={uid}
                placeholder={placeholder}
                required={required}
                style={{
                    display: 'block',
                    width: '100%',
                    color: props?.style?.color ?? styles?.input?.fontColor,
                }}
                onChange={(e) => {
                    const v = e.target.value;
                    if (v === '') onChange?.(undefined);
                    else if (!isNaN(+v)) onChange?.(+v);
                }}
            />
        </FormWrapper>
    );
});


export default NumberInput;