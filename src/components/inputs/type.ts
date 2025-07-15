import { ClassValue } from 'clsx';


//////////////////////////////////////////////////////////////////
//      Fragments
///////////////////////////////////////////////////////////////////
type InputStyle = {
    /** это прокидывается на сам инпут input class      
     * 
     *    color:  цвет ввода
     *    borderColor: input бордюрка
     *    borderStyle:       
     *    borderWidth:      
     *    backgroundColor:  input фон
    */
    styleInput?: React.CSSProperties
}

export type LabelProps = InputStyle & {
    'data-id'?: string | number
    /** отключить видимость формы */
    disabledVisibility?: boolean
    popovertarget?: string
    required?: boolean
    children: any
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    colorBorder?: string
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    validator?: string | React.ReactElement | boolean
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    className?: ClassValue
    variant?: 'dash' | 'outline'
}
export type LabelTopProps = {
    'data-id'?: string | number
    required?: boolean
    children: any
    color?: string
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: React.CSSProperties
}
export type LabelsSliderProps = {
    children: any
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    className?: ClassValue
}

export type ValidatorProps = {
    pattern: string
    min?: string | number
    max?: string | number
    step?: string | number
    minlength?: string | number
    maxlength?: string | number
}
type ValidatorByType = {
    text: Pick<ValidatorProps, 'pattern' | 'minlength' | 'maxlength'>;
    password: Pick<ValidatorProps, 'pattern' | 'minlength' | 'maxlength'>;
    email: Pick<ValidatorProps, 'pattern' | 'minlength' | 'maxlength'>;
    number: Pick<ValidatorProps, 'min' | 'max' | 'step'>;
    date: Pick<ValidatorProps, 'min' | 'max'>;
    range: Pick<ValidatorProps, 'min' | 'max' | 'step'>;
    textarea: Pick<ValidatorProps, 'minlength' | 'maxlength'>;
}

//////////////////////////////////////////////////////////////////
//      COMPONENTS PROPS
///////////////////////////////////////////////////////////////////
export type BaseProps = InputStyle & {
    required?: boolean
    type: 'text' | 'number' | 'email' | 'password' | 'date' | 'textarea' | 'tel' | 'url' | 'time' | 'datetime-local' | 'search'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    placeholder?: string
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    validator?: string | React.ReactElement | boolean
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    /** tooltip текст подсказка при наведении */
    title?: string
    value?: string | number
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    onChange?: React.Dispatch<React.SetStateAction<number|string>> | ((val: string)=> void)
    className?: ClassValue
    variant?: 'dash' | 'outline'
}

export type NumberInputProps = Omit<BaseProps, 'type'> & {
    type?: 'number'
    iconEnable?: boolean
    value?: number
    step?: number
    onChange?: React.Dispatch<React.SetStateAction<number>> | ((val: number)=> void)
}

export type FileInputProps = {
    'data-id'?: string | number
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: string
    value?: number
    onChange?: (val: File)=> void
    onError?: (err: string)=> void
    accept?: string
    /** в megabite */
    maxSize?: number
    placeholder?: string | React.ReactElement
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    /** это прокидывается на сам инпут input class */
    styleInput?: React.CSSProperties
    className?: ClassValue
}

export type SelectInputProps = Omit<BaseProps, 'labelRight'|'type'> & {
    value?: string
    color?: string
    onChange?: (val: string)=> void
    items?: string[] | ItemSelect[]
}

export type AutoInputProps = Omit<BaseProps, 'labelRight'|'type'> & {
    value?: string
    color?: string
    onChange?: (val: string)=> void
    options?: string[]
}

export type CheckBoxInputProps = {
    'data-id'?: string | number
    onChange?: (val: boolean)=> void
    value?: boolean 
    type?: 'checkbox' | 'toggle' | 'radio'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: string
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    style?: React.CSSProperties
    className?: ClassValue
}

export type RadioInputProps = CheckBoxInputProps & {
    styleThumb?: {
        thumbColor?: React.CSSProperties['backgroundColor'] 
    }
}

export type SwitchBoxInputProps = Omit<CheckBoxInputProps, 'type'> & {
    value: boolean
    styleThumb?: {
        borderColor?: React.CSSProperties['borderColor']
        backgroundColor?: React.CSSProperties['backgroundColor']
        iconColor?: React.CSSProperties['backgroundColor']
    }
}

export type SliderInputProps = InputStyle & {
    'data-id'?: string | number
    disableForm?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: string
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    value?: number | number[]
    onChange?: (val: number | number[])=> void
    /** вызывается в конце перетаскивания */
    onChangeEnd?: (val: number)=> void
    min?: number
    max?: number
    step?: number
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    styleTrack?: React.CSSProperties
    styleRange?: React.CSSProperties
    styleThumb?: React.CSSProperties
    className?: ClassValue
}