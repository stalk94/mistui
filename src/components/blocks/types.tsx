import type { Variants } from '../theme/default';


export type BoxProps = HTMLDivElement & {
    children: React.ReactNode
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'contained' | 'outline' | 'dash' | 'neumorph' | 'glass'
    color?: Variants | (string & {})
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    rounded?: number
    elevation?: number
    shadowSize?: number
}