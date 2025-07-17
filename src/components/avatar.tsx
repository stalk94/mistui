import { useMemo } from 'react';
import { useTheme } from './theme';
import { createGradientStyle } from './hooks';

export type AvatarProps = {
    children?: string | React.ReactElement
    size?: 'auto' | 'xss' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    src?: string
    alt?: string
}
export type AvatarsGroupProps = {
    size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    style?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    items: Omit<AvatarProps, 'size' | 'className' | 'style'>[]
}


const sizeTable = {
    xss: 'w-6',
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
    color,
    className
}: AvatarProps) {
    const { autosizes, variants, plugins } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.avatar;
    const sizeText =  sizeTableText[size] ?? 'text-lg sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl';
    
    
    const colorContrast = useMemo(() => {
        return plugins.contrast((variants[color] ?? color));
    }, [style, color]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        let st = {
            ...style,
            backgroundColor: src && (inlneBg ?? (variants[color] ?? color)),
            color: (src)
                ? (variants[color] ?? color)
                : colorContrast
        }

        return st;
    }, [style, color, src]);
    

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
                    style={getStyle}
                    className={`
                        bg-gray-600 
                        text-neutral-content 
                        ${getSize}
                        rounded-full
                        ${className}
                    `}
                >
                    <span 
                        className={`${sizeText}`}
                    >
                        { children }
                    </span>
                </div>
            }
            {src &&
                <div
                    style={getStyle}
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
                    { ...item }
                    size={size}
                    className={className}
                    key={index}
                />
            )}
        </div>
    );
}