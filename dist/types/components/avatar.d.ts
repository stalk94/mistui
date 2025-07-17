export type AvatarProps = {
    children?: string | React.ReactElement;
    size?: 'auto' | 'xss' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string;
    style?: React.CSSProperties;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    src?: string;
    alt?: string;
};
export type AvatarsGroupProps = {
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: React.CSSProperties;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    items: Omit<AvatarProps, 'size' | 'className' | 'style'>[];
};
export default function Avatar({ children, src, size, alt, style, color, className }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare function AvatarGroup({ size, style, className, items }: AvatarsGroupProps): import("react/jsx-runtime").JSX.Element;
