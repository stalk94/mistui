export type Breadcrumb = {
    label: string;
    href: string;
    isLast: boolean;
};
export type Options = {
    /** Карта человекочитаемых названий */
    nameMap?: Record<string, string>;
    /** Исключить сегменты (например, 'edit', 'id') */
    exclude?: string[];
    /** Начальный сегмент */
    base?: {
        label: React.ReactElement | string;
        href: string;
    };
};
export type BreadcrumbsNavProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
    /** @example 'home/catalog/item' */
    pathname: string;
    nameMap?: Record<string, string>;
    separator?: string | React.ReactNode;
    /** container classes */
    className?: HTMLDivElement['className'];
    /** first icon classes */
    classNameHomeicon?: HTMLDivElement['className'];
    /**
     * render component element navigation
     */
    Link: React.ComponentType<{
        href: string;
        children: React.ReactNode;
    }>;
    /** container styles */
    style?: React.CSSProperties;
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string;
};
export declare function useBreadcrumbs(pathname: string, options?: Options): {
    isLast: boolean;
    label: React.ReactElement | string;
    href: string;
}[];
export default function BreadcrumbsNav({ pathname, size, Link, separator, nameMap, className, classNameHomeicon, style, color }: BreadcrumbsNavProps): import("react/jsx-runtime").JSX.Element;
