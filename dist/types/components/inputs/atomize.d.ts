import type { LabelTopProps } from './type';
import React from 'react';
import clsx from 'clsx';
export declare const LabelTop: ({ children, style, size, required, }: LabelTopProps) => import("react/jsx-runtime").JSX.Element;
export declare const ValidatorBottomLabel: ({ children, "data-id": dataId }: {
    children: any;
    "data-id": any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FormWrapper: React.ForwardRefExoticComponent<{
    styleInput?: React.CSSProperties;
} & {
    'data-id'?: string | number;
    disabledVisibility?: boolean;
    popovertarget?: string;
    required?: boolean;
    children: any;
    labelLeft?: string | React.ReactElement;
    labelRight?: string | React.ReactElement;
    labelTop?: string | React.ReactElement;
    colorBorder?: string;
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    validator?: string | React.ReactElement | boolean;
    style?: React.CSSProperties;
    className?: clsx.ClassValue;
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    variant?: "dash" | "outline" | "ghost";
} & React.RefAttributes<HTMLDivElement>>;
export default FormWrapper;
