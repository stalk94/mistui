import { forwardRef } from 'react';
import { useTheme } from './theme';

const testUrl = 'https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp';
type HeroProps = {
    children: React.ReactNode
    style?: React.CSSProperties
    styleContent?: React.CSSProperties
    className?: React.HTMLAttributes<HTMLDivElement>['className']
    classNameContent?: React.HTMLAttributes<HTMLDivElement>['className']
    fontImageOverlaySrc?: string
}


const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
    {
        children,
        className,
        classNameContent,
        style = {},
        styleContent = {},
        fontImageOverlaySrc,
        ...props
    }, 
    ref
) {
    const { } = useTheme();


    return(
        <div
            ref={ref}
            className={`hero ${className && className}`}
            style={{
                backgroundImage: fontImageOverlaySrc && `url(${fontImageOverlaySrc})`,
                ...style
            }}
            { ...props }
        >
            { fontImageOverlaySrc && <div className="hero-overlay"/> }

            <div 
                className={`hero-content ${classNameContent && classNameContent}`}
                style={styleContent}
            >
                { children }
            </div>
        </div>
    );
});


export default Hero;