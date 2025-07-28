import { Fragment, useMemo, useState } from "react";
import { useTheme } from './theme';
import type { Variants } from './theme/default';


type TabsProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick' | 'style'> & {
    activeIndexTab?: number
    variant?: 'box' | 'border' | 'lift'
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    color?: Variants | (string & {})
    items: {
        label: string | React.ReactNode
        content: string | React.ReactNode
    }[]
    styleTab?: React.CSSProperties
    styleContent?: React.CSSProperties
}



export default function Tabs({ 
    activeIndexTab,
    variant = 'lift',
    size,
    shadow,
    style,
    color,
    styleTab,
    styleContent,
    className,
    items,
    ...props
}:  TabsProps) {
    const { styles, shadows, autosizes, variants } = useTheme();
    const [curActive, setCurActive] = useState(activeIndexTab ?? 0);
    const sizeText = (size && size !== 'auto') ? `text-${size}` : autosizes.text;

    const borderStyle = useMemo(()=> {
        if (variant === 'lift') {
            const borderColor = (styleContent?.borderColor 
                ?? styleTab?.borderColor) 
                    ?? styles?.tabs?.borderColor;

            return({
                borderColor: (variants[color] ?? color) 
                    ?? borderColor
            });
        }
        else return({});
    }, [variant, style, styleTab, styleContent, color]);
    

    return (
        <div 
            role="tablist" 
            className={`
                tabs
                tabs-${size}
                tabs-${variant}
                ${className && className}
            `}
            style={{
                boxShadow: shadows[shadow],
                ...style
            }}
            { ...props }
        >
            {items.map((tabData, index)=>
                <Fragment key={index}>

                    {/* label */}
                    <input
                        type="radio"
                        onClick={()=> setCurActive(index)}
                        className={`tab`}
                        readOnly
                        checked={curActive === index}
                        style={{
                            ...styleTab,
                            ...borderStyle,
                        }}
                        aria-label={tabData.label}
                    />

                    {/* контент вкладки */}
                    { curActive === index &&
                        <div 
                            className={`
                                tab-content 
                                p-2
                                ${variant === 'lift' && 'border-base-300'}
                                rounded-[4px]
                                ${sizeText}
                            `}
                            style={{
                                ...styleContent, 
                                ...borderStyle
                            }}
                        >
                            { tabData.content }
                        </div>
                    }
                </Fragment>
            )}
        </div>
    );
}