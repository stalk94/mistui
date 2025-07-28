import type { LabelProps, LabelTopProps } from './type';
import React from 'react';
export declare const LabelTop: ({ children, style, size, required, }: LabelTopProps) => import("react/jsx-runtime").JSX.Element;
export declare const ValidatorBottomLabel: ({ children, "data-id": dataId }: {
    children: any;
    "data-id": any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FormWrapper: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLDivElement>>;
export default FormWrapper;
