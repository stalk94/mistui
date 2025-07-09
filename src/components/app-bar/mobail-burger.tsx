import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinkItem } from '../menu/type';
import { IconButton } from "@mui/material";
import Menu from '../menu';
import ItemMenuList from '../menu/list';


type MobailBurgerProps = {
    items: NavLinkItem[]
    /** кастомная иконка */
    children?: React.ReactNode 
}



/** 
 * Бургер-меню кнопка для мобилок 
 * ! отключается видимость на экранах более 600px ширины
*/
export default function ({ items, children }: MobailBurgerProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    }
    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuOpen(false);
    }
    


    return(
        <React.Fragment>
            <IconButton
                color="navigation"
                aria-label="navigation-menu"
                sx={{
                    mr: 1,
                    display: { 
                        sm: "none" 
                    }
                }}
                onClick={handleMenuOpen}
            >
                { children ?? <MenuIcon /> }
            </IconButton>


            {/* Выпадающее меню mobile */}
            <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                sx={{
                    mt: 2
                }}
            >
                { items && items.map((item, index) => {
                    return(
                        <ItemMenuList
                            key={index}
                            item={item}
                            onItemClick={() => handleMenuClose()}
                        />
                    );
                })}
            </Menu>
        </React.Fragment>
    );
}
