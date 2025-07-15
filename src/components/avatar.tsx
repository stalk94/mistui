import { useTheme } from './theme';

export type AvatarProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    src?: string
    alt?: string
}
export type AvatarsGroupProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    items: Omit<AvatarProps, 'size' | 'className' | 'style'>[]
}


const sizeTable = {
    xs: 'w-8',
    sm: 'w-16',
    md: 'w-20',
    lg: 'w-24',
    xl: 'w-32'
}
const sizeTableText = {
    xs: 'text-lg',
    sm: 'text-xl',
    md: 'text-4xl',
    lg: 'text-4xl',
    xl: 'text-4xl'
}


export default function Avatar({
    children,
    src,
    size,
    alt,
    style,
    className
}: AvatarProps) {
    const { autosizes } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.avatar;
    const sizeText =  sizeTableText[size] ?? 'text-lg sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl';
    

    return (
        <div
            style={{width: 'fit-content'}}
            className={`
                avatar 
                ${(!src && children) && 'avatar-placeholder'}
            `}
        >
            {!src &&
                <div
                    style={style}
                    className={`
                        bg-gray-600 
                        text-neutral-content 
                        ${getSize}
                        rounded-full
                        ${className}
                    `}
                >
                    <span 
                        className={`
                            ${sizeText}
                        `}
                    >
                        { children }
                    </span>
                </div>
            }
            {src &&
                <div
                    style={style}
                    className={`
                        rounded
                        ${getSize}
                        ${className}
                    `}
                >
                    <img
                        src={src}
                        alt={alt}
                        onError={(e) => console.warn(src, 'error url path')}
                    />
                </div>
            }
        </div>
    );
}


export function AvatarGroup({
    size,
    style,
    className,
    items
}: AvatarsGroupProps) {

    return(
        <div 
            style={style}
            className={`
                avatar-group 
                -space-x-6
            `}
        >
            { items && items.map((item, index)=> 
                <Avatar 
                    size={size}
                    className={className}
                    key={index}
                    { ...item }
                />
            )}
        </div>
    );
}