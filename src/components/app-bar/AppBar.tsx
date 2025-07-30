import { forwardRef, useState } from "react";
import type { AppBarProps } from './types';
import { useTheme } from '../theme/index';



/**
 * app bar - construction template on slots
 * - `startSlot` - left slot (for example: logo image) 
 * - `centerSlot` - center slot (for example: site navigation links) 
 * - `endSlot` - right slot (for example: user burger menu) 
 */
const AppBar = forwardRef<HTMLHeadingElement, AppBarProps>(function AppBar(
    {
        startSlot,
        centerSlot,
        endSlot,
        className,
        shadow = 'lg',
        variant = 'left',
        style,
        ...props
    },
    ref
 ) {
    const { styles, shadows } = useTheme();


    return(
        <header 
            ref={ref}
            className={`navbar ${className ?? ''}`}
            style={{ 
                maxHeight: '3rem',
                backgroundColor: styles?.appBar?.backgroundColor,
                position: 'sticky',
                border: `1px solid`,
                backdropFilter: "blur(14px)",
                borderColor: styles?.appBar?.borderColor,
                boxShadow: shadows[shadow],
                ...style
            }}
            { ...props }
        >
            {(variant === 'left') &&
                <>
                    <div className="flex-none">
                        { startSlot }
                    </div>
                    <div className="flex-1">
                        { centerSlot }
                    </div>
                    <div className="flex-none">
                        { endSlot }
                    </div>
                </>
            }
            {(variant === 'center') &&
                <>
                    <div className="navbar-start">
                        { startSlot }
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        { centerSlot }
                    </div>
                    <div className="navbar-end">
                        { endSlot }
                    </div>
                </>
            }
        </header>
    );
});


export default AppBar;