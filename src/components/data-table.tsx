import 'primereact/resources/primereact.min.css'; 
import { useRef, useState, useEffect, ComponentProps, useMemo, memo, Fragment } from 'react';
import { DataTable, DataTableValueArray } from "primereact/datatable";
import { debounce } from './hooks/debounce';
import { useTheme } from './theme';
import { colord } from 'colord';


export type TableStyles = {
    body: {
        background: string
        borderColor: string
        textColor: string
    }
    header: {
        background: string
    }
    thead: {
        background: string
        textColor: string
    }
}
export type DataTablePropsWrapper = ComponentProps<typeof DataTable> & {
    fontSizeHead: string
    styles: TableStyles
}


const StyleTableWrapper = memo(({ style, fontSizeHead = '14px' }) => {
    const {  } = useTheme();

    return(
        `
            height: 100%;
            // прокрутка
            ::-webkit-scrollbar-track {
                background-color:#2a2a2b85;
            }
            ::-webkit-scrollbar-thumb {
                -webkit-border-radius: 3px;
                border-radius: 3px;
                background-color:#dedfdf;
                border: #333 1px solid;
            }
            ::-webkit-scrollbar-thumb {
                -webkit-border-radius: 10px;
                border-radius: 10px;
                background-color:#adadad;
            }
            ::-webkit-scrollbar {
                width: 7px;
            }

            .p-datatable {
                background: ${style.body.background };
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                border: 1px solid;
                border-color: ${style.body.borderColor };
                width: 100%;
                font-family: 'Roboto';
            }
            .p-datatable-header {
                background: ${alpha(theme.header.background, 0.1)};
                border-bottom: 1px solid #5f5f5f35;
                color: ${theme.body.textColor };
                font-size: 18px;
                font-weight: bold;
            }
            .p-datatable-footer {
                border-top: 1px solid;
                border-color: ${alpha(theme.body.borderColor, 0.1)};
                background: ${alpha(theme.header.background, 0.1)};
                color: ${style.body.textColor };
                display: flex;
                font-size: 16px;
                padding: 6px 8px;
            }
            // панель фильтры и сортировка
            .p-datatable-thead > tr > th {
                background: ${ style.thead.background };
                color: ${style.thead.textColor };
                font-weight: bold;
                padding: 1.5%;
                text-align: left;
                box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(10px);
                font-size:  ${fontSizeHead || '14px'};
                white-space: nowrap;
                min-width: 60px;
            }
            // нечетные row 
            .p-datatable-tbody > tr:nth-child(even) {
                background: ${ style.body.background };
            }
            // стили row текста 
            .p-datatable-tbody > tr {
                color: ${ style.body.textColor };
                font-size: 16px;
                transition: background 0.2s ease-in-out;
            }
            // подсвет всей строки при наведении
            .p-datatable-tbody > tr:hover {
                //background: #3a3c52;
            }
            // при наведении на row
            .p-datatable-tbody > tr > td:hover {
                background: #3a3c52;
                cursor: pointer;
            }
            // границы row
            .p-datatable-tbody > tr > td {
                padding: 12px;
                border-bottom: 1px dashed ${ style.body.borderColor };
            }
            .p-datatable-tbody > tr.p-highlight {
                background: #574b90 !important;
            }
            // блок пагинации
            .p-paginator {
                box-shadow: 0 -6px 10px -4px rgba(0, 0, 0, 0.25);
                border-top: 1px solid ${ style.body.borderColor};
                padding: 0.1rem;
            }
            .p-paginator .p-paginator-page {
                background: ${ style.paginator.background };
                color: ${ style.body.textColor };
                padding: 0.5rem;
                font-size: 14px;
                color: ${ style.thead.textColor };
            }
            .p-paginator .p-paginator-page.p-highlight {
                background: ${darken(theme.paginator.background, 0.3)};
                opacity: 0.8;
                border-color: ${alpha(theme.body.borderColor, 0.4)};
                font-weight: bold;
            }
            .p-paginator .p-paginator-page.p-disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            // кнопки вперед, назад, начало, конец
            .p-paginator .p-paginator-prev,
            .p-paginator .p-paginator-next {
                background: transparent;
                color: ${theme.body.textColor};
                border: 1px solid ${alpha(theme.body.borderColor, 0.15)};
                border-radius: 6px;
                padding: 4px 10px;
                margin: 0 2px;
                transition: background 0.2s, color 0.2s, border-color 0.2s;
                cursor: pointer;
                &:hover {
                    background: ${alpha(theme.body.borderColor, 0.1)};
                }
            }
            .p-paginator .p-paginator-prev.p-disabled,
            .p-paginator .p-paginator-next.p-disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            .p-paginator-last, .p-paginator-first {
                visibility: hidden;
            }
            // выбор кол-ва элементов на страницу
            .p-paginator .p-dropdown {
                //background: ${ style.thead.background};
                border: 1px solid ${ alpha(theme.body.borderColor, 0.2)};
                border-radius: 6px;
                padding: 2px 8px;
                color: ${ style.body.textColor};
                font-size: 14px;
                display: flex;
                align-items: center;
                &:hover {
                    border-color: ${alpha(theme.body.borderColor, 0.5)};
                }
            }
        `
    );
});



