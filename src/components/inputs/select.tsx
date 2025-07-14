import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { useCache, useClickOutside } from '../hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';


export default function Select({ 
    onChange, 
    placeholder, 
    items, 
    size, 
    value,
    required,
    style = {},
    color = 'primary',
    ...props 
}: SelectInputProps) {
    const { styles } = useTheme();
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
            color={color}
            style={{ position: 'relative', ...style }}
            labelRight={ 
                <button className='cursor-pointer'
                    onClick={()=> setOpen(v => !v)}
                >
                    <ChevronDownIcon
                        fill={(style?.color ?? styles?.input?.fontColor)}
                        className={`
                            label w-[1em] h-[1em]
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
                    : <span style={{color: styles?.input?.placeholderColor}}>
                        { placeholder }
                     </span>
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