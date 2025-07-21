import React, { useState } from 'react';


export default function DraggableBox({ children }) {
    const [position, setPosition] = useState({ x: window.innerWidth, y: 55});
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    }
    const handleMouseMove = (e: MouseEvent) => {
        if (dragging) {
            setPosition({
                x: e.clientX - offset.x,
                y: e.clientY - offset.y,
            });
        }
    }
    const handleMouseUp = () => {
        setDragging(false);
    }

    // Навешиваем глобально
    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, offset]);

    
    return (
        <div
            onMouseDown={handleMouseDown}
            className="absolute rounded cursor-move select-none"
            style={{
                left: position.x,
                top: position.y,
            }}
        >
            {children}
        </div>
    );
}