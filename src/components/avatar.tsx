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
    shadow?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
    variant?: 'base' | 'square' | 'round'
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
    size = 'auto',
    alt,
    style,
    color,
    className,
    variant = 'base',
    shadow,
    ...props
}: AvatarProps) {
    const { autosizes, variants, plugins, shadows } = useTheme();
    const getSize = sizeTable[size] ? sizeTable[size] : autosizes?.avatar;
    const sizeText =  sizeTableText[size] ?? 'text-lg sm:text-xl md:text-4xl lg:text-4xl xl:text-4xl';
    
    
    const colorContrast = useMemo(() => {
        return plugins.contrast(style?.backgroundColor ?? (variants[color] ?? color));
    }, [style, color]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;

        let st = {
            ...style,
            boxShadow: shadows[shadow],
            backgroundColor: !src && (inlneBg ?? (variants[color] ?? color)),
            color: (src)
                ? (variants[color] ?? color)
                : colorContrast
        }

        return st;
    }, [style, color, src, shadow]);
    

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
                        ${className}
                        ${variant === 'square' ? 'rounded' : ''}
                        ${variant === 'round' ? 'rounded-full' : ''}
                    `}
                    { ...props }
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
                        ${variant === 'square' ? 'rounded' : ''}
                        ${variant === 'round' ? 'rounded-full' : ''}
                        ${getSize}
                        ${className}
                    `}
                    { ...props }
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
                items-center
            `}
        >
            { items && items.map((item, index)=> 
                <Avatar 
                    size={size}
                    { ...item }
                    className={className}
                    key={index}
                />
            )}
        </div>
    );
}