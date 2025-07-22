import type { AutoInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo, useRef, useState } from 'react';
import { Popover } from '../helpers';



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
    const ref = useRef<HTMLDivElement>(null);
    const { styles, variants } = useTheme();
    const [input, setInput] = useState(value ?? '');
    const uid = useUids('autocomplete');
    const [open, setOpen] = useState(false);


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
                    input[data-id="${uid}"]::placeholder {
                        color: ${styles?.input?.placeholderColor};
                    }
                `}
            </style>

            <Popover
                usePortal
                open={open}
                setOpen={setOpen}
                trigger={
                    <FormWrapper
                        size={size}
                        data-style-id={uid}
                        color={color}
                        ref={ref}
                        style={{ position: 'relative', ...style }}
                        labelRight={
                            <button className='cursor-pointer'>
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
                    </FormWrapper>
                }
            >
                <DropMenu
                    id="popover-1"
                    style={{
                        width: ref?.current?.offsetWidth
                    }}
                    items={filtered ?? []}
                    onSelect={handleSelect}
                />
            </Popover>
        </>
    );
}