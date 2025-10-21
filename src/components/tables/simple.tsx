import { Fragment, useMemo } from 'react';
import { useTheme } from '../theme';
import type { TableProps } from './types';
import { cs } from '../hooks/cs';


const sizeTable = {
    xs: 'table-xs',
    sm: 'table-sm',
    md: 'table-md',
    lg: 'table-lg',
    xl: 'table-xl'
}
const sizesText = {
    xs: 9,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18
}
const useStyle = ({ style, color, variant }) => {
    const { autosizes, shadows, variants, plugins } = useTheme();

    const colorContrast = useMemo(() => {
        if (variant !== 'dash' && variant !== 'outline' && variant !== 'soft') {
            return plugins.contrast((variants[color] ?? color));
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = {
            ...style,
            backgroundColor: (variants[color] ?? color),
            borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.1),
            color: plugins.alpha(colorContrast, 1)
        }

        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: inlneBg ?? 'inherit',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }


        return st;
    }, [style, color, variant]);
}



export function TableOld({
    value,
    children,
    schema,
    className,
    style,
    footer,
    header,
    size,
    shadow,
    variant = 'outline',
    color,
    ...props
}: TableProps) {
    const { autosizes, shadows, variants } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.table;
    const baseColor = color ? variants[color] ?? color : undefined;
    const curSchema = schema ?? children;

    
    const render = (data, rowIndex: number) => {
        // если есть children — отрисовываем по колонкам
        if (children && children.length > 0) {
            return children.map((col, colIndex) => (
                <Fragment key={col.field + colIndex}>
                    {colIndex === 0 &&
                        <th className={`p-0 font-light`}>
                            {col?.body
                                ? col.body(data[col.field])
                                : data[col.field]
                            }
                        </th>
                    }
                    {colIndex !== 0 &&
                        <td className={`p-0 font-light`}>
                            {col?.body
                                ? col.body(data[col.field])
                                : data[col.field]
                            }

                        </td>
                    }
                </Fragment>
            ));
        }
        // если children нет — отрисовываем по ключам объекта
        return Object.keys(data).map((key, colIndex) => (
            <Fragment key={key + colIndex}>
                {colIndex === 0 &&
                    <th className={`p-0 font-light`}>
                        {data[key]}
                    </th>
                }
                {colIndex !== 0 &&
                    <td className={`p-0 font-light`}>
                        {data[key]}
                    </td>
                }
            </Fragment>
        ));
    }
    

    return (
        <div
            className={`
                rounded-box 
                border 
                border-base-content/5
                h-full flex flex-col overflow-hidden 
                ${className ?? ''}
                ${getSize}
            `}
            style={{
                boxShadow: shadows[shadow],
                ...style
            }}
            { ...props }
        >
            {/* Заголовок */}
            <table className="table table-fixed w-full font-mono">
                <thead 
                    className="sticky top-0 z-10"
                    style={{
                        boxShadow: shadows.xs
                    }}
                >
                    {/* top header */}
                    {header && (
                        <tr>
                            <td 
                                className='p-0'
                                style={{paddingBlock: 0}} 
                                colSpan={curSchema?.length || Object.keys(value[0]).length}
                            >
                                { header }
                            </td>
                        </tr>
                    )}
                    {/* label header */}
                    <tr>
                        {(curSchema || Object.keys(value[0])).map((col, i) => (
                            <th 
                                key={i}
                                className='p-1 opacity-60 font-bold'
                            >
                                {typeof col !== 'object' 
                                    ? col 
                                    : col?.header 
                                }
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>

            {/* Скроллимое тело */}
            <div className="flex-1 overflow-y-auto">
                <table className="table table-fixed w-full">
                    <tbody>
                        {value.map((elem, index) => (
                            <tr 
                                className='p-0'
                                key={index}
                                style={{
                                    borderStyle: variant === 'outline' ? 'solid' : 'dashed',
                                    fontSize: sizesText[size] 
                                        ? sizesText[size]
                                        : undefined
                                }}
                            >
                                { render(elem, index) }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Футер */}
            {footer && (
                <table className="table table-fixed w-full">
                    <tfoot className="sticky bottom-0 z-10">
                        <tr>
                            <td
                                className='p-0' 
                                style={{paddingBlock: 0}} 
                                colSpan={curSchema?.length || Object.keys(value[0]).length}
                            >
                                { footer }
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    );
}

export default function Table({
    value,
    children,
    schema,
    className,
    style,
    footer,
    header,
    size,
    shadow,
    variant = "outline",
    color,
    ...props
}: TableProps) {
    const { autosizes, shadows, variants, plugins, theme } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.table;
    const curSchema = schema ?? children;
    const baseColor = color ? variants[color] ?? color : undefined;

    
    const bodyBg = baseColor
        ? (variant === "contained"
            ? baseColor
            : plugins.alpha(baseColor, 0.1))
        : undefined;

    const theadBg = baseColor
        ? plugins.alpha(plugins.darken(baseColor, 0.2), 1)
        : undefined;

    const headerFooterBg = baseColor
        ? plugins.lighten(baseColor, 0.05)
        : undefined;

    const borderColor = baseColor
        ? (theme === 'dark' ? plugins.lighten(baseColor, 0.2) : plugins.darken(baseColor, 0.2))
        : "rgba(0,0,0,0.2)";  

    const fontColor = baseColor
        ? plugins.isBright(baseColor, 100)
            ? "black"
            : "white"
        : undefined;

    const render = (rowData: any, rowIndex: number) => {
        if (children && children.length > 0) {
            return children.map((col, colIndex) => (
                <Fragment key={col.field + colIndex}>
                    {colIndex === 0 ? (
                        <th className="p-0 font-light">
                            {col?.body
                                ? col.body(rowData[col.field], rowIndex) // ✅ value + index
                                : rowData[col.field]}
                        </th>
                    ) : (
                        <td className="p-0 font-light">
                            {col?.body
                                ? col.body(rowData[col.field], rowIndex) // ✅ value + index
                                : rowData[col.field]}
                        </td>
                    )}
                </Fragment>
            ));
        }

        // если schema не задана — по ключам объекта
        return Object.keys(rowData).map((key, colIndex) => (
            <Fragment key={key + colIndex}>
                {colIndex === 0 ? (
                    <th className="p-0 font-light">
                        {rowData[key]}
                    </th>
                ) : (
                    <td className="p-0 font-light">
                        {rowData[key]}
                    </td>
                )}
            </Fragment>
        ));
    }


    return (
        <div
            className={cs(`
                rounded-box 
                border 
                h-full flex flex-col overflow-hidden 
                ${className ?? ""}
                ${getSize}
            `)}
            style={{
                boxShadow: shadows[shadow],
                borderColor,
                background: bodyBg,
                color: fontColor,
                ...style,
            }}
            { ...props }
        >
            {/* Заголовок */}
            <table className="table table-fixed w-full font-mono">
                <thead
                    className="sticky top-0 z-10"
                    style={{
                        boxShadow: shadows.xs,
                        background: headerFooterBg,
                        color: fontColor,
                    }}
                >
                    {/* top header */}
                    {header && (
                        <tr>
                            <td
                                className="p-0"
                                style={{ paddingBlock: 0 }}
                                colSpan={curSchema?.length || Object.keys(value[0]).length}
                            >
                                {header}
                            </td>
                        </tr>
                    )}
                    {/* label header */}
                    <tr>
                        {(curSchema || Object.keys(value[0])).map((col, i) => (
                            <th
                                key={i}
                                className="p-1 font-bold"
                                style={{
                                    background: theadBg,
                                    color: fontColor,
                                }}
                            >
                                {typeof col !== "object" ? col : col?.header}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>

            {/* Скроллимое тело */}
            <div className="flex-1 overflow-y-auto">
                <table className="table table-fixed w-full">
                    <tbody>
                        {value.map((elem, index) => (
                            <tr
                                key={index}
                                className="p-0"
                                style={{
                                    borderStyle: variant === "outline" ? "solid" : "dashed",
                                    borderColor,
                                    fontSize: sizesText[size] ? sizesText[size] : undefined,
                                }}
                            >
                                {render(elem, index)}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Футер */}
            {footer && (
                <table className="table table-fixed w-full">
                    <tfoot
                        className="sticky bottom-0 z-10"
                        style={{
                            background: headerFooterBg,
                            color: fontColor,
                        }}
                    >
                        <tr>
                            <td
                                className="p-0"
                                style={{ paddingBlock: 0 }}
                                colSpan={curSchema?.length || Object.keys(value[0]).length}
                            >
                                {footer}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            )}
        </div>
    );
}