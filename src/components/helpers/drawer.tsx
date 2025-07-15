import { forwardRef, Fragment, useState } from 'react';
import type { DrawerProps } from './types';
import { useTheme } from '../theme';


const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
    {
        children,
        className,
        style = {},
        ...props
    }, 
    ref
) {
    const { } = useTheme();


    return(
        <div ref={ref} className={`drawer ${className && className}`}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"/>

                { children }
            </div>
        </div>
    );
});


export default Drawer;