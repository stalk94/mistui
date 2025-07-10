import { useCache } from './hooks';
import type { NumberInputProps } from './type';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { FormWrapper } from './atomize'
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';


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

export default function NumberInput({ 
    iconEnable, 
    onChange, 
    value, 
    step, 
    placeholder,
    required,
    ...props 
}: NumberInputProps) {
    const uid = useUids('number');
    const { styles } = useTheme();
    const [val, setVal] = useCache(
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
    
    
    return (
        <FormWrapper
            data-id={uid}
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
}