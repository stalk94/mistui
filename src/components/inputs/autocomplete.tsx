import React from 'react';
import type { AutoInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../list/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useCache, useClickOutside } from './hooks';


export default function Autocomplete({ 
    onChange, 
    placeholder, 
    options, 
    size, 
    value,
    style,
    required,
    styleForm,
    ...props 
}: AutoInputProps) {
    const [input, setInput] = useCache(value ?? '');
    const [open, setOpen] = useCache(false);


    useClickOutside(['[data-autocomplete-root]', '[data-autocomplete-dropdown]'], 
        ()=> setOpen(false)
    );
    const filtered = options.filter(opt =>
        opt.toLowerCase().includes(input.toLowerCase())
    );
    const handleSelect = (value: string) => {
        setInput(value);
        setOpen(false);
        onChange?.(value);
    }


    return (
        <FormWrapper
            size={size}
            data-autocomplete-root
            style={{ position: 'relative', ...style }}
            labelRight={ 
                <button className='cursor-pointer'
                    onClick={()=> setOpen(v => !v)}
                >
                    <ChevronDownIcon
                        className={`
                            label w-[1em] h-[1em]
                            fill-current
                            ${open && 'rotate-180'}
                        `}
                    />
                </button>
            }
            { ...props }
        >
            <input
                type="text"
                placeholder={placeholder}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setOpen(true);
                }}
            />

            { open && filtered.length > 0 && 
                <DropMenu
                    data-autocomplete-dropdown
                    id="popover-1" 
                    style={{ 
                        position: 'absolute',
                        top: 'calc(100% + 2px)',
                        left: 0,
                        width: '100%'
                    }}
                    items={filtered ?? []}
                    onSelect={handleSelect}
                /> 
            }
        </FormWrapper>
    );
}