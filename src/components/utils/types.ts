type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;


export type FlagProps = {
    code: string
    size?: {
        width: number
        height: number
    }
    margin?: string
}

export type DividerProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    position?: 'start' | 'end'
    isHorizontal?: boolean
    variant?: 'dashed' | 'dotted' 
    style?: React.CSSProperties
    className?: Props['className'] 
}

export type BadgeProps = {
    children?: string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg'
    isHorizontal?: boolean
    variant?: 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
    style?: React.CSSProperties
    className?: Props['className'] 
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    isGradient?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}

export type StatProps = Props & {
    figure?: React.ReactNode
    title?: React.ReactNode
    value?: React.ReactNode
    desc?: React.ReactNode
    actions?: React.ReactNode
}
export type StatsProps = Props & {
    items: {
        figure?: React.ReactNode
        title?: React.ReactNode
        value?: React.ReactNode
        desc?: React.ReactNode
        actions?: React.ReactNode
    }[]
    variant?: 'vertical' | 'horizontal'
}