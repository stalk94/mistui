import { ClassValue } from 'clsx';
import { fontFamilyVariants } from '../theme/default'
import type { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';


export const typographyVariants = {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-bold',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-semibold',
    h3: 'text-2xl sm:text-3xl md:text-4xl font-semibold',
    h4: 'text-xl sm:text-2xl md:text-3xl font-medium',
    h5: 'text-lg sm:text-xl md:text-2xl font-medium',
    h6: 'text-base sm:text-lg md:text-xl font-medium',

    subtitle1: 'text-base sm:text-lg text-gray-400',
    subtitle2: 'text-sm sm:text-base text-gray-500',

    body1: 'text-base sm:text-base text-neutral-500',
    body2: 'text-sm sm:text-sm text-neutral-500',

    caption: 'text-xs sm:text-xs text-neutral-600 tracking-normal',
    overline: 'text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 leading-tight',

    button: 'text-sm sm:text-base font-bold uppercase',
}



export type BaseTypographyProps = {
	children: React.ReactNode
	variant?: keyof typeof typographyVariants
	className?: React.HTMLAttributes<HTMLElement>['className'] | ClassValue
	style?: React.CSSProperties
    fontStyle?: 'normal' | 'italic'
    fontFamily?: keyof typeof fontFamilyVariants
    fontSize?: string | number
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    colorShadow?: string
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

export type MarqueeTextProps = BaseTypographyProps & {
    /** seconds */
    speed?: number;
    direction?: 'left' | 'right';
    children: React.ReactNode
}