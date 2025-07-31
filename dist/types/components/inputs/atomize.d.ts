import type { LabelProps, LabelTopProps } from './type';
import React from 'react';
export declare const LabelTop: ({ children, style, size, required }: LabelTopProps) => import("react/jsx-runtime").JSX.Element;
export declare const ValidatorBottomLabel: ({ children }: {
    children: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FormWrapper: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLDivElement>>;
export default FormWrapper;
