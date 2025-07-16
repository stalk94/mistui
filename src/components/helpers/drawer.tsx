import { forwardRef, Fragment, useEffect, useState } from 'react';
import type { DrawerProps } from './types';
import { useTheme } from '../theme';



const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
    {
        children,
        className,
        style = {},
        content,
        open,
        onClose,
        isCloseClickOutside,
        ...props
    }, 
    ref
) {
    const [cheked, setCheked] = useState(open ?? false);
    const { } = useTheme();


    const handle = (chekedVal: boolean) => {
        if (!chekedVal) onClose?.();
        setCheked(chekedVal);
    }
    useEffect(()=> {
        setCheked(open);
    }, [open]);

    
    return(
        <>
            <div 
                ref={ref} 
                className={`drawer ${className ?? ''}`}
                { ...props }
            >
                <input 
                    checked={cheked}
                    type="checkbox" 
                    className="drawer-toggle" 
                />

                <div className="drawer-side">
                    <div 
                        aria-label="close sidebar" 
                        className="drawer-overlay"
                        onClick={() => isCloseClickOutside && handle(false)}
                    />

                    { content }
                </div>
            </div>

            { children &&
                <span 
                    className='contents' 
                    onClick={()=> handle(true)}
                >
                    { children }
                </span>
            }
        </>
    );
});


export default Drawer;