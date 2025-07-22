import type { AppBarCustomProps } from './types';
/**
 * строительный шаблон для app bar
 * - `startSlot` - левый слот
 * - `centerSlot` - центральный слот (к примеру линейная навигация)
 * - `endSlot` - правый слот (к примеру user, main)
 */
declare const AppBar: import("react").ForwardRefExoticComponent<AppBarCustomProps & import("react").RefAttributes<HTMLHeadingElement>>;
export default AppBar;
