import React from 'react';
declare const BaseInput: React.ForwardRefExoticComponent<{
    styleInput?: React.CSSProperties;
} & {
    required?: boolean;
    type: "text" | "number" | "email" | "password" | "date" | "textarea" | "tel" | "url" | "time" | "datetime-local" | "search";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    placeholder?: string;
    labelLeft?: string | React.ReactElement;
    labelRight?: string | React.ReactElement;
    labelTop?: string | React.ReactElement;
    validator?: string | React.ReactElement | boolean;
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | string;
    title?: string;
    value?: string | number;
    style?: React.CSSProperties;
    onChange?: React.Dispatch<React.SetStateAction<number | string>> | ((val: string) => void);
    className?: import("clsx").ClassValue;
    variant?: "dash" | "outline";
} & React.RefAttributes<HTMLInputElement>>;
export default BaseInput;
