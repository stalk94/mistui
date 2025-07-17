type HeroProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    styleContent?: React.CSSProperties;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
    classNameContent?: React.HTMLAttributes<HTMLDivElement>['className'];
    fontImageOverlaySrc?: string;
};
declare const Hero: import("react").ForwardRefExoticComponent<HeroProps & import("react").RefAttributes<HTMLDivElement>>;
export default Hero;
