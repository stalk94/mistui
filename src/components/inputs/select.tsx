import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo, useRef, useState } from 'react';
import { Popover } from '../helpers';



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
    const ref = useRef<HTMLDivElement>(null);
    const { styles, variants } = useTheme();
    const uid = useUids('select');
    const [input, setInput] = useState(value);
    const [open, setOpen] = useState(false);


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

            <Popover
                usePortal
                open={open}
                setOpen={setOpen}
                trigger={
                    <FormWrapper
                        size={size}
                        ref={ref}
                        data-style-id={uid}
                        color={color}
                        style={{ ...style }}
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
                        <span
                            className="w-full h-full flex items-center cursor-pointer"
                        >
                            {input
                                ? input
                                : <span style={{ color: styles?.input?.placeholderColor }}>
                                    { placeholder }
                                </span>
                            }
                        </span>
                    </FormWrapper>
                }
            >
                <DropMenu
                    id="popover-select"
                    items={items}
                    style={{
                        width: ref?.current?.offsetWidth
                    }}
                    onSelect={handleSelect}
                />
            </Popover>
        </>
    );
}