import { useState, forwardRef } from "react";
import { Button, IconButton } from "../buttons";
import { Bars3Icon } from "@heroicons/react/24/outline";
import type { MobailBurgerProps, NestedMenuProps } from './types';
import Menu from '../menu/list-menu';
import { Popover } from "../helpers";
import { ChevronDownIcon } from "@heroicons/react/24/solid";



export function BurgerMenu({
    items,
    children,
    size,
    handleMenuOpen
}: MobailBurgerProps) {

    return (
        <Popover
            position="bottom-end"
            className="min-w-40 py-2"
            trigger={
                <IconButton
                    size={size}
                    variant='ghost'
                    isRounded
                    aria-label="navigation-menu"
                    onClick={handleMenuOpen}
                >
                    {children ?? <Bars3Icon className="w-7" />}
                </IconButton>
            }
        >
            <Menu
                size={size}
                items={items}
            />

        </Popover>
    );
}