import type { CheckBoxInputProps } from './type';
import { FormWrapper } from './atomize';



export default function RadioInput({ 
    onChange, 
    size, 
    color, 
    value, 
    type, 
    ...props 
}: CheckBoxInputProps) {
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
            <input 
                type='checkbox'
                onChange={(e)=> onChange?.(e.target.checked)}
                checked={value !== undefined && value} 
                className={`
                    radio
                    radio-${color}
                    ${radioSize[size] ?? radioSize.auto}
                `}
            />
        </FormWrapper>
    );
}