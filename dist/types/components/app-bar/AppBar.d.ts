import React from "react";
import type { AppBarCustomProps } from './types';
/**
 * строительный шаблон для app bar
 * - `start` - левый слот
 * - `center` - центральный слот (к примеру линейная навигация)
 * - `end` - правый слот (к примеру user, main)
 */
declare const AppBar: React.ForwardRefExoticComponent<AppBarCustomProps & React.RefAttributes<HTMLHeadingElement>>;
export default AppBar;
