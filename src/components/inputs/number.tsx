import BaseInput from './base';
import type { NumberInputProps } from './type';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';


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
            <IconTag className="label w-[1.1em] h-[1.1em] fill-current" />
        </button>
    );
}

export default function NumberInput({ iconEnable, onChange, value, step, ...props }: NumberInputProps) {
    const safeValue = typeof value === 'number' ? value : parseFloat(value as any) || 0;

    const increment = () => {
        onChange?.(safeValue + (step ?? 1));
    }
    const decrement = () => {
        onChange?.(safeValue - (step ?? 1));
    }

    
    return (
        <BaseInput
            type='number'
            value={value}
            onChange={(v) => {
                if (v !== undefined && v !== null && !isNaN(+v)) {
                    onChange?.(+v);
                }
            }}
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
        />
    );
}