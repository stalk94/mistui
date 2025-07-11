import type { SwitchBoxInputProps } from './type';
import * as Switch  from "@radix-ui/react-switch";
import { FaCheck } from "react-icons/fa";
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { useCache } from '../hooks';


export default function SwitchBox({ 
    size, 
    onChange, 
    value, 
    style,
    styleThumb,
    ...props 
}: SwitchBoxInputProps) {
    const { styles } = useTheme();
    const [chek, setChek] = useCache(value);
    const { backgroundColor, borderColor, ...styleRest } = style;
    
    
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
            style={styleRest}
            { ...props }
        >
            <Switch.Root
                checked={chek}
                onCheckedChange={(v)=> {
                    onChange?.(v);
                    setChek(v);
                }}
                style={{
                    borderColor: (borderColor ?? styles?.input?.switchBorderColor),
                    backgroundColor: (backgroundColor ?? styles?.input?.checkBoxBackground),
                }}
                className={`
                    relative inline-flex flex-shrink-0 cursor-pointer items-center 
                    rounded-full 
                    transition-colors 
                    border-1
                    ${sizeClass[size] ?? autoSwitchSize}
                    transition-all
                    duration-200
                    ${chek && 'brightness-300'}
                `}
            >
                <Switch.Thumb
                    className={`
                        transition-transform duration-300 ease-in-out
                        ${translate[size] ?? translate.auto}
                        data-[state=unchecked]:translate-x-0
                    `}
                >
                    <div 
                        style={{
                            borderColor: (styleThumb?.borderColor ?? styles?.input?.switchThumbBorderColor),
                            background: (styleThumb?.backgroundColor ?? styles?.input?.switchThumbBackgroundColor),
                            borderWidth: 1
                        }}
                        className={`
                            flex
                            ring-0
                            rounded-full 
                            ${!chek && 'opacity-80'}
                            shadow-lg
                            ${thumbSizeClass[size] ?? autoThumbSize}
                        `}
                    >
                        <FaCheck
                            fontSize="inherit"
                            color={styleThumb?.iconColor ?? styles?.input?.switchThumbIconColor}
                            className={`
                                pointer-events-none inline-block 
                                border-0
                                m-auto
                                ring-0
                                ${!chek && 'opacity-0'}
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