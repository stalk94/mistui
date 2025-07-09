import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../list/drop-menu';
import { useCache, useClickOutside } from './hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';


export default function Select({ 
    onChange, 
    placeholder, 
    items, 
    size, 
    value,
    required,
    style,
    ...props 
}: SelectInputProps) {
    const [input, setInput] = useCache(value);
    const [open, setOpen] = useCache(false);


    useClickOutside(['[data-select-root]', '[data-select-dropdown]'], 
        ()=> setOpen(false)
    );
    const handleSelect = (value: string) => {
        setInput(value);
        setOpen(false);
        onChange?.(value);
    }


    return (
        <FormWrapper
            size={size}
            data-select-root
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
            <span
                onClick={()=> setOpen(v => !v)}
                className="w-full h-full flex items-center cursor-pointer"
            >
                { input 
                    ? input 
                    : <span className='text-neutral-500'>{placeholder}</span>
                }
            </span>

            { open && 
                <DropMenu
                    data-select-dropdown
                    id="popover-select" 
                    style={{ 
                        position: 'absolute',
                        top: 'calc(100% + 2px)',
                        left: 0,
                        width: '100%'
                    }}
                    items={items}
                    onSelect={handleSelect}
                /> 
            }
        </FormWrapper>
    );
}