import { forwardRef, Fragment, useState, useRef, useEffect } from 'react';
import type { PopoverProps } from './types';
import { useTheme } from '../theme';
import { motion, AnimatePresence } from "framer-motion";


// ! позиционирование
export default function Dropdown({ 
    trigger, 
    children, 
    position = "bottom-start", 
    className = "",
    classNameContainer = "",
    style = {},
    isHover = false,
    onClose,
    shadow,
    usePortal = false,
    open: controlledOpen,
    setOpen: setControlledOpen
}: PopoverProps) {
    const { styles, shadows } = useTheme();
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [coords, setCoords] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;


    const handleMouseEnter = () => {
        if (isHover) {
            if (timeout.current) clearTimeout(timeout.current);
            setOpen(true);
        }
    }
    const handleMouseLeave = () => {
        if (isHover) {
            timeout.current = setTimeout(() => {
                setOpen(false);
                onClose?.();
            }, 200);
        }
    }
    const getPositionClasses = (): string => {
        switch (position) {
            case "top-start":
                return "bottom-full left-0 mb-2";
            case "top-end":
                return "bottom-full right-0 mb-2";
            case "bottom-start":
                return "top-full left-0 mt-2";
            case "bottom-end":
                return "top-full right-0 mt-2";
            case "left-start":
                return "right-full top-0 mr-2";
            case "left-end":
                return "right-full bottom-0 mr-2";
            case "right-start":
                return "left-full top-0 ml-2";
            case "right-end":
                return "left-full bottom-0 ml-2";
            default:
                return "top-full left-0 mt-2";
        }
    }

    useEffect(() => {
        if (usePortal && open && triggerRef.current) {
            const raf = requestAnimationFrame(() => {
                const rect = triggerRef.current!.getBoundingClientRect();
                const dropdownWidth = dropdownRef.current?.offsetWidth ?? 160;
                const offset = -6;

                let top = rect.bottom + offset;
                let left = rect.left;

                if (position === "top-start") {
                    top = rect.top - offset;
                }

                if (position.includes("end")) {
                    left = rect.right - dropdownWidth;
                }

                setCoords({ top, left });
            });

            return () => cancelAnimationFrame(raf);
        }
    }, [open, usePortal, position]);
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                !triggerRef.current?.contains(target) &&
                !dropdownRef.current?.contains(target)
            ) {
                setOpen(false);
                onClose?.();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    

    return (
        <div 
            ref={triggerRef}
            className={`relative inline-block ${classNameContainer}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                onClick={() => !isHover && setOpen((v) => !v)}
                className="cursor-pointer select-none"
            >
                { trigger }
            </div>

            <AnimatePresence>
                {open &&
                    <motion.div
                        ref={dropdownRef}
                        initial={{ opacity: 0, scale: 0.95, y: -12 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className={`
                            fixed
                            min-w-25
                            rounded 
                            shadow 
                            ${getPositionClasses()}
                            ${className}
                        `}
                        style={{
                            boxShadow: shadows[shadow],
                            backdropFilter: "blur(14px)",
                            position: usePortal ? "fixed" : "absolute",
                            top: usePortal ? coords.top : undefined,
                            left: usePortal ? coords.left : undefined,
                            zIndex: 9999,
                            ...style
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        { children }
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    );
}