import type { CheckBoxInputProps } from './type';
import { FormWrapper } from './atomize';
import clsx from 'clsx';



export default function CheckBoxInput({ 
    onChange, 
    size, 
    color, 
    value, 
    type, 
    style,
    className,
    ...props 
}: CheckBoxInputProps) {
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


    return (
        <FormWrapper 
            size={size} 
            disabledVisibility
            style={style}
            { ...props }
        >
            <label className={`relative inline-flex ${top[size]??top.auto} items-center cursor-pointer`}>
                <input key={value ? 1 : 0} defaultChecked={value} type="checkbox" className="sr-only peer" />
                
                {/* обводка */}
                <div 
                    className={clsx(`
                        ${sizes[size] ?? sizes.auto}
                        border-1
                        border-[${style?.borderColor ?? 'var(--input-color)'}]
                        ${color && `border-${color}`}
                        opacity-20
                        rounded
                        transition-all
                        duration-200
                        peer-checked:opacity-80
                        flex items-center justify-center
                    `, className)}
                />

                {/* галочка */}
                <svg
                    className={`
                        absolute 
                        left-0 top-0 
                        ${sizes[size] ?? sizes.auto} 
                        ${color && `stroke-${color}`}
                        p-[2px]
                        pointer-events-none
                        opacity-0
                        scale-75
                        peer-checked:opacity-100 
                        peer-checked:scale-100
                        transition-all duration-200
                    `}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 13l4 4L19 7" />
                </svg>
            </label>
        </FormWrapper>
    );
}