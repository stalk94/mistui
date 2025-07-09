import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '@mui/icons-material';

type SourceIremType = {
    type: 'image' | 'video' | 'content'
    src?: string | React.ReactElement
    style?: React.CSSProperties 
}
export type CarouselProps = {
    editor?: boolean
    width?: number 
    height?: number
    loop?: boolean
    autoplay?: boolean
    slidesToScroll?: number
    autoplayDelay?: number
    slidesToShow?: number
    items: SourceIremType[]
}


export const CarouselHorizontal = ({ height, editor, ...props }: CarouselProps) => {
    const pointer = useRef({ startX: 0, dragging: false });
    const containerRef = useRef<HTMLDivElement>(null);
    const [cellHeight, setCellHeight] = useState<number>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const x = useMotionValue(0);
    const {
        items = [],
        autoplay = false,
        autoplayDelay = 3000,
        loop = false,
        slidesToShow = 3,
        slidesToScroll = 1,
    } = props;
    
    
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
        
        if (!height && props['data-parent']) {
            const parentCell = document.querySelector(`[data-id="${props['data-parent']}"]`);
            if (parentCell) {
                setCellHeight(parentCell.getBoundingClientRect().height - 4);
            }
            // самостоятельно вычислить размеры
            else if(!parentCell) {
                const boundParent = containerRef.current.parentElement.getBoundingClientRect();
                setCellHeight(boundParent.height - 4);
            }
        }
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
        <>
            { items.length > slidesToShow && (
                <>
                    <button className="carousel-button left" onClick={() => goTo(currentIndex - slidesToScroll)}>
                        <ChevronLeft fontSize="inherit" />
                    </button>
                    <button className="carousel-button right" onClick={() => goTo(currentIndex + slidesToScroll)}>
                        <ChevronRight fontSize="inherit" />
                    </button>
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

            <style>
                {`
                    .carousel-button {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
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
                    .carousel-button:hover {
                        background: rgba(0, 0, 0, 0.6);
                    }
                    .carousel-button.left {
                        left: 4px;
                    }
                    .carousel-button.right {
                        right: 4px;
                    }
                `}
            </style>
        </>
    );
}



export const CarouselVertical = ({ editor, ...props }: CarouselProps) => {
    const pointer = useRef({ startY: 0, dragging: false });
    const containerRef = useRef<HTMLDivElement>(null);
    const [slideHeight, setSlideHeight] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const y = useMotionValue(0);
    const {
        items = [],
        autoplay = false,
        autoplayDelay = 3000,
        loop = false,
        slidesToShow = 3,
        slidesToScroll = 1,
    } = props;
    
    
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

        const update = () => {
            if (containerRef.current) {
                const fullHeight = containerRef.current.offsetHeight;
                const perSlide = fullHeight / slidesToShow;
                setSlideHeight(perSlide);
                animate(y, -currentIndex * perSlide, { type: 'spring', stiffness: 250 });
            }
        }

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
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
        <>
            {items.length > slidesToShow && (
                <>
                    <button className="vcarousel-button top" onClick={() => goTo(currentIndex - slidesToScroll)}>
                        <ExpandLess fontSize="inherit" />
                    </button>
                    <button className="vcarousel-button bottom" onClick={() => goTo(currentIndex + slidesToScroll)}>
                        <ExpandMore fontSize="inherit" />
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
        </>
    );
}