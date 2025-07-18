import type { CheckBoxInputProps } from './type';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import clsx from 'clsx';
import { useMemo, useCallback } from 'react';


//////////////////////////////////////////////////////////////////////////////
const sizes = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
    auto: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7'
}
const top = {
    xs: 'top-1',
    sm: 'top-1',
    md: 'top-2',
    lg: 'top-2',
    xl: 'top-2',
    auto: 'top-1 sm:top-1 md:top-2 lg:top-2 xl:top-2'
}
//////////////////////////////////////////////////////////////////////////////


export default function CheckBoxInput({ 
    onChange, 
    size, 
    color = 'primary', 
    value, 
    type, 
    style = {},
    shadow,
    variant,
    className,
    ...props 
}: CheckBoxInputProps) {
    const { styles, variants, plugins } = useTheme();
    const { backgroundColor, ...styleRest } = style;


    const borderVariant = useMemo(() => {
        if (style?.borderStyle) return {
            borderStyle: style?.borderStyle
        }
        else if (variant === 'dash') return {
            borderStyle: 'dashed'
        }
        else if (variant === 'outline') return {
            borderStyle: 'solid'
        }
        else return {};
    }, [variant, style, styles]);


    return (
        <FormWrapper 
            size={size} 
            disabledVisibility
            style={styleRest}
            { ...props }
        >
            <label className={`relative inline-flex ${top[size]??top.auto} items-center cursor-pointer`}>
                <input key={value ? 1 : 0} defaultChecked={value} type="checkbox" className="sr-only peer" />
                
                {/* обводка */}
                <div 
                    style={{
                        color: styles?.input?.fontColor, 
                        borderColor: (variants[color] ?? color) 
                            ?? style?.borderColor 
                            ?? styles?.input?.borderColor,
                        ...borderVariant
                    }}
                    className={clsx(`
                        ${sizes[size] ?? sizes.auto}
                        border-1
                        border-[var(--input-color)]
                        rounded
                        transition-all
                        duration-200
                        peer-checked:brightness-200
                        flex items-center justify-center
                    `, className)}
                />

                {/* галочка */}
                <svg
                    className={`
                        absolute 
                        left-0 top-0 
                        ${sizes[size] ?? sizes.auto} 
                        p-[2px]
                        pointer-events-none
                        opacity-0
                        scale-75
                        peer-checked:opacity-100 
                        peer-checked:scale-100
                        transition-all duration-200
                    `}
                    fill="none"
                    stroke={(variants[color] ?? color) 
                        ?? (style?.backgroundColor 
                            ?? styles?.input?.checkBoxBackground) 
                                ?? 'white'
                    }
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </label>
        </FormWrapper>
    );
}