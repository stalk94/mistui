import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import type { CarouselProps, SourceIremType } from './types';
import { IconButton } from '../buttons';


export default function CarouselHorizontal({
    height,
    editor,
    items = [],
    autoplay = false,
    autoplayDelay = 3000,
    loop = false,
    slidesToShow = 3,
    slidesToScroll = 1,
    ...props
}: CarouselProps) {
    const pointer = useRef({ startX: 0, dragging: false });
    const containerRef = useRef<HTMLDivElement>(null);
    const [cellHeight, setCellHeight] = useState<number>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const x = useMotionValue(0);
    
    
    const goTo = (index: number) => {
        let safeIndex = index;

        if (!loop) {
            const maxSafe = Math.max(0, items.length - slidesToShow);

            if (safeIndex > maxSafe) {
                safeIndex = 0; // вернуться в начало при переполнении
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
        pointer.current.startX = e.clientX;
        pointer.current.dragging = true;
    }
    const onPointerMove = (e: React.PointerEvent) => {
        if (!pointer.current.dragging) return;
        const delta = e.clientX - pointer.current.startX;
        x.set(-currentIndex * slideWidth + delta);
    }
    const onPointerUp = (e: React.PointerEvent) => {
        if (!pointer.current.dragging) return;
        pointer.current.dragging = false;
        const delta = e.clientX - pointer.current.startX;

        if (Math.abs(delta) > slideWidth / 4) {
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
                    height: height ?? '100%',
                    objectFit: 'cover',
                }} 
            />
        );
        else if (item.type === 'video') return(
            <video 
                src={item.src} 
                controls 
                style={{ 
                    ...item?.style,
                    width: '100%', 
                    height: height ?? '100%', 
                    objectFit: 'cover',
                }} 
            />
        );
        else return(
            <div
                style={{ 
                    ...item?.style,
                    width: '100%', 
                    height: height ?? '100%', 
                }} 
            >
                { item.src }
            </div>
        );
    }
    
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const update = () => {
            if (containerRef.current) {
                const fullWidth = containerRef.current.offsetWidth;
                const perSlide = fullWidth / slidesToShow;
                setSlideWidth(perSlide);
                animate(x, -currentIndex * perSlide, { type: 'spring', stiffness: 250 });
            }
        }

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [currentIndex, slidesToShow, props]);
    useEffect(()=> {
        if (typeof window === 'undefined') return;

        const updateHeight = () => {
            const parentCell = props['data-parent']
                ? document.querySelector(`[data-id="${props['data-parent']}"]`)
                : null;

            const target = parentCell || containerRef.current?.parentElement;
            if (!target) return;

            const height = target.getBoundingClientRect().height;
            setCellHeight(height);
        };

        updateHeight(); // первичный вызов
        const interval = setInterval(updateHeight, 300); // каждые 300 мс

        return () => clearInterval(interval);
    }, [props]);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (editor || !autoplay || items.length <= slidesToShow) return;

        const interval = setInterval(() => {
            const nextIndex = currentIndex + slidesToScroll;

            if (!loop && nextIndex > items.length - slidesToShow) {
                goTo(0); // вернуться в начало при достижении конца
            } 
            else goTo(nextIndex);
            
        }, autoplayDelay);

        return ()=> clearInterval(interval);
    }, [currentIndex, autoplay, autoplayDelay, items.length, slidesToShow, slidesToScroll, loop]);
    
    
    return (
        <div className='w-full h-full relative'>
            { items.length > slidesToShow && (
                <>
                    <div className="carousel-button left rounded-2xl">
                        <IconButton 
                            className='rounded-2xl border-0'
                            color='#29292981'
                            onClick={() => goTo(currentIndex - slidesToScroll)}
                            icon={<ChevronLeftIcon />}
                        />
                    </div>
                    <div className="carousel-button right rounded-2xl">
                        <IconButton 
                            className='rounded-2xl border-0'
                            color='#29292981'
                            onClick={() => goTo(currentIndex + slidesToScroll)}
                            icon={<ChevronRightIcon />}
                        />
                    </div>
                </>
            )}

            <div
                ref={containerRef}
                style={{ width: '100%', maxHeight: '100%', overflow: 'hidden' }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                <motion.div
                    style={{
                        display: 'flex',
                        x,
                        cursor: 'grab',
                        userSelect: 'none'
                    }}
                >
                    {items.map((item, i) => (
                        <div 
                            onDragStart={(e) => e.preventDefault()}
                            key={i}
                            style={{
                                flex: `0 0 ${100 / slidesToShow}%`,
                                maxWidth: `${100 / slidesToShow}%`,
                                height: (height ?? cellHeight) ?? '100%',
                                padding: 2,
                                boxSizing: 'border-box',
                                userSelect: 'none',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            { editor ? item.src : renderItem(item) }
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
