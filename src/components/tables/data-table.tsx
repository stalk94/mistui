//import 'primereact/resources/primereact.min.css';
import { useRef, useState, useEffect, useMemo, memo, Fragment } from 'react';
import { DataTable, DataTableValueArray } from "primereact/datatable";
import type { DataTablePropsWrapper, TableStyles, StyleTableWrapperProps } from './types';
import { debounce } from '../hooks/debounce';
import { useTheme } from '../theme';
import { colord } from 'colord';
import { useUids } from '../hooks/uuid';
import { useBreakpoints } from '../hooks';

/////////////////////////////////////////////////////////////////////
const sizesText = {
    xs: 9,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18
}
const paddings = {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12
}
/////////////////////////////////////////////////////////////////////

const StyleTableWrapper = memo(({ 
    style, 
    uid,
    size = 'sm',
    shadow,
    hoverVariant
}: StyleTableWrapperProps) => {
    const { shadows, sizes } = useTheme();
    const breackpoint = useBreakpoints();
    const curSize = useMemo(()=> (size === 'auto') ? sizes.table[breackpoint] : size, [size, breackpoint]);
    const fontFamily =  style?.body?.fontFamily ? `font-family: ${ style.body.fontFamily };` : '';
    const tabShadow =  shadows[shadow] ? `box-shadow: ${ shadows[shadow] }` : '';
    
    const alpha = (color: string, val: number) => {
        return colord(color).alpha(val).toRgbString();
    }
    const lighten = (color: string, val: number) => {
        return colord(color).lighten(val).toRgbString();
    }
    const darken = (color: string, val: number) => {
        return colord(color).darken(val).toRgbString();
    }
    

    return(
        <style>
        {/* css */`
            /* выпадалка выбора кол-ва на страницу строк */
            [data-style-id="${uid}"] ul.p-dropdown-items {
                background: ${ style.body.backgroundColor };
                display: flex;
                flex-direction: column;
                align-items: center; 
                justify-content: center;
                font-size: ${ sizesText[curSize] + 2 };
            }
            [data-style-id="${uid}"] li.p-dropdown-item:hover {
                width: 100%;
                flex: 1;
                display: flex;
                justify-content: center;
                background: ${ lighten(style.body.backgroundColor, 0.1) };
            }
            [data-style-id="${uid}"] li.p-dropdown-item.p-highlight {
                width: 100%;
                display: flex;
                justify-content: center;
                background: ${ lighten(style.body.backgroundColor, 0.2) };
                flex: 1;
            }

            .p-datatable[data-style-id="${uid}"] {
                background: ${ style.body.backgroundColor };
                border-radius: 5px;
                overflow: hidden;
                border: 1px solid;
                border-color: ${ style.body.borderColor };
                max-width: 100%;
                max-height: 100%;
                font-size: ${ sizesText[curSize] };
                ${ fontFamily }
                ${ tabShadow }
            }
            [data-style-id="${uid}"] .p-datatable-header {
                background: ${ lighten(style.body.backgroundColor, 0.05) };
                border-bottom: 1px solid #5f5f5f35;
                color: ${ style.thead.color };
                padding: ${ ['xs', 'sm'].includes(curSize) ? '0px 4px' : '6px 8px' };
            }
            [data-style-id="${uid}"] .p-datatable-footer {
                border-top: 1px solid;
                border-color: ${ style.body.borderColor };
                background: ${ lighten(style.body.backgroundColor, 0.05) };
                color: ${ style.body.color };
                display: flex;
                padding: ${ ['xs', 'sm'].includes(curSize) ? '0px 4px' : '6px 8px' };
            }
            /* панель фильтры и сортировка */
            [data-style-id="${uid}"] .p-datatable-thead > tr > th {
                background: ${ lighten(style.body.backgroundColor, 0.08) };
                color: ${ style.thead.color };
                font-weight: bold;
                padding: ${ curSize==='xs' ? '0.2%' : (curSize ==='sm' ? '0.4%' : '1.5%') };
                text-align: left;
                box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(10px);
                font-size: ${ sizesText[curSize] + 1 };
                white-space: nowrap;
                min-width: 60px;
            }
            [data-style-id="${uid}"] .p-icon {
                height: ${ sizesText[curSize] };
            }
            /* нечетные row */
            [data-style-id="${uid}"] .p-datatable-tbody > tr:nth-child(even) {
                background: ${ alpha(style.body.backgroundColor, 0.05) };
            }
            /* стили row текста */
            [data-style-id="${uid}"] .p-datatable-tbody > tr {
                color: ${ style.body.color };
                font-size: ${ sizesText[curSize] };
                transition: background 0.2s ease-in-out;
            }
            /* подсвет всей строки при наведении */
            [data-style-id="${uid}"] .p-datatable-tbody > tr:hover {
                background: ${ hoverVariant === 'row' ? lighten(style.body.backgroundColor, 0.15) : '' };
                cursor: pointer;
            }
            /* при наведении на row */
            [data-style-id="${uid}"] .p-datatable-tbody > tr > td:hover {
                background: ${ hoverVariant === 'cell' ? lighten(style.body.backgroundColor, 0.15) : '' };
                cursor: pointer;
            }
            /* границы row, border */
            [data-style-id="${uid}"] .p-datatable-tbody > tr > td {
                padding: ${ paddings[curSize] };
                border-bottom: 1px dashed ${ style.body.borderColor };
            }
            [data-style-id="${uid}"] .p-datatable-tbody > tr.p-highlight {
                background: ${ lighten(style.body.backgroundColor, 0.1) } !important;
            }
            /* блок пагинации */ 
            [data-style-id="${uid}"] .p-paginator {
                box-shadow: 0 -6px 10px -4px rgba(0, 0, 0, 0.25);
                border-top: 1px solid ${ style.body.borderColor};
                background: ${ lighten(style.body.backgroundColor, 0.012) };
                padding: 0.1rem;
            }
            [data-style-id="${uid}"] .p-paginator .p-paginator-page {
                padding: ${ ['xs', 'sm'].includes(curSize) ? '0.2rem' : '0.4rem' };
                font-size: ${ sizesText[curSize] };
                color: ${ style.thead.color };
            }
            [data-style-id="${uid}"] .p-paginator .p-paginator-page.p-highlight {
                background: ${ style.body.borderColor };
                opacity: 0.8;
                border-color: ${ style.body.borderColor };
                font-weight: bold;
            }
            [data-style-id="${uid}"] .p-paginator .p-paginator-page.p-disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            /*  кнопки вперед, назад, начало, конец */ 
            [data-style-id="${uid}"] .p-paginator .p-paginator-prev,
            [data-style-id="${uid}"] .p-paginator .p-paginator-next {
                background: transparent;
                color: ${ style.body.color };
                border-radius: 6px;
                padding: ${ ['xs'].includes(curSize) ? '2px 8px' : '4px 10px' };
                margin: 0 2px;
                transition: background 0.2s, color 0.2s, border-color 0.2s;
                cursor: pointer;
            }
            [data-style-id="${uid}"] .p-paginator .p-paginator-prev:hover,
            [data-style-id="${uid}"] .p-paginator .p-paginator-next:hover {
                background: ${ style.body.borderColor };
            }
            
            [data-style-id="${uid}"] .p-paginator .p-paginator-prev.p-disabled,
            [data-style-id="${uid}"] .p-paginator .p-paginator-next.p-disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            [data-style-id="${uid}"] .p-paginator-last, .p-paginator-first {
                visibility: hidden;
            }
            /* выбор кол-ва элементов на страницу */ 
            [data-style-id="${uid}"] .p-paginator .p-dropdown {
                /* background: ${ style.thead.backgroundColor };  */
                border: 1px solid ${ alpha(style.body.borderColor, 0.2) };
                border-radius: 6px;
                padding: ${ ['xs'].includes(curSize) ? '1px 4px' : '2px 8px' };
                color: ${ style.body.color};
                font-size: ${ sizesText[curSize] };
                display: flex;
                align-items: center;
            }
            [data-style-id="${uid}"] .p-dropdown-label {
                margin-right: 3;
            }
            [data-style-id="${uid}"] .p-paginator .p-dropdown:hover {
                border-color: ${ alpha(style.body.borderColor, 0.3) };
            }
        `}
        </style>
    );
});



