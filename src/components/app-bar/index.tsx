import React from "react";
import { AppBar, Toolbar, Box, useTheme, AppBarProps } from "@mui/material";
import LinearNavigationDesktop from './linear-desktop';
import MobailBurgerNavigation from './mobail-burger';


type AppBarCustomProps = AppBarProps & {
    start: React.ReactNode
    center: React.ReactNode
    end: React.ReactNode
    height: number
}


/**
 * 📦 Шаблон для левого слота (например, логотип)
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Элемент, который будет отображён в левом слоте (например, логотип)
 */
export const Start =({ children })=> {
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            { children }
        </Box>
    );
}
/** 
 * шаблон центрального слота, (! это линейная навигация она видна только на desktop)    
 * * ❗ внимание отключается видимость на экранах МЕНЬШЕ 600px ширины
 */
export const LinearNavigation = LinearNavigationDesktop;
/** 
 * компонент мобильного меню заменяет LinearNavigation на маленьких экранах     
 * * ❗ внимание отключается видимость на экранах БОЛЬШЕ 600px ширины
 */
export const MobailBurger = MobailBurgerNavigation;



/**
 * строительный шаблон для app bar, наследуется от MUI appbar
 * - `start` - левый слот 
 * - `center` - центральный слот (к примеру линейная навигация)
 * - `end` - правый слот (к примеру user, main)
 */
export default function ({ start, center, end, height, ...props }: AppBarCustomProps) {
    const theme = useTheme();
    
    // alpha(theme.palette.background.input, 0.35)
    return(
        <AppBar 
            position="static" 
            { ...props }
            sx={{ 
                p: 0, 
                m: 0, 
                backgroundColor: theme.palette.appBar.main,
                border: `1px solid`,
                borderColor: theme.palette.appBar.border,
                backdropFilter: "blur(14px)",
                minHeight: height ?? 30,
                display: 'flex',
                ...props.sx
            }}
        >
            <Toolbar 
                disableGutters 
                sx={{ px: 1 }}
                style={{
                    minHeight: height ?? 30,
                    display: 'flex',
                    justifyContent: 'flex-start'
                }}
            >
               { start }
               { center }

               <Box
                    sx={{
                        ml: 'auto',
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}
                >
                    { end }
                </Box>
            </Toolbar>
        </AppBar>
    );
}