import { useCache, useHover } from './hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from './theme';
import { useMemo } from 'react';


export type AccordionProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> & {
    items: {
        /** label аккордеона */
        title: React.ReactElement | string
        /** тело аккордеона */
        content: React.ReactElement
    }[] 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    /** массив индексов развернутых вкладок [0, 1, 2 ...] */
    activeIndexs?: number[]
    style?: React.CSSProperties
    styleTitle?: React.CSSProperties
    classNameTitle?: React.HTMLAttributes<HTMLDivElement>['className']
}


export default function Acordeon({
    items,
    size,
    activeIndexs,
    style = {},
    variant = 'contained',
    color = 'primary',
    styleTitle,
    className,
    classNameTitle
}: AccordionProps) {
    const [refHover, hovered] = useHover();
    const { styles, autosizes, variants, plugins } = useTheme();
    const sizeText = size ? `text-${size}` : autosizes.text;
    const [active, setActive] = useCache(activeIndexs ?? 0);
    

    const colorContrast = useMemo(() => {
        if (variant !== 'dash' && variant !== 'outline' && variant !== 'soft') {
            return plugins.contrast((variants[color] ?? color));
        }
        else return (variants[color] ?? color);
    }, [style, color, variant]);
    const getStyle = useMemo(() => {
        if (variant === 'ghost') return {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            ...style
        };
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        
        let st = {
            ...style,
            backgroundColor: (variants[color] ?? color),
            borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.1),
            color: plugins.alpha(colorContrast, 1)
        }

        if (variant === 'soft') {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor:  plugins.alpha(st.backgroundColor ?? inlneBg, 0.05) ?? 'inherit',
                borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.2),
                borderStyle: 'solid',
            };
        }
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: inlneBg ?? 'inherit',
                borderColor: (variants[color] ?? color) ?? inlneBorder ?? inlneBg,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }


        return st;
    }, [style, color, variant]);
    const getStyleHovered = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        let st = {};

        if (hovered && variant === 'ghost') return {
            borderColor: 'transparent',
            backgroundColor: plugins.alpha(variants[color] ?? color, 0.7),
            ...style
        }

        return st;
    }, [style, color, variant, hovered]);


    return(
        <div 
            ref={refHover}
            style={{ 
                borderRadius: 6,
                backgroundColor: styles?.accordeon?.backgroundColor,
                ...getStyle,
                ...getStyleHovered
            }}
            className={`
                join 
                join-vertical 
                w-full
                ${sizeText}
                ${className && className}
            `}
        >
            {items.map((elem, index) =>
                <div 
                    onClick={() => setActive(index)}
                    key={index} 
                    className={`
                        collapse 
                        join-item 
                        border
                        ${active === index && 'collapse-open'}
                    `}
                    style={getStyle}
                >
                    {/* title */}
                    <div
                        className={`
                            collapse-title 
                            p-1
                            flex
                            justify-between 
                            items-center
                            ${classNameTitle && classNameTitle}
                        `}
                        style={styleTitle}
                    >
                        { elem.title }
                       
                        <ChevronDownIcon 
                            className={`
                                h-3
                                transition-transform 
                                duration-300 
                                ${active === index && 'rotate-180'}
                            `}
                        />
                    </div>
                    
                    {/* content */}
                    <div 
                        style={{ 
                            padding: active !== index ? 0 : 4,
                        }}
                        className={`
                            collapse-content
                            border-[#0000001a]
                            border-t-1
                            border-b-1
                            bg-[#00000032]
                        `}
                    >
                        { elem.content }
                    </div>
                </div>
            )}
        </div>
    );
}