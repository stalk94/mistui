import type { SidebarMenuProps, LeftNavigationProps } from './types';
/**
 * todo: надо декомпозировать и рефакторить
 * Базовый выдвижной список (располагается слева)
 * Можно передавать onChange которая для каждого выполнится выбранного.
 * * так же у каждого item может быть свой comand()
 */
export declare function SidebarMenu({ collapsed, items, onChange, isFocusSelected, selected, style, ...props }: SidebarMenuProps): import("react/jsx-runtime").JSX.Element;
/**
 *
 * Панель навигации как в vs code (без рабочей области)
 * с рабочей областью отдельный компонент
 */
export default function BaseLeftSideBar({ collapsed, start, items, onChange, end, style, ...props }: LeftNavigationProps): import("react/jsx-runtime").JSX.Element;
