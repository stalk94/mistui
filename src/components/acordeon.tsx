import { useCache } from './hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useTheme } from './theme';


export type AccordionProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick'> & {
    items: {
        /** label аккордеона */
        title: React.ReactElement | string
        /** тело аккордеона */
        content: React.ReactElement
    }[] 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
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
    style,
    styleTitle,
    className,
    classNameTitle
}: AccordionProps) {
    const { styles, autosizes } = useTheme();
    const sizeText = size ? `text-${size}` : autosizes.text;
    const [active, setActive] = useCache(activeIndexs ?? 0);
    
    
    return(
        <div 
            style={{ 
                borderRadius: 6,
                backgroundColor: styles?.accordeon?.backgroundColor,
                ...style
            }}
            className={`
                join 
                join-vertical 
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
                    style={{
                        borderColor: styles?.input?.borderColor,
                    }}
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
                            padding: active !== index ? 0 : 4
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