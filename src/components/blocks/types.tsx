

export type BoxProps = {
    children: React.ReactNode
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'glass'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
}