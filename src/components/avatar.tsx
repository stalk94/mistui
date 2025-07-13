import { useTheme } from './theme';

type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;
export type AvatarProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: React.CSSProperties
    className?: Props['className']
    src?: string
    alt?: string
}
type ItemAvatarGroup = Omit<AvatarProps, 'size' | 'className' | 'style'>;
export type AvatarsGroupProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: React.CSSProperties
    className?: Props['className']
    items: ItemAvatarGroup[]
}

const sizeTable = {
    xs: 'w-8',
    sm: 'w-16',
    md: 'w-20',
    xl: 'w-32'
}


export default function Avatar({
    children,
    src,
    size,
    alt,
    style,
    className
}: AvatarProps) {
    const { styles, autosizes } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.avatar;


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
                    <span className='text-xl sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl'>
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