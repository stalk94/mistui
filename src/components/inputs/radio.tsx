import type { RadioInputProps } from './type';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useMemo, useCallback, useState } from 'react';


const radioSize = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7',
    auto: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7'
}


export default function RadioInput({ 
    onChange, 
    size, 
    color = 'neutral',
    value, 
    type, 
    shadow,
    variant,
    style,
    ...props 
}: RadioInputProps) {
    const [cheked, setCheked] = useState(value);
    const { styles, variants, shadows, plugins } = useTheme();
    const uid = useUids('radio');


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
    const chekColor = useCallback((type: 'borderColor' | 'backgroundColor') => {
        if (type === 'borderColor') return (
            plugins.lighten(
                (variants[color] ?? color)
                    ?? style?.borderColor
                    ?? styles?.input?.borderColor
                , 0.1)
        );
        else return (
            plugins.lighten(
                (variants[color] ?? color)
                    ?? style?.backgroundColor
                    ?? variants.primary
                , 0.2)
        );
    }, [color, style]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;

        let st = {
            ...style,
            borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            borderColor: cheked
                ? chekColor('borderColor')
                : (variants[color] ?? color)
                    ?? inlneBg
                    ?? styles?.input?.switchBorderColor,
        }

        if (variant === 'ghost') st.borderWidth = cheked ? 0 : 1;

        return st;
    }, [style, color, variant, cheked]);
    

    return (
        <FormWrapper 
            size={size} 
            disabledVisibility={true}
            { ...props }
        >
            <style>
                {`
                    .radio[data-style-id="${uid}"]::before {
                        background: ${cheked
                            ? chekColor('backgroundColor')
                            : 'white'
                        };    
                        opacity: ${!cheked ? 0 : 100 };
                    }
                `}
            </style>
            
            <input 
                type='checkbox'
                data-style-id={uid}
                onChange={(e)=> {
                    setCheked(e.target.checked);
                    onChange?.(e.target.checked)
                }}
                checked={cheked} 
                style={{
                    ...borderVariant,
                    ...getStyle
                }}
                className={`
                    radio
                    ${radioSize[size] ?? radioSize.auto}
                `}
            />
        </FormWrapper>
    );
}