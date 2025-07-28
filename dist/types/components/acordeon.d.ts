import type { Variants } from './theme/default';
export type AccordionProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> & {
    items: {
        /** label аккордеона */
        title: React.ReactElement | string;
        /** тело аккордеона */
        content: React.ReactElement | string;
    }[];
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost';
    color?: Variants | (string & {});
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** массив индексов развернутых вкладок [0, 1, 2 ...] */
    activeIndexs?: number[];
    style?: React.CSSProperties;
    styleTitle?: React.CSSProperties;
    classNameTitle?: React.HTMLAttributes<HTMLDivElement>['className'];
};
export default function Acordeon({ items, size, activeIndexs, style, variant, color, shadow, styleTitle, className, classNameTitle }: AccordionProps): import("react/jsx-runtime").JSX.Element;
