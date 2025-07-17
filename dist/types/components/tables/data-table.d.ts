import type { DataTablePropsWrapper } from './types';
/**
 * 🎁 Декоратор над PrimeReact `<DataTable>`:
 * добавляет автоматическую подстройку высоты контейнера, и прочие улучшения
 * сохраняя оригинальное API компонента.
 * ? надо сделать логику lazy load data
 */
export default function DataTableCustom({ value, children, header, footer, size, shadow, isAutoPagination, hoverVariant, styles, style, ...props }: DataTablePropsWrapper): import("react/jsx-runtime").JSX.Element;
