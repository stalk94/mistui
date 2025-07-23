import { ClassValue } from 'clsx';
import { fontFamilyVariants } from '../theme/default'
import type { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';


export type BaseTypographyProps = {
	children: React.ReactNode
	variant?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `subtitle1` | `subtitle2` | `body1` | `body2` | `caption` | `overline` | `button`
	className?: React.HTMLAttributes<HTMLElement>['className'] | ClassValue
	style?: React.CSSProperties
    fontStyle?: 'normal' | 'italic'
    fontFamily?: keyof typeof fontFamilyVariants
    fontSize?: string | number
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    colorShadow?: string
    tracking?: | 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
}

type AsProp<T extends ElementType> = {
	as?: T;
}
type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);
export type PolymorphicComponentProps<
	T extends ElementType,
	Props = {}
> = Props &
	AsProp<T> &
	Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];


export type TypographyComponent = <T extends React.ElementType = 'p'>(
	props: PolymorphicComponentProps<T, BaseTypographyProps> & {
		ref?: PolymorphicRef<T>
	}
) => React.ReactNode;


export type LinkProps = BaseTypographyProps & {
    children?: string
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
}

export type MarqueeTextProps = LinkProps & {
    /** px second */
    pxPerSecond?: number
    copies?: number
    pauseOnHover?: boolean
    gap?: number
    direction?: 'left' | 'right'
    children: React.ReactNode
}