import { forwardRef } from "react";
import type { AppBarCustomProps } from './types';
import { useTheme } from '../theme/index';



/**
 * строительный шаблон для app bar
 * - `startSlot` - левый слот 
 * - `centerSlot` - центральный слот (к примеру линейная навигация)
 * - `endSlot` - правый слот (к примеру user, main)
 */
const AppBar = forwardRef<HTMLHeadingElement, AppBarCustomProps>(function AppBar(
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
                backgroundColor: styles?.appBar?.backgroundColor,
                position: 'sticky',
                border: `1px solid`,
                zIndex: 99,
                backdropFilter: "blur(14px)",
                borderColor: '#80808074',
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