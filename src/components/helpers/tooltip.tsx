import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTheme } from '../theme';
import { Variants } from '../theme/default';
import type { TooltipPlacement, TooltipProps } from './types';



export default function Tooltip({
    content,
    children,
    placement = "bottom",
    className = "",
    delayShow = 800,
    delayHide = 100,
    color,
    textColor,
    borderColor
}: TooltipProps) {
    const { variants } = useTheme();
    const [visible, setVisible] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [resolvedPlacement, setResolvedPlacement] = useState<TooltipPlacement>(placement);
    const ref = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const showTimer = useRef<number>();
    const hideTimer = useRef<number>();
    const curColor = (variants[color] ?? color) ?? "#212121";
    const curBorderColor = (variants[borderColor] ?? borderColor) ?? "#8080805d";
    const curTextColor = (variants[textColor] ?? textColor) ?? "white";


    const calcPosition = (rect: DOMRect) => {
        const margin = 10;
        let x = rect.left + rect.width / 2;
        let y = rect.bottom + margin;
        let place = placement;

        // пробное измерение тултипа, если уже виден
        const tt = tooltipRef.current;
        const ttWidth = tt?.offsetWidth ?? 200;
        const ttHeight = tt?.offsetHeight ?? 50;

        // если не помещается вниз — переносим вверх
        if (place === "bottom" && rect.bottom + ttHeight + margin > window.innerHeight) {
            place = "top";
            y = rect.top - margin;
        } 
        else if (place === "top" && rect.top - ttHeight - margin < 0) {
            place = "bottom";
            y = rect.bottom + margin;
        }

        // вычисление координат для боковых направлений
        if (place === "left") {
            x = rect.left - margin;
            y = rect.top + rect.height / 2;
        } 
        else if (place === "right") {
            x = rect.right + margin;
            y = rect.top + rect.height / 2;
        }

        // коррекция выхода за край по X
        if (x - ttWidth / 2 < 0) x = ttWidth / 2 + margin;
        if (x + ttWidth / 2 > window.innerWidth) x = window.innerWidth - ttWidth / 2 - margin;

        // коррекция выхода по Y (если tooltip слишком высок)
        if (y < margin) y = margin;
        if (y + ttHeight > window.innerHeight) y = window.innerHeight - ttHeight - margin;

        return { x, y, place };
    }
    const show = () => {
        clearTimeout(hideTimer.current);
        showTimer.current = window.setTimeout(() => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const { x, y, place } = calcPosition(rect);
                setCoords({ x, y });
                setResolvedPlacement(place);
                setVisible(true);
            }
        }, delayShow);
    }
    const hide = () => {
        clearTimeout(showTimer.current);
        hideTimer.current = window.setTimeout(() => setVisible(false), delayHide);
    }

    useEffect(() => {
        return () => {
            clearTimeout(showTimer.current);
            clearTimeout(hideTimer.current);
        };
    }, []);


    return (
        <>
            <div
                ref={ref}
                onMouseEnter={show}
                onMouseLeave={hide}
                className={`inline-flex items-center`}
            >
                { children }
            </div>

            {visible &&
                createPortal(
                    <div
                        ref={tooltipRef}
                        className={`
                            fixed z-[9999]
                            px-3 py-2 rounded-md text-sm
                            border shadow-md backdrop-blur-xl
                            animate-[fadeIn_0.2s_ease-out]
                            pointer-events-none select-none
                            ${className}
                        `}
                        style={{
                            top: coords.y,
                            left: coords.x,
                            background: curColor,
                            color: curTextColor,
                            borderColor: curBorderColor,
                            transform:
                                resolvedPlacement === "left" || resolvedPlacement === "right"
                                    ? "translateY(-50%)"
                                    : "translateX(-50%)",
                        }}
                    >
                        { content }
                    </div>,
                    document.body
                )}
        </>
    );
}