import { ComponentProps } from 'react';
import { DataTable, DataTableValueArray } from "primereact/datatable";
import { Column } from 'primereact/column';
import { Variants } from '../theme/default';


export type ColumnDataTableProps = ComponentProps<typeof Column> & { }

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
    uid: string
    style: TableStyles
    hoverVariant: 'disabled' | 'row' | 'cell'
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type DataTablePropsWrapper = Omit<ComponentProps<typeof DataTable>, 'size'> & {
    fontSizeHead: string
    styles?: TableStyles
    isAutoPagination?: boolean
    hoverVariant?: 'disabled' | 'row' | 'cell'
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type TableProps = {
    schema: {
        header: React.ReactNode
        field: string
        body?: (data: any) => React.ReactNode
    }[], 
    children?: {
        header: React.ReactNode
        field: string
        body?: (data: any) => React.ReactNode
    }[],
    value: DataTableValueArray
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    style?: React.CSSProperties
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    color?: Variants | (string & {})
    footer?: React.ReactNode
    header?: React.ReactNode
    variant?: 'contained' | 'outline' | 'dash'
}