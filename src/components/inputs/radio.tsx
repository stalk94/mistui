import type { RadioInputProps } from './type';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';



export default function RadioInput({ 
    onChange, 
    size, 
    color, 
    value, 
    type, 
    styleThumb,
    ...props 
}: RadioInputProps) {
    const { styles } = useTheme();
    const radioSize = {
        xs: 'w-4 h-4',
        sm: 'w-5 h-5',
        md: 'w-6 h-6',
        lg: 'w-6 h-6',
        xl: 'w-7 h-7',
        auto: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-7 xl:h-7'
    }


    return (
        <FormWrapper 
            size={size} 
            disabledVisibility={true}
            { ...props }
        >
            <style>
                {`
                    .radio::before {
                        background: ${styleThumb?.thumbColor ?? styles.input.radioThumbColor};    
                        opacity: ${!value ? 0 : 100 };
                    }
                `}
            </style>
            
            <input 
                type='checkbox'
                onChange={(e)=> onChange?.(e.target.checked)}
                checked={value !== undefined && value} 
                style={{
                    color: styles?.input?.fontColor, 
                    borderStyle: (props?.style?.borderStyle ?? styles?.input?.borderStyle),
                    borderWidth: (props?.style?.borderWidth ?? styles?.input?.borderWidth),
                    borderColor: (props?.style?.borderColor ?? styles?.input?.borderColor),
                    backgroundColor: (props?.style?.backgroundColor ?? styles?.input?.checkBoxBackground),
                }}
                className={`
                    radio
                    radio-${color}
                    ${radioSize[size] ?? radioSize.auto}
                `}
            />
        </FormWrapper>
    );
}