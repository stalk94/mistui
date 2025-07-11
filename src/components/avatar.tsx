
type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className'>;
export type AvatarProps = {
    children?: string | React.ReactElement
    size?: 'xs' | 'sm' | 'md' | 'lg'
    style?: React.CSSProperties
    className?: Props['className'] 
    src?: string
    alt?: string
}


export default function Avatar({ 
    children,
    src,
    size, 
    alt,
    style,
    className
}: AvatarProps) {
    const getSize = size ? size : 'w-8 sm:w-16 md:w-20 lg: xl:w-32';

    return (
        <div 
            className={`
                avatar
            `}
        >
            <div 
                className={`
                    rounded
                    ${getSize}
                `}
            >
                {src &&
                    <img 
                        src={src} 
                        alt={alt}
                        onError={(e)=> console.warn(src, 'error url path')}
                    />
                }
            </div>
        </div>
    )
}