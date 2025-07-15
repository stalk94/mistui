// все инпуты
export * from './components/inputs';

// все формы
export * from './components/form';
export type { Schema } from './components/form/types';

// формы
export * from './components/form';

// кнопки
export * from './components/buttons';

// карусели
export * from './components/carousel';
export type { CarouselProps } from './components/carousel/types';

// для текста
export * from './components/text';

// навигация
export { default as Breadcrumbs } from './components/breadcrumbs';
export { useBreadcrumbs } from './components/breadcrumbs';
export type { BreadcrumbsNavProps as BreadcrumbsProps } from './components/breadcrumbs';

// Акордеон нормальный
export { default as Accordion } from './components/acordeon';

// иконки флажки разделители и прочее
export { default as Flag } from './components/utils/flag';
export { default as Divider } from './components/utils/divider';

// всплываюшие информационные окна
export { AlertProvider, useAlert } from './components/alert';
export type { AlertManagerProps } from './components/alert';

// панель для инструментов
export { default as Bar } from './components/nav-bars/bar';

// таблица данных primereact модернизированная
export { default as DataTable } from './components/data-table';
export type{ DataTablePropsWrapper as DataTableProps } from './components/data-table';

// аватар и аватары
export { default as Avatar, AvatarGroup } from './components/avatar';

// tabs
export { default as Tabs } from './components/tabs';

// Divdder
export { default as Divdder } from './components/utils/divider';

// Badge 
export { default as Badge } from './components/utils/badge';

// Stat/Stats 
export { default as Stat, Stats } from './components/utils/stat';

///////////////////////////////////////////////////////////////////////////
//    на переработку
///////////////////////////////////////////////////////////////////////////
// левая панелька как в vs code
export { default as LeftSideBar } from './components/nav-bars/left-nav';
export { default as LeftSideBarAndTool } from './components/nav-bars/tool-left';


// appBar
export { default as AppBar } from './components/app-bar';
// слоты appBar
export { Start, LinearNavigation, MobailBurger } from './components/app-bar';

// выпадаюшее меню при наведении на элемент с кастомным содержимым
export { default as HoverPopover } from './components/popup/HoverPopover';
export type { HoverPopoverProps } from './components/popup/HoverPopover';