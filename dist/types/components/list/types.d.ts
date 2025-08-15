import { Variants } from '../theme/default';
type ListItem = React.ReactNode;
export type ListProps = {
    style?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    className?: HTMLUListElement['className'];
    classNameList?: HTMLLIElement['className'];
    onClick?: (indexSelect: number) => void;
    /**
     * каждый 'ListItem' можно пердставить как список элементов в три колонки,
     * третий элемент будет прижат в право
     * @example <>
     *      <div>left</div>
     *      <div>center</div>
     *      <div>right</div>
     * </>
     */
    children: ListItem[];
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    color?: Variants | (string & {});
};
export type PaginatorProps = {
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
    className?: HTMLElement['className'];
    color?: Variants | (string & {});
    style?: React.CSSProperties;
    count?: number;
    page?: number;
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
    isRounded?: boolean;
    showFirstButton?: boolean;
    showLastButton?: boolean;
    onChange?: (page: number) => void;
};
export type StepsProps = {
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
    className?: HTMLElement['className'];
    color?: Variants | (string & {});
    style?: React.CSSProperties;
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
};
export {};
