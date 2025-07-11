import React, { forwardRef } from "react";
import LinearNavigationDesktop from './linear-desktop';
import MobailBurgerNavigation from './mobail-burger';
import type { AppBarCustomProps } from './types';
import { useTheme } from '../theme/index';


/**
 * 📦 Шаблон для левого слота (например, логотип)
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Элемент, который будет отображён в левом слоте (например, логотип)
 */
export const Start =({ children })=> {
    return(
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }}
        >
            { children }
        </div>
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
 * строительный шаблон для app bar
 * - `start` - левый слот 
 * - `center` - центральный слот (к примеру линейная навигация)
 * - `end` - правый слот (к примеру user, main)
 */
const AppBar = forwardRef<HTMLHeadingElement, AppBarCustomProps>(function AppBar(
    {
        start,
        center,
        end,
        height,
        style,
        ...props
    },
    ref
 ) {
    const { styles } = useTheme();
    
    return(
        <header 
            ref={ref}
            className={`
                navbar
            `}
            style={{ 
                position: 'sticky',
                border: `1px solid`,
                backdropFilter: "blur(14px)",
                minHeight: height ?? 30,
                ...style
            }}
            { ...props }
        >
            <div className="navbar-start">

            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">

            </div>
        </header>
    );
});


export default AppBar;