import { useCache, useHover } from './hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from './theme';
import { useMemo } from 'react';
import type { Variants } from './theme/default';
import { cs } from './hooks/cs';


export type AccordionProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> & {
    items: {
        /** label аккордеона */
        title: React.ReactNode
        /** тело аккордеона */
        content: React.ReactNode
    }[] 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'contained' | 'outline' | 'dash' | 'soft' | 'ghost'
    color?: Variants | (string & {})
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    /** массив индексов развернутых вкладок [0, 1, 2 ...] */
    activeIndexs?: number[]
    style?: React.CSSProperties
    styleTitle?: React.CSSProperties
    classNameTitle?: React.HTMLAttributes<HTMLDivElement>['className']
}

// ! size paddings variants computed
export default function Acordeon({
    items,
    size,
    activeIndexs,
    style = {},
    variant = 'contained',
    color = 'neutral',
    shadow,
    styleTitle,
    className,
    classNameTitle
}: AccordionProps) {
    const [refHover, hovered] = useHover();
    const { autosizes, variants, shadows, plugins } = useTheme();
    const sizeText = size ? `text-${size}` : autosizes.text;
    const [active, setActive] = useCache(activeIndexs ?? 0);
    

    const getStyle = useMemo(() => {
        if (variant === 'ghost') return {
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            ...style
        };

        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        
        let st = {
            color: plugins.contrast((variants[color] ?? color)),
            backgroundColor: (variants[color] ?? color),
            borderColor: plugins.alpha((variants[color] ?? color), 0.4),
            ...style,
        }

        if (variant === 'soft') {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor:  plugins.alpha(st.backgroundColor ?? inlneBg, 0.25) ?? 'inherit',
                color: plugins.contrast(plugins.alpha(st.backgroundColor ?? inlneBg, 0.25)),
                borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.2),
                borderStyle: 'solid',
            };
        }
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                backgroundColor: inlneBg ?? 'inherit',
                borderColor: (variants[color] ?? color) ?? inlneBorder,
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
                ...rest,
                ...st,
            };
        }


        return st;
    }, [style, color, variant]);
    const getStyleHovered = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        let st = {};

        if (hovered && variant === 'ghost') return {
            borderColor: 'transparent',
            backgroundColor: inlneBg ?? plugins.alpha(variants[color] ?? color, 0.7),
            ...style
        }

        return st;
    }, [style, color, variant, hovered]);


    return(
        <div 
            ref={refHover}
            style={{ 
                borderRadius: 6,
                boxShadow: shadows[shadow],
                ...getStyle,
                ...getStyleHovered
            }}
            className={cs(`
                join 
                join-vertical 
                w-full
                ${sizeText}
                ${className ?? ''}
            `)}
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
                        className={cs(`
                            collapse-title 
                            p-1
                            flex
                            justify-between 
                            items-center
                            ${classNameTitle ?? ''}
                        `)}
                        style={styleTitle}
                    >
                        { elem.title }
                       
                        <ChevronDownIcon 
                            className={cs(`
                                h-3
                                transition-transform 
                                duration-300 
                                ${active === index && 'rotate-180'}
                            `)}
                        />
                    </div>
                    
                    {/* content */}
                    <div 
                        style={{ 
                            padding: active !== index ? 0 : 4,
                        }}
                        className={cs(`
                            collapse-content
                            border-[#0000001a]
                            border-t-1
                            border-b-1
                            bg-[#00000032]
                        `)}
                    >
                        { elem.content }
                    </div>
                </div>
            )}
        </div>
    );
}