import { useCache } from './inputs/hooks';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export type AccordionProps = {
    items: {
        /** label аккордеона */
        title: React.ReactElement
        /** тело аккордеона */
        content: React.ReactElement
    }[] 
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    /** массив индексов развернутых вкладок [0, 1, 2 ...] */
    activeIndexs?: number[]
    /** стили для одного раздела акордеона (header + content) !только в свернутом состоянии */
    tabStyle?: React.CSSProperties
    headerStyle?: React.CSSProperties
}


export default function Acordeon({
    items,
    size,
    activeIndexs
}: AccordionProps) {
    const sizeText = size ? `text-${size}` : 'text-sm sm:text-base md:text-base lg:text-lg xl:text-lg';
    const [active, setActive] = useCache(activeIndexs ?? 0);

    
    return(
        <div style={{ borderRadius: 6 }}
            className={`
                join 
                join-vertical 
                bg-base-100
                ${sizeText}
            `}
        >
            {items.map((elem, index) =>
                <div 
                    onClick={() => setActive(index)}
                    key={index} 
                    className={`
                        collapse 
                        join-item 
                        border-neutral-700 
                        border
                        ${active === index && 'collapse-open'}
                    `}
                >
                    {/* title */}
                    <div
                        className={`
                            collapse-title 
                            p-1
                            font-semibold
                            flex 
                            justify-between 
                            items-center
                        `}
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
                    <div style={{ padding: active !== index ? 0 : 4 }}
                        className={`
                            collapse-content
                            border-[#0000001a]
                            border-t-1
                            border-b-1
                            bg-[#0000001a]
                        `}
                    >
                        { elem.content }
                    </div>
                </div>
            )}
        </div>
    );
}