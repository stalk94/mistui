import type { SideBarAndToolPanelProps } from './types';
/**
 * Это модернизация `<LeftSideBar>`
 * Боковая панель со связаным полем справа
 *
 * как это работать должно:
 * - подаем `schemaNavBar`
 * - слушаем `onChangeNavigation`
 * - меняем `children`
 */
export default function SideBarAndToolPanel({ schemaNavBar, top, end, children, onChangeNavigation, ...props }: SideBarAndToolPanelProps): import("react/jsx-runtime").JSX.Element;
