import { ClassValue } from 'clsx';

//////////////////////////////////////////////////////////////////
//      CONFIGS
///////////////////////////////////////////////////////////////////
interface BaseConfig {

}
interface SliderConfig {
    'track-height'?: number
    'track-color'?: string
    'track-fill-height'?: number
    'track-fill-color'?: string
    'thumb-color'?: string
    'thumb-height'?: number
    'thumb-width'?: number
    'thumb:hover-color'?: string
}

//////////////////////////////////////////////////////////////////
//      COMPONENTS PROPS
///////////////////////////////////////////////////////////////////

export type LabelProps = {
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
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    validator?: string | React.ReactElement | boolean
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    /** это прокидывается на сам инпут input class */
    styleInput?: React.CSSProperties
    className?: ClassValue
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


export type BaseProps = {
    required?: boolean
    type: 'text' | 'number' | 'email' | 'password' | 'date' | 'textarea' | 'tel' | 'url' | 'time' | 'datetime-local' | 'search'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    placeholder?: string
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    validator?: string | React.ReactElement | boolean
    colorBorder?: string
    /** tooltip текст подсказка при наведении */
    title?: string
    value?: string | number
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    /** это прокидывается на сам инпут input class */
    styleInput?: React.CSSProperties
    onChange?: React.Dispatch<React.SetStateAction<number|string>> | ((val: string)=> void)
    className?: ClassValue
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

type ItemSelect = {
    id: string | number
    label: string | React.ReactElement
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

export type SwitchBoxInputProps = Omit<CheckBoxInputProps, 'type'> & {
    value: boolean
}


export type SliderInputProps = {
    'data-id'?: string | number
    disableForm?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: string
    labelLeft?: string | React.ReactElement
    labelRight?: string | React.ReactElement
    labelTop?: string | React.ReactElement
    value?: number | number[]
    config?: SliderConfig
    onChange?: (val: number | number[])=> void
    /** вызывается в конце перетаскивания */
    onChangeEnd?: (val: number)=> void
    min?: number
    max?: number
    step?: number
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    /** это прокидывается на сам инпут input class */
    styleInput?: React.CSSProperties
    className?: ClassValue
}

export type ToggleButtonGroupProps = {
    items: string[] | ItemSelect[]
    value?: string | number
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelect>>  | ((val: string | number | ItemSelect) => void)
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?: string
    onlyId?: boolean
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    className?: ClassValue
}


type ItemSelectFilter = {
    id: string | number
    label: string
}
export type FilterToggleButtonGroupProps = {
    options: string[] | ItemSelectFilter[]
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelectFilter>>  | ((val: string | number | ItemSelectFilter) => void)
    name?: string
    valueReset?: string | number
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?: string
    onlyId?: boolean
    value?: string | number
    style?: React.CSSProperties
    className?: ClassValue
}