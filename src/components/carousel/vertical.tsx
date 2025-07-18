import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import type { CarouselProps, SourceIremType } from './types';


export default function CarouselVertical({ 
    editor, 
    items = [],
    autoplay = false,
    autoplayDelay = 3000,
    loop = false,
    slidesToShow = 3,
    slidesToScroll = 1,
    ...props 
}: CarouselProps) {
    const pointer = useRef({ startY: 0, dragging: false });
    const containerRef = useRef<HTMLDivElement>(null);
    const [slideHeight, setSlideHeight] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const y = useMotionValue(0);
    
    
    const goTo = (index: number) => {
        let safeIndex = index;

        if (!loop) {
            const maxSafe = Math.max(0, items.length - slidesToShow);
            if (safeIndex > maxSafe) {
                safeIndex = 0;
            } 
            else {
                safeIndex = Math.max(0, Math.min(safeIndex, maxSafe));
            }
        } 
        else {
            safeIndex = (index + items.length) % items.length;
        }

        setCurrentIndex(safeIndex);
    }
    const onPointerDown = (e: React.PointerEvent) => {
        pointer.current.startY = e.clientY;
        pointer.current.dragging = true;
    }
    const onPointerMove = (e: React.PointerEvent) => {
        if (!pointer.current.dragging) return;
        const delta = e.clientY - pointer.current.startY;
        y.set(-currentIndex * slideHeight + delta);
    }
    const onPointerUp = (e: React.PointerEvent) => {
        if (!pointer.current.dragging) return;
        pointer.current.dragging = false;
        const delta = e.clientY - pointer.current.startY;

        if (Math.abs(delta) > slideHeight / 4) {
            goTo(currentIndex + (delta < 0 ? slidesToScroll : -slidesToScroll));
        } 
        else {
            goTo(currentIndex);
        }
    }
    const renderItem = (item: SourceIremType) => {
        if (item.type === 'image') return(
            <img 
                src={item.src} 
                style={{ 
                    ...item?.style,
                    width: '100%', 
                    paddingTop: 2,
                    paddingBottom: 2,
                    height: slideHeight, 
                }} 
            />
        );
        else if (item.type === 'video') return(
            <video 
                src={item.src} 
                controls 
                style={{ 
                    objectFit: 'cover',
                    ...item?.style,
                    width: '100%', 
                    height: slideHeight, 
                    margin: 'auto', 
                    paddingTop: 2,
                    paddingBottom: 2,
                }} 
            />
        );
        else return(
            <div
                style={{ 
                    ...item?.style,
                    width: '100%', 
                    paddingTop: 2,
                    paddingBottom: 2,
                    //height: calculateHeightSlide - 4, 
                }} 
            >
                { item.src }
            </div>
        );
    }
    const renderItemEditor = (item: SourceIremType) => {
        if (item.type === 'image') return(
            <div
                style={{
                    width: '100%', 
                    height: slideHeight,
                }}
            >
                { item.src }
            </div>
        );
        else if (item.type === 'video') return(
            <div
                style={{
                    width: '100%', 
                    height: slideHeight,
                }}
            >
                { item.src }
            </div>
        );
        else return(
            <div
                style={{ 
                    ...item?.style,
                    width: '100%', 
                    height: slideHeight, 
                }} 
            >
                { item.src }
            </div>
        );
    }


    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!containerRef.current) return;

        const update = () => {
            const fullHeight = containerRef.current.offsetHeight;
            const perSlide = fullHeight / slidesToShow;
            setSlideHeight(perSlide);
            animate(y, -currentIndex * perSlide, { type: 'spring', stiffness: 250 });
        };

        update(); // начальное вычисление

        const observer = new ResizeObserver(update);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [currentIndex, slidesToShow, props]);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (editor || !autoplay || items.length <= slidesToShow) return;

        const interval = setInterval(() => {
            const nextIndex = currentIndex + slidesToScroll;

            if (!loop && nextIndex > items.length - slidesToShow) {
                goTo(0);
            } else goTo(nextIndex);

        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [currentIndex, autoplay, autoplayDelay, items.length, slidesToShow, slidesToScroll, loop]);
    


    return (
        <div className='w-full h-full relative'>
            {items.length > slidesToShow && (
                <>
                    <button className="vcarousel-button top" onClick={() => goTo(currentIndex - slidesToScroll)}>
                        <ChevronUpIcon fontSize="inherit" />
                    </button>
                    <button className="vcarousel-button bottom" onClick={() => goTo(currentIndex + slidesToScroll)}>
                        <ChevronDownIcon fontSize="inherit" />
                    </button>
                </>
            )}

            <div
                ref={containerRef}
                style={{ height: '100%', overflow: 'hidden' }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                <motion.div
                    style={{
                        y,
                        cursor: 'grab',
                        userSelect: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    { items.map((item, i) => (
                        <div
                            onDragStart={(e) => e.preventDefault()}
                            key={i}
                            style={{
                                flex: `0 0 ${100 / slidesToShow}%`,
                                maxHeight: slideHeight,
                                boxSizing: 'border-box',
                                display: 'flex',           
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            { editor ? renderItemEditor(item) : renderItem(item) }
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>
                {`
                    .vcarousel-button {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        z-index: 10;
                        background: rgba(0, 0, 0, 0.3);
                        border: none;
                        color: white;
                        font-size: 28px;
                        width: 36px;
                        height: 36px;
                        cursor: pointer;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        backdrop-filter: blur(4px);
                        transition: background 0.25s ease;
                    }
                    .vcarousel-button.top {
                        top: 4px;
                    }
                    .vcarousel-button.bottom {
                        bottom: 4px;
                    }
                `}
            </style>
        </div>
    );
}