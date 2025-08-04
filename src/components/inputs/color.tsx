import { Fragment, useMemo, useRef, useState, useEffect } from 'react';
import type { SelectInputProps } from './type';
import { FormWrapper } from './atomize';
import { RgbaColorPicker, RgbaColor } from 'react-colorful';
import { rgbaToString, stringToRgba } from '../hooks/helpers';
import { useDebounced } from '../hooks/debounce';
import { useTheme } from '../theme';
import stylesPicker from './styles/global.module.css';
import { cs } from '../hooks/cs';
import { useUids } from '../hooks/uuid';
import { Popover } from '../helpers';


const Inputs = ({ updateComponent, input, styleInput }) => {
    const rgba = stringToRgba(input);
    

    return(
        <div 
            className="flex gap-1 items-center w-full h-full" 
            onClick={(e)=> e.preventDefault()}
        >
            {(['r', 'g', 'b'] as const).map((ch) => (
                <Fragment key={ch}>
                    <span className='text-neutral-500' 
                        style={{ color: styleInput?.placeholderColor }}
                    >
                        { ch + ':' }
                    </span>
                    <input
                        type="number"
                        min={0}
                        max={255}
                        value={rgba[ch]}
                        onChange={(e) => updateComponent(ch, Math.max(0, Math.min(255, +e.target.value)), rgba)}
                        placeholder={ch.toUpperCase()}
                        className="max-w-8"
                        style={styleInput}
                    />
                </Fragment>
            ))}

            <span 
                className='text-neutral-500'
                style={{ color: styleInput?.placeholderColor }}
            >
                a:
            </span>
            <input
                type="number"
                step={0.01}
                min={0}
                max={1}
                value={rgba.a}
                onChange={(e) => updateComponent('a', Math.max(0, Math.min(1, +e.target.value)), rgba)}
                placeholder="A"
                className="max-w-8"
                style={styleInput}
            />
        </div>
    );
}


export default function SelectColor({ 
    onChange, 
    placeholder, 
    items, 
    size, 
    value,
    openPicker,
    required,
    style,
    color = 'neutral',
    variant = 'outline',
    ...props 
}: SelectInputProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { styles, variants, plugins } = useTheme();
    const uid = useUids('color');
    const [input, setInput] = useState(value);
    const [open, setOpen] = useState(false);


    const debouncedOnChange = useDebounced((val: string) => {
        onChange?.(val);
    }, 100, [onChange]);
    const handleChangePicker = (value: RgbaColor) => {
        const str = rgbaToString(value);
        setInput(str);
        debouncedOnChange(str);
    }
    const handleChangeInputs = (key: keyof RgbaColor, val: number, rgba: RgbaColor) => {
        const updated = { ...rgba, [key]: val };
        const str = rgbaToString(updated);
        setInput(str);
        debouncedOnChange(str);
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
    }, [color, style]);
    const focusWithinColor = useMemo(() => {
        const colorVarint = ((variants[color] ?? color) ?? style?.borderColor);

        return colorVarint;
    }, [color, style]);
    
    useEffect(() => {
        if (value === undefined) return;
        if (value !== input) setInput(value);
    }, [value]);
    useEffect(() => {
        if (openPicker === undefined) return;
        if (openPicker !== open) setOpen(openPicker);
    }, [openPicker]);


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
                usePortal
                open={open}
                setOpen={setOpen}
                style={{marginTop: 10}}
                trigger={
                    <FormWrapper
                        size={size}
                        ref={ref}
                        data-style-id={uid}
                        style={{ position: 'relative' }}
                        color={color}
                        variant={variant}
                        labelRight={
                            <button className='cursor-pointer'>
                                <span
                                    className={cs(`
                                        cursor-pointer
                                        bg-neutral-600
                                        rounded-[2px]
                                    `)}
                                    style={{ background: input }}
                                />
                            </button>
                        }
                        {...props}
                    >
                        <Inputs
                            styleInput={{
                                color: styles?.input?.fontColor,
                                placeholderColor: colorPlaceholder
                            }}
                            input={input}
                            updateComponent={handleChangeInputs}
                        />
                    </FormWrapper>
                }
            >
                <div
                    id="popover-color"
                    style={{
                        width: ref?.current?.offsetWidth,
                    }}
                    className={cs(`
                        dropdown 
                        shadow-md
                        backdrop-blur-[3px]
                        max-h-80 
                        overflow-y-auto 
                        p-2
                        rounded-box
                    `)}
                >
                    <div className={stylesPicker.wrapper} style={{ padding: 9 }}>
                        <RgbaColorPicker
                            style={{ width: '100%' }}
                            className="colorPicker"
                            color={stringToRgba(input)}
                            onChange={handleChangePicker}
                        />
                    </div>
                </div>
            </Popover>
        </>
    );
}