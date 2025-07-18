import { forwardRef, Fragment, useEffect, useState } from 'react';
import type { DrawerProps } from './types';
import { useTheme } from '../theme';
import { motion, AnimatePresence } from "framer-motion";


const positionStyle = {
    left: "left-0 top-0 h-full w-60 transform transition-transform",
    right: "right-0 top-0 h-full w-60 transform transition-transform",
    top: "top-0 left-0 w-full h-48 transform transition-transform",
    bottom: "bottom-0 left-0 w-full h-48 transform transition-transform",
};
const variants: Record<NonNullable<DrawerProps["position"]>,
    { hidden: any; visible: any; exit: any }
> = {
    left: {
        hidden: { x: "-100%" },
        visible: { x: 0 },
        exit: { x: "-100%" },
    },
    right: {
        hidden: { x: "100%" },
        visible: { x: 0 },
        exit: { x: "100%" },
    },
    top: {
        hidden: { y: "-100%" },
        visible: { y: 0 },
        exit: { y: "-100%" },
    },
    bottom: {
        hidden: { y: "100%" },
        visible: { y: 0 },
        exit: { y: "100%" },
    },
}


const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
    {
        children,
        className,
        style = {},
        trigger,
        open,
        onClose,
        position = "left",
        ...props
    },
    ref
) {
    const [checked, setChecked] = useState(open ?? false);
    const { } = useTheme();


    const handleToggle = (val: boolean) => {
        if (!val) onClose?.();
        setChecked(val);
    }
    useEffect(() => {
        setChecked(open ?? false);
    }, [open]);


    return (
        <>
            {trigger && (
                <div 
                    onClick={() => setChecked(true)} 
                    className="inline-block"
                >
                    { trigger }
                </div>
            )}

            {/* Overlay + Drawer */}
            <AnimatePresence>
                {checked && (
                    <div
                        className="fixed inset-0 z-9998"
                        style={{ pointerEvents: "auto" }}
                    >
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-black/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => handleToggle(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            ref={ref}
                            className={`
                                fixed 
                                bg-base-100 
                                shadow-lg 
                                z-9999
                                ${positionStyle[position]} 
                                ${className ?? ""}
                            `}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={variants[position]}
                            transition={{ type: "tween", duration: 0.3 }}
                            style={style}
                            { ...props }
                        >
                            { children }
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
});


export default Drawer;