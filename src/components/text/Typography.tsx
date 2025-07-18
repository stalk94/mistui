import { forwardRef } from 'react';
import { TypographyComponent, typographyVariants, BaseTypographyProps, PolymorphicComponentProps, PolymorphicRef } from './types';
import clsx from 'clsx';


const shadows = {
    xs: '2xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
}


const Typography = forwardRef(
    <T extends React.ElementType = 'p'>(
        {
            as,
            variant = 'body1',
            color,
            className,
            children,
            fontStyle = 'normal',
            fontFamily,
            fontSize,
            shadow,
            colorShadow,
            style = {},
            ...rest
        }: PolymorphicComponentProps<T, BaseTypographyProps>,
        ref?: PolymorphicRef<T>
    ) => {
        const Component = as || 'p';
        const curShadow = shadows[shadow] ? `text-shadow-${shadows[shadow]}` : '';
        const curColorShadow = colorShadow ? `text-shadow-[${colorShadow}]` : 'text-shadow-[#161616]';
        

        return (
            <Component
                className={clsx(
                    typographyVariants[variant],
                    fontStyle === 'italic' ? 'italic' : 'not-italic',
                    curShadow,
                    curColorShadow,
                    className
                )}
                style={{ 
                    fontFamily: fontFamily ? `"${fontFamily}", sans-serif` : undefined,
                    fontSize: fontSize,
                    ...style
                }}
                ref={ref}
                { ...rest }
            >
                { children }
            </Component>
        );
    }
) as unknown as TypographyComponent;



Typography.displayName = 'Typography';
export default Typography;