export { SnackbarProvider, enqueueSnackbar as useSnackbar } from 'notistack';

// theme, createTheme, useTheme, defaultThemeObj, 
export * from './components/theme';

// все инпуты
export * from './components/inputs';

// панели (modal, drawer, popover, tooltip)
export * from './components/helpers';

// таблицы
export * from './components/tables';

// все формы
export * from './components/form';
export type { Schema } from './components/form/types';

// формы
export * from './components/form';

// кнопки
export * from './components/buttons';

// card 
export * from './components/cards';

// карусели
export * from './components/carousel';
export type { CarouselProps } from './components/carousel/types';

// для текста (typography, link, marque)
export * from './components/text';

// навигация
export { default as Breadcrumbs } from './components/breadcrumbs';
export { useBreadcrumbs } from './components/breadcrumbs';
export type { BreadcrumbsNavProps as BreadcrumbsProps } from './components/breadcrumbs';

// Акордеон нормальный
export { default as Accordion } from './components/acordeon';

// Chat
export { default as Chat } from './components/chat';


// иконки флажки разделители и прочее
export { default as Flag } from './components/utils/flag';
export { default as Divider } from './components/utils/divider';

// всплываюшие информационные окна
export { AlertProvider, useAlert } from './components/alert';
export type { AlertManagerProps } from './components/alert';

// base nested menu
export { default as Menu } from './components/menu/list-menu';

// панель для инструментов
export { default as Bar } from './components/nav-bars/bar';

// аватар и аватары
export { default as Avatar, AvatarGroup } from './components/avatar';

// Indicator
export { default as Indicator } from './components/utils/indicator';

// Bottom navigation
export { default as  BottomNavigation } from './components/bottom-nav';

// Overflow
export { default as Overflow } from './components/utils/overflow';

// Hero
export { default as Hero } from './components/hero';

// Footer
export { default as Footer } from './components/footers/base';

// tabs
export { default as Tabs } from './components/tabs';

// collapse
export { default as Collapse } from './components/utils/collapse';

// list
export { default as List } from './components/list/base';

// Divder
export { default as Divder } from './components/utils/divider';

// RadialProgress, ProgressLine
export { default as RadialProgress } from './components/utils/radial-progress';
export { default as Progress } from './components/utils/progress';

// Spinner
export { default as Spinner } from './components/utils/spiners';

// Skeleton
export { default as Skeleton } from './components/utils/skeleton';

// Splitter
export { SplitterCustom as Splitter, SplitterPanelCustom as SplitterPanel } from './components/utils/splitter';

// Badge 
export { default as Badge } from './components/utils/badge';

// Stat/Stats 
export { default as Stat, Stats } from './components/utils/stat';

// paginator 
export { default as Paginator } from './components/list/pagination';

// Box
export { default as Box } from './components/blocks/box';

///////////////////////////////////////////////////////////////////////////
//    на переработку
///////////////////////////////////////////////////////////////////////////
// левая панелька как в vs code
export { default as LeftSideBar } from './components/nav-bars/left-nav';
export { default as LeftSideBarAndTool } from './components/nav-bars/tool-left';

// appBar
export { default as AppBar } from './components/app-bar/AppBar';
// слоты appBar
//export { Start, LinearNavigation, MobailBurger } from './components/app-bar';