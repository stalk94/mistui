import { ClassValue } from 'clsx';
import { fontFamilyVariants } from '../theme/default';
import type { ElementType, ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';
export declare const typographyVariants: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    subtitle1: string;
    subtitle2: string;
    body1: string;
    body2: string;
    caption: string;
    overline: string;
    button: string;
};
export type BaseTypographyProps = {
    children: React.ReactNode;
    variant?: keyof typeof typographyVariants;
    className?: React.HTMLAttributes<HTMLElement>['className'] | ClassValue;
    style?: React.CSSProperties;
    fontStyle?: 'normal' | 'italic';
    fontFamily?: keyof typeof fontFamilyVariants;
    fontSize?: string | number;
};
type AsProp<T extends ElementType> = {
    as?: T;
};
type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);
export type PolymorphicComponentProps<T extends ElementType, Props = {}> = Props & AsProp<T> & Omit<ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
export type TypographyComponent = <T extends React.ElementType = 'p'>(props: PolymorphicComponentProps<T, BaseTypographyProps> & {
    ref?: PolymorphicRef<T>;
}) => React.ReactNode;
export type LinkProps = BaseTypographyProps & {
    children?: string;
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string;
};
export type MarqueeTextProps = BaseTypographyProps & {
    /** seconds */
    speed?: number;
    direction?: 'left' | 'right';
    children: React.ReactNode;
};
export {};
