import type { BaseProps } from './type';
type TextAreaProps = Omit<BaseProps, 'type'>;
export default function TextAreaInput({ onChange, placeholder, size, color, labelTop, required, value, style, ...props }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
export {};
