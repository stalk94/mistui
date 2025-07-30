import { OrganizationChartProps } from "primereact/organizationchart";
type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export type CardProps = Props & {
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    /** картинка сбоку */
    imageIsSide?: boolean;
    /** изображение станет фоном карточки */
    imageIsFull?: boolean;
    /** ссылка на картинку */
    imageSrc?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    actions?: React.ReactNode;
    classNameBody?: React.HTMLAttributes<HTMLDivElement>['className'];
    /** доп содержимое, либо если не передавать `title`, `description`, `actions` то станет основным содержимым карточки */
    children?: React.ReactNode;
};
export type OrgChartProps = Props & OrganizationChartProps & {};
export {};
