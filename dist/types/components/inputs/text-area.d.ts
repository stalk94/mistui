declare const TextAreaInput: import("react").ForwardRefExoticComponent<Omit<import("./type").BaseProps, "className" | "variant" | "type"> & {
    variant?: "outline" | "dash" | "ghost";
    className?: HTMLElement["className"];
} & import("react").RefAttributes<HTMLTextAreaElement>>;
export default TextAreaInput;
