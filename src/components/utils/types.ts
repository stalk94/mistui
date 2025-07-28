import { ComponentProps } from 'react';
import * as flags from 'country-flag-icons/react/3x2';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import type { SVGProps } from 'react';
import type { Variants } from '../theme/default';


type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
type SpliterStProps = ComponentProps<typeof Splitter>;
type SpliterPanelStProps = ComponentProps<typeof SplitterPanel>;

export type FlagCountryProps = {
    code: keyof typeof flags
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | (number & {})
    className?: SVGProps<SVGSVGElement>['className']
    style?: SVGProps<SVGSVGElement>['style']
}

export type DividerProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: Variants | (string & {})
    position?: 'center' | 'start' | 'end'
    orientation?: 'horizontal' | 'vertical'
    variant?: 'solid' | 'dashed' | 'dotted' 
    style?: React.CSSProperties
    className?: Props['className'] 
}

export type SplitterProps = SpliterStProps & {
    color?: Variants | (string & {})
    orientation?: 'horizontal' | 'vertical'
    className?: Props['className']
    /** disable resize */
    disabled?: boolean
}
export type SplitterPanelProps = SpliterPanelStProps & {
    children?: React.ReactNode
}

export type BadgeProps = {
    children?: string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg'
    isHorizontal?: boolean
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
    color?: Variants | (string & {})
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
    color?: Variants | (string & {})
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

type ItemIndicator = {
    content: string | React.ReactElement
    className?: Props['className']
    position?: 'top' | 'middle' | 'bottom'
    align?: 'start' | 'center' | 'end'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    style?: React.CSSProperties
}
export type IndicatorProps = {
    /** content collapse, children or content props */
    children?: string | React.ReactElement
    /** one or optional count element */
    content?: ItemIndicator[] | string | React.ReactElement
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: Variants | (string & {})
    style?: React.CSSProperties
    className?: Props['className']
    position?: 'top' | 'middle' | 'bottom'
    align?: 'start' | 'center' | 'end'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type TooltipProps = {
    /** wraparound component */
    children?: string | React.ReactElement
    /** hint content */
    content?: string
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: Variants | (string & {})
    style?: React.CSSProperties
    className?: Props['className']
    position?: 'top' | 'left' | 'right' | 'bottom'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link' 
}

export type StatProps = Props & {
    figure?: React.ReactNode
    title?: React.ReactNode
    value?: React.ReactNode
    description?: React.ReactNode
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
    /** 
     * The child elements to be displayed inside the container with overflow handling.
     */
    children: React.ReactNode[]

    /**
     * If true, the visible items will expand to fill the available space.
     * Defaults to false.
     */
    isExpand?: boolean

    /**
     * The layout direction of the items: horizontal (`row`) or vertical (`column`).
     * Default is `'row'`.
     */
    direction?: 'row' | 'column'

    /**
     * Horizontal alignment of content inside each item.
     * Corresponds to Tailwind's `items-*` classes.
     * 
     * - `'start'` / `'left'` — align to the start
     * - `'center'` — center alignment
     * - `'end'` — align to the end
     */
    justifyHorizontal?: 'start' | 'left' | 'center' | 'end'

    /**
     * Vertical alignment of content inside each item.
     * Corresponds to Tailwind's `justify-*` classes.
     * 
     * - `'start'` — align to the start
     * - `'center'` — center alignment
     * - `'end'` — align to the end
     */
    justifyVertical?: 'start' | 'end' | 'center'

    /**
     * Callback invoked when some children overflow the container.
     * Receives an array of React elements that did not fit.
     */
    onOverflow?: (hidden: React.ReactNode[] | any[]) => void
    overflowMap?: any[]
}

export type RadialProgressProps = {
    /** content collapse, children or content props */
    children?: string | React.ReactElement
    value: number
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: Variants | (string & {})
    style?: React.CSSProperties
    className?: Props['className']
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}