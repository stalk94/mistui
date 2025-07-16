import { ComponentProps } from 'react';
import { Splitter, SplitterPanel } from 'primereact/splitter';

type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
type SpliterStProps = ComponentProps<typeof Splitter>;
type SpliterPanelStProps = ComponentProps<typeof SplitterPanel>;

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
    orientation?: 'horizontal' | 'vertical'
    variant?: 'dashed' | 'dotted' 
    style?: React.CSSProperties
    className?: Props['className'] 
}

export type SplitterProps = SpliterStProps & {
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    orientation?: 'horizontal' | 'vertical'
    className?: Props['className']
}
export type SplitterPanelProps = SpliterPanelStProps & {
    children?: React.ReactNode
}

export type BadgeProps = {
    children?: string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg'
    isHorizontal?: boolean
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    className?: Props['className'] 
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    isGradient?: boolean
    iconLeft?: React.ReactNode
    iconRight?: React.ReactNode
}

export type CollapseProps = {
    /** content collapse, children or content props */
    children?: string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    styleTitle?: React.CSSProperties
    className?: Props['className']  
    classNameTitle?: React.HTMLAttributes<'div'>['className'] 
    /** title collapse */
    title: React.ReactNode
    /** content collapse, children or content props  */
    content?: React.ReactNode
    icon?: 'plus' | 'arrow'
}

export type IndicatorProps = {
    /** content collapse, children or content props */
    children?: string | React.ReactElement
    content?: string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    className?: Props['className']
    position?: 'top' | 'middle' | 'bottom'
    align?: 'start' | 'center' | 'end'
}

export type TooltipProps = {
    /** wraparound component */
    children?: string | React.ReactElement
    /** hint content */
    content?: string
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    className?: Props['className']
    position?: 'top' | 'left' | 'right' | 'bottom'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
}

export type StatProps = Props & {
    figure?: React.ReactNode
    title?: React.ReactNode
    value?: React.ReactNode
    desccription?: React.ReactNode
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
    orientation?: 'vertical' | 'horizontal'
}

export type OverflowProps = Props & {
    children: React.ReactNode[]
    direction?: 'row' | 'column'
}