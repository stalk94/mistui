import React, { useRef, useState, useEffect } from "react";


export default function ResizableBox({
    children,
    initSize,
    initPosition,
    style = {},
    onChange,
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(initSize);
    const isResizingRef = useRef(false);
    const startSizeRef = useRef(initSize);
    const isDraggingRef = useRef(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const startPosRef = useRef({ x: 0, y: 0 });


    useEffect(() => {
        // устанавливаем size из initSize при изменении initSize
        setSize((prev) => {
            if (
                prev.width !== initSize.width ||
                prev.height !== initSize.height
            ) {
                return initSize;
            }
            return prev;
        });
    }, [initSize]);
    useEffect(() => {
        // устанавливаем size из initSize при изменении initSize
        setPosition((prev) => {
            if (
                prev.x !==  initPosition.x||
                prev.y !== initPosition.y
            ) {
                return initPosition;
            }
            return prev;
        });
    }, [initPosition]);
    useEffect(() => {
        const stop = () => {
            if (isResizingRef.current) {
                isResizingRef.current = false;
                // вызываем onChange после завершения resize
                if (onChange) {
                    const { width, height } = size;
                    const { width: startW, height: startH } = startSizeRef.current;

                    if (width !== startW || height !== startH) {
                        onChange({ width: Math.round(size.width), height: Math.round(size.height) });
                        startSizeRef.current = size; // сбрасываем стартовое значение
                    }
                }
            }
        };
        window.addEventListener("mouseup", stop);
        return () => window.removeEventListener("mouseup", stop);
    }, [size, onChange]);

    const startResize = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!containerRef.current?.parentElement) return;

        const parent = containerRef.current.parentElement;
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = size.width;
        const startHeight = size.height;
        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;

        startSizeRef.current = size;
        isResizingRef.current = true;

        const onMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;

            const newWidth = ((startWidth / 100) * parentWidth + deltaX) / parentWidth * 100;
            const newHeight = ((startHeight / 100) * parentHeight + deltaY) / parentHeight * 100;

            setSize({
                width: Math.min(Math.max(newWidth, 10), 100),
                height: Math.min(Math.max(newHeight, 10), 100),
            });
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener(
            "mouseup",
            () => {
                window.removeEventListener("mousemove", onMouseMove);
            },
            { once: true }
        );
    }
    const startDrag = (e: React.MouseEvent) => {
        e.preventDefault();
        isDraggingRef.current = true;
        const startX = e.clientX;
        const startY = e.clientY;
        const { x, y } = position;

        const onMouseMove = (e: MouseEvent) => {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            setPosition({ x: x + dx, y: y + dy });
        }
        const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);

            const end = position;
            const start = startPosRef.current;

            if ((start.x !== end.x || start.y !== end.y)) {
                onChange(end);
            }

            isDraggingRef.current = false;
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp, { once: true });
    }

    
    return (
        <div className="w-full h-full relative" style={style}>
            <div
                ref={containerRef}
                className="flex w-full h-full absolute rounded overflow-hidden border-1 border-dashed border-[#d668da63]"
                style={{
                    width: `${size.width}%`,
                    height: `${size.height}%`,
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}
            >
                <div
                    onMouseDown={startDrag}
                    className="absolute top-0 left-0 w-4 h-4 bg-green-500 cursor-move z-20 rounded-bl-sm"
                    title="Переместить"
                />
                
                { children }

                <div
                    onMouseDown={startResize}
                    className="absolute w-4 h-4 right-0 bottom-0 bg-blue-600 cursor-se-resize"
                />
            </div>
        </div>
    );
}