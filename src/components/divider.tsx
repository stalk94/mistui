type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;
export type DividerProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?: string
    position?: 'start' | 'end'
    isHorizontal?: boolean
    variant?: 'dashed' | 'dotted' 
    style?: React.CSSProperties
    className?: Props['className'] 
}


export default function Divider({ 
    children,
    size, 
    color, 
    position, 
    isHorizontal, 
    style,
    variant,
    className
}: DividerProps) {
    const getSize = size ? `text-${size}` : 'text-xs sm:text-sm md:text-sm lg:text-sm xl:text-md';

    return (
        <div 
            className={`
                divider 
                divider-${position}
                ${isHorizontal && 'divider-horizontal'}
                ${getSize} 
                text-neutral-500
                ${className && className}
            `}
            style={{
                borderColor: color && color,        // из темы
                borderStyle: variant,
                ...style
            }}
        >
            { children }
        </div>
    )
}