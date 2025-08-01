declare const NumberInput: import("react").ForwardRefExoticComponent<Omit<import("./type").BaseProps, "type"> & {
    type?: "number";
    iconEnable?: boolean;
    value?: number;
    step?: number;
    onChange?: React.Dispatch<React.SetStateAction<number>> | ((val: number) => void);
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
} & import("react").RefAttributes<HTMLInputElement>>;
export default NumberInput;
