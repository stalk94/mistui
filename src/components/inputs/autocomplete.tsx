import type { AutoInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useCache, useClickOutside } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo } from 'react';


export default function Autocomplete({ 
    onChange, 
    placeholder, 
    options, 
    size, 
    value,
    style = {},
    color = 'primary',
    required,
    ...props 
}: AutoInputProps) {
    const { styles, variants } = useTheme();
    const [input, setInput] = useCache(value ?? '');
    const uid = useUids('autocomplete');
    const [open, setOpen] = useCache(false);
    

    useClickOutside(['[data-autocomplete-root]', '[data-autocomplete-dropdown]'],
        () => setOpen(false)
    );
    const filtered = options.filter(opt =>
        opt.toLowerCase().includes(input.toLowerCase())
    );
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor) ?? styles?.input?.borderColor;

        return colorVarint;
    }, [color, style]);
    const handleSelect = (value: string) => {
        setInput(value);
        setOpen(false);
        onChange?.(value);
    }


    return (
        <>
            <style>
                {`
                    input[data-style-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor}
                    }
                    .input-focus[data-style-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `}
            </style>

            <FormWrapper
                size={size}
                data-style-id={uid}
                color={color}
                data-autocomplete-root
                style={{ position: 'relative', ...style }}
                labelRight={
                    <button className='cursor-pointer'
                        onClick={() => setOpen(v => !v)}
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
                    data-id={uid}
                    type="text"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        setOpen(true);
                    }}
                />

                {open && filtered.length > 0 &&
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
        </>
    );
}