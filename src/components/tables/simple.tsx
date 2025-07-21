import { Fragment } from 'react/jsx-runtime';
import { useTheme } from '../theme';
import type { TableProps } from './types';

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

// ! color
export default function Table({
    value,
    children,
    className,
    style,
    footer,
    header,
    size,
    color,
    shadow,
    ...props
}: TableProps) {
    const { autosizes, shadows } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.table;

    const render = (data, rowIndex) => {
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
            {...props}
        >
            {/* Заголовок */}
            <table className="table table-fixed w-full font-mono">
                <thead 
                    className="sticky top-0 z-10"
                    style={{
                        boxShadow: shadows.xs
                    }}
                >
                    {header && (
                        <tr>
                            <td 
                                className='p-0' 
                                colSpan={children?.length || Object.keys(value[0]).length}
                            >
                                { header }
                            </td>
                        </tr>
                    )}
                    <tr>
                        {(children || Object.keys(value[0])).map((col, i) => (
                            <th 
                                key={i}
                                className='p-1 text-[#686868] font-bold'
                            >
                                {typeof col !== 'object' 
                                    ? col 
                                    : col.header 
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
                                colSpan={children?.length || Object.keys(value[0]).length}
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