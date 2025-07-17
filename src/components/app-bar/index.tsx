import React, { forwardRef } from "react";
import type { AppBarCustomProps } from './types';
import { useTheme } from '../theme/index';



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
                borderColor: '#8080809a',
                minHeight: height ?? 30,
                ...style
            }}
            { ...props }
        >
            <div className="navbar-start">
                { start }
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">
                { end }
            </div>
        </header>
    );
});


export default AppBar;