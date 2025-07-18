import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { useCache, useClickOutside } from '../hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo } from 'react';



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
    const { styles, variants } = useTheme();
    const uid = useUids('autocomplete');
    const [input, setInput] = useCache(value);
    const [open, setOpen] = useCache(false);


    useClickOutside(['[data-select-root]', '[data-select-dropdown]'], 
        ()=> setOpen(false)
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
                data-select-root
                data-style-id={uid}
                color={color}
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
                <span
                    onClick={() => setOpen(v => !v)}
                    className="w-full h-full flex items-center cursor-pointer"
                >
                    {input
                        ? input
                        : <span style={{ color: styles?.input?.placeholderColor }}>
                            {placeholder}
                        </span>
                    }
                </span>

                {open &&
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
        </>
    );
}