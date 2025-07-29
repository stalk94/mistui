import React, { useRef, MouseEvent } from 'react';



export default function RippleWrapper({
    children,
    className = '',
    isEnable = false,
    color = 'rgba(255, 255, 255, 0.4)',
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & { isEnable?: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const createRipple = (event: MouseEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (!container) return;

        const ripple = document.createElement('span');
        ripple.className = 'animate-ripple';

        const rect = container.getBoundingClientRect();
        
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Учитываем скругления контейнера
        const radius = getComputedStyle(container).borderRadius;
        ripple.style.borderRadius = radius;
        ripple.style.backgroundColor = color;

        container.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }


    if (!isEnable) return (
        <>
            { children }
        </>
    );
    return (
        <div
            ref={containerRef}
            onClick={createRipple}
            className={`relative inline-block overflow-hidden h-fit w-fit ${className}`}
            { ...rest }
        >
            { children }
        </div>
    );
}