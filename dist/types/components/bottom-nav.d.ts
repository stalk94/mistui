import type { Variants } from './theme/default';
declare const BottomNav: import("react").ForwardRefExoticComponent<Pick<import("react").HTMLAttributes<HTMLDivElement>, "style" | "className"> & {
    items: {
        icon: React.ReactNode;
        label?: string | React.ReactNode;
    }[];
    active?: number;
    size: "auto" | "xs" | "sm" | "md" | "lg" | "xl";
    color?: Variants | (string & {});
    onChange?: (activeIndex: number) => void;
} & import("react").RefAttributes<HTMLDivElement>>;
export default BottomNav;
