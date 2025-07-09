import type { SwitchBoxInputProps } from './type';
import * as Switch  from "@radix-ui/react-switch";
import { FaCheck } from "react-icons/fa";
import { FormWrapper } from './atomize';
import { useCache } from './hooks';


export default function SwitchBox({ size, onChange, value, ...props }: SwitchBoxInputProps) {
    const [chek, setChek] = useCache(value);
    const sizeClass = {
        xs: 'w-7 h-4',
        sm: 'w-9.5 h-5.5',
        md: 'w-9.5 h-5.5',
        lg: 'w-11 md:h-6.5',
        xl: 'w-12 xl:h-7',
    };
    const thumbSizeClass = {
        xs: 'w-3 h-3 translate-x-0.5',
        sm: 'w-4.5 h-4.5 translate-x-0.5',
        md: 'w-4.5 h-4.5 translate-x-0.5',
        lg: 'w-5 h-5 translate-x-0.5',
        xl: 'w-5.5 h-5.5 translate-x-0.5',
    };
    const translate = {
        xs: 'data-[state=checked]:translate-x-2.5',
        sm: 'data-[state=checked]:translate-x-3.5',
        md: 'data-[state=checked]:translate-x-3.5',
        lg: 'data-[state=checked]:translate-x-4',
        xl: 'data-[state=checked]:translate-x-4.5',
        auto: 'data-[state=checked]:translate-x-2.5 sm:data-[state=checked]:translate-x-3.5 md:data-[state=checked]:translate-x-3.5 lg:data-[state=checked]:translate-x-4 xl:data-[state=checked]:translate-x-4.5'
    }
    const autoSwitchSize = `
        w-7 h-4
        sm:w-9.5 sm:h-5.5
        md:w-9.5 md:h-5.5
        lg:w-11 lg:h-6.5
        xl:w-12 xl:h-7
    `;
    const autoThumbSize = `
        w-3 h-3 translate-x-0.5
        sm:w-4.5 sm:h-4.5
        md:w-4.5 md:h-4.5
        lg:w-5 lg:h-5
        xl:w-6 xl:h-6
    `;


    return(
        <FormWrapper
            size={size}
            disabledVisibility={true}
            { ...props }
        >
            <Switch.Root
                checked={chek}
                onCheckedChange={(v)=> {
                    onChange?.(v);
                    setChek(v);
                }}
                style={{
                        
                }}
                className={`
                    relative inline-flex flex-shrink-0 cursor-pointer items-center 
                    rounded-full 
                    transition-colors 
                    border-1
                    border-neutral-500
                    data-[state=checked]:bg-base-300
                    ${sizeClass[size] ?? autoSwitchSize}
                `}
            >
                <Switch.Thumb
                    style={{

                    }}
                    className={`
                        transition-transform duration-300 ease-in-out
                        ${translate[size] ?? translate.auto}
                        data-[state=unchecked]:translate-x-0
                    `}
                >
                    <div 
                        className={`
                            flex
                            ring-0
                            rounded-full 
                            border-neutral-300
                            bg-gray-300
                            ${!chek && 'opacity-80'}
                            shadow-lg
                            ${thumbSizeClass[size] ?? autoThumbSize}
                        `}
                    >
                    <FaCheck
                        fontSize="inherit"
                        className={`
                            pointer-events-none inline-block 
                            border-0
                            m-auto
                            ring-0
                            ${chek && 'text-black'}
                            ${!chek && 'text-transparent'}
                        `}
                    />
                    </div>
                </Switch.Thumb>
            </Switch.Root>
        </FormWrapper>
    );
}


/**
 * `
                        pointer-events-none inline-block rounded-full 
                        bg-white
                        shadow-lg 
                        ring-0 
                        transition-transform 
                        duration-200 
                        ease-in-out
                        ${thumbSizeClass[size] ?? autoThumbSize}
                    `
 */