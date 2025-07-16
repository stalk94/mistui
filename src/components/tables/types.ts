import { ComponentProps } from 'react';
import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';

export type ColumnDataTableProps = ComponentProps<typeof Column> & {
    
}

/** инлайн стилизация таблицы */ 
export type TableStyles = {
    body: {
        backgroundColor: string
        borderColor: string
        color: string
    } & React.HTMLAttributes<HTMLDivElement>['style']
    header: {
        backgroundColor: string
    } & React.HTMLAttributes<HTMLDivElement>['style']
    thead: {
        backgroundColor: string
        color: string
    } & React.HTMLAttributes<HTMLDivElement>['style']
    paginator?: {
        backgroundColor: string 
    } & React.HTMLAttributes<HTMLDivElement>['style']
}

export type StyleTableWrapperProps = {
    style: TableStyles
    fontSizeHead?: React.HTMLAttributes<HTMLDivElement>['style']['fontSize']
}

export type DataTablePropsWrapper = ComponentProps<typeof DataTable> & {
    fontSizeHead: string
    styles?: TableStyles
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}