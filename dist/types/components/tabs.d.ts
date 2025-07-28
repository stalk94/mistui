import type { Variants } from './theme/default';
type TabsProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick' | 'style'> & {
    activeIndexTab?: number;
    variant?: 'box' | 'border' | 'lift';
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    color?: Variants | (string & {});
    items: {
        label: string | React.ReactNode;
        content: string | React.ReactNode;
    }[];
    styleTab?: React.CSSProperties;
    styleContent?: React.CSSProperties;
};
export default function Tabs({ activeIndexTab, variant, size, shadow, style, color, styleTab, styleContent, className, items, ...props }: TabsProps): import("react/jsx-runtime").JSX.Element;
export {};
