import type { AppBarProps } from './types';
/**
 * app bar - construction template on slots
 * - `startSlot` - left slot (for example: logo image)
 * - `centerSlot` - center slot (for example: site navigation links)
 * - `endSlot` - right slot (for example: user burger menu)
 */
declare const AppBar: import("react").ForwardRefExoticComponent<AppBarProps & import("react").RefAttributes<HTMLHeadingElement>>;
export default AppBar;
