export type DividerProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    color?: string
    position?: 'start' | 'end'
    isHorizontal?: boolean
    style?: React.CSSProperties
}


export default function Divider({ children, size, color, position, isHorizontal, style }: DividerProps) {
    const getSize = size ? `text-${size}` : 'text-xs sm:text-sm md:text-sm lg:text-sm xl:text-md';

    return (
        <div 
            className={`
                divider 
                divider-${position}
                ${isHorizontal && 'divider-horizontal'}
                ${getSize} 
                text-neutral-500
            `}
            style={style}
        >
            { children }
        </div>
    )
}