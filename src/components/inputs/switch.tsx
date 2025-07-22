import type { SwitchBoxInputProps } from './type';
import * as Switch  from "@radix-ui/react-switch";
import { FaCheck } from "react-icons/fa";
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { useCache } from '../hooks';
import { cs } from '../hooks/cs';
import { useCallback, useMemo } from 'react';

///////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////


// ! донастроить оттенки
export default function SwitchBox({ 
    size, 
    onChange, 
    value, 
    style = {},
    styleThumb,
    color,
    variant,
    shadow,
    ...props 
}: SwitchBoxInputProps) {
    const { styles, variants, plugins, shadows } = useTheme();
    const [chek, setChek] = useCache(value);
    const { backgroundColor, borderColor, ...styleRest } = style;
    

    const borderVariant = useMemo(() => {
        if (variant === 'dash') return {
            borderStyle: 'dashed'
        }
        else if (variant === 'outline') return {
            borderStyle: 'solid'
        }
        else return {};
    }, [variant, style, styles]);
    const chekColor = useCallback((type: 'borderColor' | 'backgroundColor') => {
        if (type === 'borderColor') return(
            plugins.lighten(
                (variants[color] ?? color) 
                        ?? borderColor 
                        ?? styles?.input?.switchBorderColor
                , 0.1)
        );
        else return (
            plugins.alpha(
                (variants[color] ?? color) 
                        ?? backgroundColor 
                        ?? variants.primary
                , 0.1)
        );
    }, [chek, color, style]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;

        const fontColorTheme = styles?.input?.fontColor;
        const colorContrast = plugins.contrast((variants[color] ?? color) ?? fontColorTheme);

        
        let st = {
            ...style,
            borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            backgroundColor: chek 
                ? chekColor('backgroundColor')
                : 'inherit'
            ,
            borderColor: chek 
                ? chekColor('borderColor')
                : (variants[color] ?? color) 
                        ?? inlneBg 
                        ?? styles?.input?.switchBorderColor,
            color: plugins.alpha(colorContrast, 0.6)
        }

        if (variant === 'ghost') st.borderWidth = chek ? 0 : 1;

        return st;
    }, [style, color, variant, chek]);
    const colorThumb = useMemo(()=> {
        return ({
            backgroundColor: plugins.lighten(
                (variants[color] ?? color)
                        ?? styleThumb?.backgroundColor 
                        ?? styles?.input?.switchThumbBackgroundColor
                , chek ? 0.3 : 0.1)
        });
    }, [chek, style, color, variant]);
    

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
                    boxShadow: shadows[shadow],
                    ...getStyle,
                    ...borderVariant
                }}
                className={cs(`
                    relative inline-flex flex-shrink-0 cursor-pointer items-center 
                    rounded-full 
                    transition-colors 
                    border-1
                    ${sizeClass[size] ?? autoSwitchSize}
                    transition-all
                    duration-200
                `)}
            >
                <Switch.Thumb
                    className={cs(`
                        transition-transform duration-300 ease-in-out
                        ${translate[size] ?? translate.auto}
                        data-[state=unchecked]:translate-x-0
                    `)}
                >
                    <div 
                        style={{
                            border: 0,
                            borderWidth: 1,
                            ...colorThumb
                        }}
                        className={cs(`
                            flex
                            ring-0
                            rounded-full 
                            shadow-lg 
                            ${thumbSizeClass[size] ?? autoThumbSize}
                        `)}
                    >
                        <FaCheck
                            fontSize="inherit"
                            color={getStyle?.color}
                            className={cs(`
                                pointer-events-none inline-block 
                                border-0
                                m-auto
                                ring-0
                                h-[60%]
                                ${!chek && 'opacity-0'}
                            `)}
                        />
                    </div>
                </Switch.Thumb>
            </Switch.Root>
        </FormWrapper>
    );
}