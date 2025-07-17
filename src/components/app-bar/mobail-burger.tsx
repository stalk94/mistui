import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import type { MobailBurgerProps } from './types';
import { IconButton } from "../buttons";
import Menu from '../menu/list-menu';




/** 
 * Бургер-меню кнопка для мобилок 
 * ! отключается видимость на экранах более 600px ширины
*/
export default function ({ items, children }: MobailBurgerProps) {


    return(
        <React.Fragment>
            <IconButton
                color="navigation"
                aria-label="navigation-menu"
                onClick={handleMenuOpen}
            >
                { children ?? <Bars3Icon /> }
            </IconButton>


            {/* Выпадающее меню mobile */}
            <Menu
                
            />
        </React.Fragment>
    );
}
