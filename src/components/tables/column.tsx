import { Column } from 'primereact/column';
import type { ColumnDataTableProps } from './types';


export default function ColumnDataTable({
    ...props
}: ColumnDataTableProps) {


    return(
        <Column
            { ...props }
        />
    );
}