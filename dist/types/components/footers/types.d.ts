type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export type BaseFooter = Props & {
    isCenter?: boolean;
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactNode;
};
export {};
