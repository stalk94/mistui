import { forwardRef, Fragment, useState, useRef, useEffect } from 'react';
import type { PopoverProps } from './types';
import { useTheme } from '../theme';


export default function Dropdown({ 
    trigger, 
    children, 
    position = "bottom-start", 
    className = "",
    classNameContainer = "",
    style = {},
    isHover = false,
    onClose,
    shadow
}: PopoverProps) {
    const { styles, shadows } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);


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
        const handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
                onClose?.();
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);


    return (
        <div 
            ref={ref} 
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

            {open && (
                <div
                    className={`
                        absolute 
                        mt-1 
                        p-1
                        pt-2
                        z-9999 
                        min-w-[10rem]
                        bg-[#2c2c2c]
                        border 
                        border-gray-500
                        rounded 
                        shadow
                        ${getPositionClasses()}
                        ${className}
                    `}
                    style={{
                        boxShadow: shadows[shadow],
                        ...style
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    { children }
                </div>
            )}
        </div>
    );
}