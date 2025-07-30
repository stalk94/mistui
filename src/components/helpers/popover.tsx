import { useState, useRef, useEffect } from 'react';
import type { PopoverProps } from './types';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';
import { motion, AnimatePresence } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";


function PortalDrop({ trigger, children, side, align, open, onOpenChange, anchor }) {
    
    return(
        <Popover.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            {anchor &&
                <Popover.Anchor>
                    { anchor }
                </Popover.Anchor>
            }

            <Popover.Trigger asChild>
                { trigger }
            </Popover.Trigger>
            
            <Popover.Portal>
                <Popover.Content
                    side={side}
                    align={align}
                >
                    { children }
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}


export default function Dropdown({ 
    trigger, 
    children, 
    align,
    side, 
    className = "",
    style = {},
    isHover = false,
    onClose,
    shadow,
    usePortal = false,
    anchor,
    open: controlledOpen,
    setOpen: setControlledOpen
}: PopoverProps) {
    const { styles, shadows } = useTheme();
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    
    
    if (usePortal) return (
        <PortalDrop
            side={side}
            align={align}
            trigger={trigger}
            open={open}
            onOpenChange={setOpen}
            anchor={anchor}
            children={
                <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, scale: 0.95, y: -12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className={className}
                    style={{
                        boxShadow: shadows[shadow],
                        ...styles.popover,
                        ...style
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    { children }
                </motion.div>
            }
        />
    );
    return (
        <div 
            ref={triggerRef}
            className={`relative inline-block`}
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
                        className={cs(`
                            fixed
                            min-w-25
                            rounded 
                            shadow 
                            ${className}
                        `)}
                        style={{
                            boxShadow: shadows[shadow],
                            position: "absolute",
                            zIndex: 999,
                            ...styles.popover,
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