declare const BottomNav: import("react").ForwardRefExoticComponent<Pick<import("react").HTMLAttributes<HTMLDivElement>, "className" | "style"> & {
    items: {
        icon: React.ReactNode;
        label?: string | React.ReactNode;
    }[];
    active?: number;
    size: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    color?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | string;
    onChange?: (activeIndex: number) => void;
} & import("react").RefAttributes<HTMLDivElement>>;
export default BottomNav;
