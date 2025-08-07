import { Variants } from '../theme/default';


type Props = Pick<React.HTMLAttributes<HTMLButtonElement>, 'className' | 'onClick'| 'style'>;
type ItemSelect = {
    id: string | number
    label: string | React.ReactElement
}
type ItemSelectFilter = {
    id: string | number
    label: string
}


export type ButtonProps = Props & {
    children: React.ReactNode
    title?: string
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
    color?: Variants | (string & {})
    isSoft?: boolean
    isGradient?: any
    selected?: boolean
    disabled?: boolean
    fullWidth?: boolean
    ripple?: boolean
    'aria-label'?: string
}

export type ToggleButtonGroupProps = Omit<ButtonProps, 'children'> & {
    items: string[] | ItemSelect[]
    value?: string | number | ItemSelect | { id: string|number }
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelect>>  | ((val: string | number | ItemSelect) => void)
    onlyId?: boolean
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    orientation?: 'horizontal' | 'vertical'
}

export type FilterToggleButtonGroupProps = Omit<ButtonProps, 'children'> & {
    items: string[] | ItemSelectFilter[]
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelectFilter>>  | ((val: string | number | ItemSelectFilter) => void)
    name?: string
    valueReset?: string | number
    onlyId?: boolean
    value?: string | number
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
    /** style button reset */
    styleButtonReset?: React.CSSProperties
}

export type IconButtonProps =  Props & {
    icon?: React.ReactNode
    children?: React.ReactNode
    title?: string
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
    color?: Variants | (string & {})
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    isRounded?: boolean
    isGradient?: any
    disabled?: boolean
    selected?: boolean
    ripple?: boolean
    'aria-label'?: string
}