/**
 * 🎁 Декоратор над PrimeReact `<DataTable>`:           
 * добавляет автоматическую подстройку высоты контейнера,       
 * сохраняя оригинальное API компонента.
 * ? надо сделать логику lazy load data
 * ! ssr not unsafe (надо доработать до ssr)
 */
export default function DataTableCustom({ 
    value, 
    children, 
    header, 
    footer, 
    fontSizeHead, 
    styles, 
    style, 
    ...props 
}: DataTablePropsWrapper) {
    const theme = useTheme();
    const tableRef = useRef<DataTable<DataTableValueArray>>(null);
    const observerRef = useRef(null);
    const [scrollHeight, setScrollHeight] = useState<string>();
    const [height, setHeight] = useState<number>();
    const [autoPagination, setPagination] = useState(false);
    
    
    const mergeStyle = useMemo(() => {
        const bodyBcg = theme.styles?.table?.body;
        const headerBcg = theme.styles?.table?.header;
        const theadBcg = theme.styles?.table?.thead;

        const borderColor = theme.styles?.card?.border;
        const textColor = theme.styles?.text?.primary;
        const theadColor = theme.styles.grey[500]

        const style: TableStyles = {
            body: {
                background: bodyBcg,
                borderColor: borderColor,
                textColor: textColor,
                ...styles?.body
            },
            header: {
                background: headerBcg,
                ...styles?.header
            },
            thead: {
                background: theadBcg,
                textColor: theadColor,
                ...styles?.thead
            },
            paginator: {
                background: theme.styles?.input?.backgroundColor
            }
        }

        return style;
    }, []);
    const getPadding =(element: Element)=> {
        const style = getComputedStyle(element);
        const padding = parseFloat(style.paddingBottom);

        return padding;
    }
    const getBound =(element: Element)=> {
        const parent = element.parentElement;     // родитель
        const bound = element.getBoundingClientRect();
        const boundParent = parent.getBoundingClientRect();
        
        const maxHeight = window.innerHeight - bound.y;
        const padding = getPadding(parent) * 2;
        //console.log(window.innerHeight, boundParent.height)

        if(window.innerHeight <= boundParent.height) {
            parent.style.height = maxHeight + 'px';
            
            return maxHeight - padding;
        }
        else {
            return boundParent.height - padding;
        }
    }
    useEffect(()=> {
        if (typeof window === 'undefined') return;

        if (value?.length > 20) setPagination(true);
        const updateHeight = () => {
            if (tableRef.current) {
                const container = tableRef.current.getElement();
                const bodyArea = tableRef.current.getTable().parentElement;
                const parent = container.parentElement;     // родитель
                const paginatorElement = container.querySelector('.p-paginator');

                const headerElement = container.querySelector('.p-datatable-header');
                const footerElement = container.querySelector('.p-datatable-footer');

                //const parentHeight = parent.offsetHeight || 0;
                const containerHeight = container?.offsetHeight || 0;
                const headerHeight = headerElement?.offsetHeight || 0;
                const footerHeight = footerElement?.offsetHeight || 0;
                const paginatorHeight = paginatorElement?.offsetHeight ?? 0;


                // Вычисляем высоту прокручиваемой области
                const calculatedScrollHeight = containerHeight - headerHeight - footerHeight - paginatorHeight;

                setScrollHeight(`${Math.max(calculatedScrollHeight, 50)}px`);
                setHeight(getBound(container));
            }
        };

        const debouncedUpdateHeight = debounce(updateHeight, 1000);
        const observer = new ResizeObserver(debouncedUpdateHeight);
        observerRef.current = observer;

        if (tableRef.current) {
            const container = tableRef.current.getElement();
            if (container) observer.observe(container);
        }

        return () => {
            observerRef.current?.disconnect();
            observerRef.current = null;
        }

    }, [header, footer, value]);
    
    
    return (
        <Fragment>  
            {(typeof window === 'undefined') &&
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            }
            {!(typeof window === 'undefined') &&
                <Fragment>
                    <StyleTableWrapper
                        style={mergeStyle}
                        fontSizeHead={fontSizeHead}
                    />
                    <DataTable
                        paginator={autoPagination}
                        rows={props.rows ?? 10}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        ref={tableRef}
                        value={value}
                        scrollable={true}
                        scrollHeight={scrollHeight}
                        style={{ height: '100%', width: '100%', flexGrow: 1, ...style }}
                        header={header}
                        footer={footer}
                        {...props}
                    >
                        {children}
                    </DataTable>
                </Fragment>
            }
        </Fragment>
    );
}