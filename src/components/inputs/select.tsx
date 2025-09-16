import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo, useRef, useState, useEffect } from 'react';
import { Popover } from '../helpers';
import { cs } from '../hooks/cs';


//! color placeholder, text
export default function Select({
    onChange,
    placeholder,
    items,
    size,
    value,
    required,
    style = {},
    color = 'neutral',
    variant =  'outline', 
    disabledForm,
    rightIcon,
    usePortal = true,
    portalContainer,
    onToogleOpen,
    ...props
}: SelectInputProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { styles, variants, plugins } = useTheme();
    const uid = useUids('select');
    const [input, setInput] = useState(value);
    const [open, setOpen] = useState(false);


    const handleToogleOpen =(value: boolean)=> {
        onToogleOpen?.(value);
        setOpen(value);
    }
    const colorPlaceholder = useMemo(() => {
        const curColor = (variants[color] ?? color) ?? style?.color;
        let cur = 'white';

        if (!variants[color]) {
            const isBright = plugins.isBright(curColor, 100);

            if (!isBright) cur = 'white';
            else cur = curColor;

            if (variant === 'contained' || variant === 'soft') cur = 'black';
        }

        return plugins.alpha(cur, 0.4);
    }, [color, style, variant]);
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor) ?? styles?.input?.borderColor;

        return colorVarint;
    }, [color, style]);
    const handleSelect = (value: string) => {
        setInput(value);
        setOpen(false);
        onChange?.(value);
    }
    useEffect(() => {
        if (value === null) return;

        const isPrimitive = (v: any) => typeof v !== 'object' || v === null;
        const getId = (v: any) => (isPrimitive(v) ? v : v?.id);

        const valueId = getId(value);
        const selectId = getId(input);

        if (valueId !== selectId) {
            setInput(value);
        }
    }, [value]);

    
    return (
        <>
            <style>
                {`
                    .input-focus[data-style-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `}
            </style>

            <Popover
                usePortal={usePortal}
                portalContainer={portalContainer}
                open={open}
                setOpen={handleToogleOpen}
                trigger={
                    <FormWrapper
                        size={size}
                        ref={ref}
                        data-style-id={uid}
                        color={color}
                        variant={variant}
                        style={{ ...style }}
                        disabledVisibility={disabledForm}
                        labelRight={
                            <button className='cursor-pointer'>
                                {rightIcon 
                                    ? rightIcon
                                    : (
                                        <ChevronDownIcon
                                            fill={(style?.color ?? styles?.input?.fontColor)}
                                            className={cs(`
                                                label w-[1em] h-[1em]
                                                ${open && 'rotate-180'}
                                            `)}
                                        />
                                    )
                                }
                            </button>
                        }
                        {...props}
                    >
                        <span
                            className="w-full text-white h-full flex items-center cursor-pointer"
                        >
                            {input
                                ? (input?.label ?? input)
                                : <span style={{ color: colorPlaceholder }}>
                                    { placeholder }
                                </span>
                            }
                        </span>
                    </FormWrapper>
                }
            >
                <div>
                    <DropMenu
                        id="popover-select"
                        items={items}
                        style={{
                            width: ref?.current?.offsetWidth
                        }}
                        onSelect={handleSelect}
                    />
                </div>
            </Popover>
        </>
    );
}