import type { AutoInputProps } from './type';
import { FormWrapper } from './atomize';
import DropMenu from '../menu/drop-menu';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo, useRef, useState, useEffect } from 'react';
import { cs } from '../hooks/cs';
import { Popover } from '../helpers';



export default function Autocomplete({
    onChange,
    placeholder,
    options,
    size,
    value,
    style = {},
    color = 'neutral',
    variant = 'outline',
    required,
    portalContainer,
    usePortal = false,
    onToogleOpen,
    ...props
}: AutoInputProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { styles, variants, plugins } = useTheme();
    const [input, setInput] = useState(value ?? '');
    const uid = useUids('autocomplete');
    const [open, setOpen] = useState(false);


    const handleToogleOpen =(value: boolean)=> {
        onToogleOpen?.(value);
        setOpen(value);
    }
    const filtered = options.filter(opt =>
        opt.toLowerCase().includes(input.toLowerCase())
    );
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
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor);

        return colorVarint;
    }, [color, style]);
    const handleSelect = (value: string) => {
        setInput(value);
        setOpen(false);
        onChange?.(value);
    }
    useEffect(() => {
        if (value === undefined) return;
        if (value !== input) setInput(value);
    }, [value]);
  

    return (
        <>
            <style>
                {cs(`
                    input[data-id="${uid}"]::placeholder {
                        color: ${colorPlaceholder};
                    }
                    .input-focus[data-id="${uid}"]:focus-within {
                        outline-color: ${focusWithinColor};
                    }
                `)}
            </style>

            <Popover
                style={{position: 'fixed',  marginTop: 3}}
                open={open}
                portalContainer={portalContainer}
                setOpen={handleToogleOpen}
                usePortal={usePortal}
                trigger={
                    <FormWrapper
                        size={size}
                        data-style-id={uid}
                        color={color}
                        variant={variant}
                        ref={ref}
                        style={{ ...style }}
                        labelRight={
                            <button className='cursor-pointer'>
                                <ChevronDownIcon
                                    fill={(style?.color ?? styles?.input?.fontColor)}
                                    className={cs(`
                                    label 
                                    w-[1em] 
                                    h-[1em]
                                    ${open && 'rotate-180'}
                                `)}
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
                            style={{
                                display: 'block',
                                width: '100%',
                                color: (style?.color ?? styles?.input?.fontColor)
                            }}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setOpen(true)
                            }}
                        />
                    </FormWrapper>
                }
            >
                <DropMenu
                    id="popover-autocomplete"
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