/**
 * 🎁 Декоратор над PrimeReact `<DataTable>`:           
 * добавляет автоматическую подстройку высоты контейнера, и прочие улучшения      
 * сохраняя оригинальное API компонента.
 * ? надо сделать логику lazy load data
 */
export default function DataTableCustom({ 
    value, 
    children, 
    header, 
    footer, 
    size = 'auto',
    shadow,
    isAutoPagination,
    hoverVariant = 'disabled',
    color,
    styles = {
        body: {},
        header: {},
        thead: {},
        paginator: {}
    }, 
    style = {}, 
    ...props 
}: DataTablePropsWrapper) {
    const theme = useTheme();
    const uid = useUids('table');
    const tableRef = useRef<DataTable<DataTableValueArray>>(null);
    const observerRef = useRef(null);
    const [scrollHeight, setScrollHeight] = useState<string>();
    const [height, setHeight] = useState<number>();     // общая высота
    const [autoPagination, setPagination] = useState(false);
    
    
    const mergeStyle = useMemo(() => {
        const bodyBcg = theme.styles?.table?.body;
        const headerBcg = theme.styles?.table?.header;
        const theadBcg = theme.styles?.table?.thead;
        const borderColor = theme.styles?.table?.border;
        const textColor = theme.styles?.table?.fontColor;
        const theadColor = theme.styles?.table?.theadFontColor;

        // базовый цвет из color или из темы
        const baseColor = color
            ? (theme.variants[color] ?? color)
            : bodyBcg;

        const bodyColor = baseColor ?? bodyBcg;
        const theadColorBcg = color ? colord(bodyColor).lighten(0.08).toRgbString() : theadBcg;
        const headerColorBcg = color ? colord(bodyColor).lighten(0.04).toRgbString() : headerBcg;
        const footerColorBcg = color ? colord(bodyColor).lighten(0.04).toRgbString() : headerBcg;

        // текст динамически: светлый фон → тёмный текст, тёмный фон → светлый
        const fontColorDynamic = color
            ? (theme.plugins.isBright(bodyColor, 100) ? "black" : "white")
            : textColor;

        const style: TableStyles = {
            body: {
                backgroundColor: bodyColor,
                borderColor: borderColor,
                color: fontColorDynamic,
                ...styles?.body,
            },
            header: {
                backgroundColor: headerColorBcg,
                color: fontColorDynamic,
                ...styles?.header,
            },
            thead: {
                backgroundColor: theadColorBcg,
                color: colord(fontColorDynamic).alpha(0.6).toRgbString(),
                ...styles?.thead,
            },
            paginator: {
                backgroundColor: footerColorBcg,
                color: fontColorDynamic,
                ...styles?.paginator,
            },
        };

        return style;
    }, [styles, color, theme]);
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
        if (isAutoPagination && value?.length > 20) setPagination(true);

        
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

        const debouncedUpdateHeight = debounce(updateHeight, 0);
        const observer = new ResizeObserver(debouncedUpdateHeight);
        observerRef.current = observer;

        if (tableRef.current) {
            const container = tableRef.current.getElement();
            if (container) observer.observe(container);
        }

        return () => {
            observerRef.current?.disconnect();
            observerRef.current = null;
            debouncedUpdateHeight();
        }

    }, [header, footer, value, size]);
 
    
    
    return (
        <Fragment>  
            <StyleTableWrapper
                uid={uid}
                hoverVariant={hoverVariant}
                shadow={shadow}
                style={mergeStyle}
                size={size}
            />

            {(typeof window === 'undefined') &&
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            }

            {!(typeof window === 'undefined') &&
                <DataTable
                    data-style-id={uid}
                    paginator={autoPagination}
                    rows={props.rows ?? 10}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    ref={tableRef}
                    value={value}
                    scrollable={true}
                    scrollHeight={scrollHeight}
                    style={{
                        flexGrow: 1,
                        ...style
                    }}
                    header={header}
                    footer={footer}
                    { ...props as any }
                >
                    { children }
                </DataTable>
            }
        </Fragment>
    );
}