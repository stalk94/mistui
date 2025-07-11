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
    children: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    isSoft?: boolean
}

export type ToggleButtonGroupProps = ButtonProps & {
    items: string[] | ItemSelect[]
    value?: string | number
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelect>>  | ((val: string | number | ItemSelect) => void)
    onlyId?: boolean
    /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
}

export type FilterToggleButtonGroupProps = ButtonProps & {
    items: string[] | ItemSelectFilter[]
    onChange?: React.Dispatch<React.SetStateAction<string | number | ItemSelectFilter>>  | ((val: string | number | ItemSelectFilter) => void)
    name?: string
    valueReset?: string | number
    onlyId?: boolean
    value?: string | number
     /** style прокидывается на саму обертку (section) */
    style?: React.CSSProperties
}