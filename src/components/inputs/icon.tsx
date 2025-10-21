import { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { MdOutlineImage } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useTheme } from '../theme';
import IconsCatalog, { iconsList } from '../utils/icons';
import { FormWrapper } from './atomize';
import ReactDOM from 'react-dom';
import type { IconPickerProps } from './type';

const sizes = {
    xs: 14,
    sm: 18,
    md: 24,
    lg: 24,
    xl: 28
}

function IconPopUp({
    trigger,
    offsetX = 8,
    offsetY = 12,
    maxWidth,
    maxHeight = 400,
    select,
    value,
    style,
    isHover,
    ...props
}: {
    trigger: React.ReactNode;
    offsetX?: number;
    offsetY?: number;
    maxWidth?: number;
    maxHeight?: number;
    select?: string;
    value?: string;
    style?: React.CSSProperties;
    isHover?: boolean;
}) {
    const [menuState, setMenuState] = useState<{ x: number; y: number; width: number } | null>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    const openMenu = useCallback(() => {
        if (!triggerRef.current) return;

        const rect = triggerRef.current.getBoundingClientRect();
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        const width = Math.max(maxWidth ?? rect.width, 500);

        let posX = rect.left; // от начала компонента
        let posY = rect.bottom + offsetY;

        // если вылезаем за экран по ширине → сдвигаем влево
        if (posX + width > screenW) {
            posX = Math.max(0, screenW - width - offsetX);
        }

        // если вылезаем за экран по высоте → поднимаем вверх
        if (posY + maxHeight > screenH) {
            posY = Math.max(0, screenH - maxHeight - offsetY);
        }

        setMenuState({ x: posX, y: posY, width });
    }, [maxWidth, maxHeight, offsetX, offsetY]);
    const handleClose = useCallback(() => {
        setMenuState(null);
    }, []);
    const handleMouseEnter = useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (isHover) openMenu();
    }, [isHover, openMenu]);
    const handleMouseLeave = useCallback(() => {
        timeoutRef.current = setTimeout(() => {
            handleClose();
        }, 200);
    }, [handleClose]);


    const menu = useMemo(() => {
        if (!menuState) return null;

        return ReactDOM.createPortal(
            <div
                onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={handleMouseLeave}
                style={{
                    position: "fixed",
                    top: menuState.y,
                    left: menuState.x,
                    zIndex: 999999,
                    width: menuState.width,
                    maxHeight,
                    color: "white",
                    overflowY: "auto",
                    overflowX: "hidden",
                    userSelect: "none",
                    ...style,
                }}
            >
                <IconsCatalog select={select ?? value} {...props} />
            </div>,
            document.body
        );
    }, [menuState, handleMouseLeave, props, maxHeight, select, value, style]);

    return (
        <>
            <div
                ref={triggerRef}
                className="w-full"
                onClick={openMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={isHover ? handleMouseLeave : undefined}
            >
                {trigger}
            </div>
            {menu}
        </>
    );
}


export default function IconPicker({ 
    value, 
    onChange,
    size,
    color,
    variant,
    styleDropDown={},
    isHover,
    isSimple,
    ...props
}: IconPickerProps) {
    const { styles, variants, plugins } = useTheme();
    const [val, setValue] = useState(value);


    const colorPlaceholder = useMemo(() => {
        const curColor = (variants[color] ?? color);
        let cur = 'white';

        if (!variants[color]) {
            const isBright = plugins.isBright(curColor, 100);

            if (!isBright) cur = 'white';
            else cur = curColor;

            if (variant === 'contained' || variant === 'soft') cur = 'black';
        }

        return plugins.alpha(cur, 0.4);
    }, [color, variant]);
    useEffect(() => {
        setValue(value);
    }, [value]);


    return (
        <FormWrapper
            size={size}
            color={color}
            { ...props }
            labelRight={
                <button
                    className='cursor-pointer hover:opacity-50'
                    onClick={() => {
                        onChange?.(undefined);
                        setValue(undefined);
                    }}
                >
                    <MdDeleteForever size={sizes[size] ?? 18} />
                </button>
            }
        >
            <IconPopUp
                style={styleDropDown}
                isHover={isHover}
                onChange={(nv) => {
                    onChange?.(nv);
                    setValue(nv);
                }}
                trigger={
                    <div className="hover:opacity-60 w-full transition cursor-pointer flex items-center">
                        {iconsList[val]?.({ size: 20 }) ?? (
                            <MdOutlineImage
                                size={sizes[size] ?? 18}
                                className="text-gray-400"
                            />
                        )}

                        {!isSimple &&
                            <span
                                className='mx-auto'
                                style={{
                                    color: val ? styles?.input?.fontColor : colorPlaceholder
                                }}
                            >
                                {val || "not select"}
                            </span>
                        }
                    </div>
                }
            />
        </FormWrapper>
    );
}