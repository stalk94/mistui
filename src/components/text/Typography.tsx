import { forwardRef } from 'react';
import { TypographyComponent, BaseTypographyProps, PolymorphicComponentProps, PolymorphicRef } from './types';
import clsx from 'clsx';
import { useTheme } from '../theme';



const shadowse = {
    xs: '2xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
}
const shadows = {
    xs: '1px 1px 1px',
    sm: '1px 1px 2px',
    lg: '2px 2px 5px',
    md: '2px 2px 6px',
    xl: '3px 3px 8px'
}
const letterSpacingMap: Record<
    | 'tighter'
    | 'tight'
    | 'normal'
    | 'wide'
    | 'wider'
    | 'widest',
    string
> = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
}


const Typography = forwardRef(<T extends React.ElementType = 'p'>(
        {
            as,
            variant = 'body2',
            color = 'primary',
            className,
            children,
            fontStyle = 'normal',
            fontFamily,
            fontSize,
            shadow,
            colorShadow,
            tracking,
            style = {},
            ...rest
        }: PolymorphicComponentProps<T, BaseTypographyProps>,
        ref?: PolymorphicRef<T>
    ) => {
        const Component = as || 'p';
        const { variants, typography } = useTheme();
        const curShadow = shadows[shadow] ? `text-shadow-${shadows[shadow]}` : '';
        //const curColorShadow = colorShadow ? `text-shadow-[${colorShadow}]` : 'text-shadow-[#161616]';
        const shadowValue = shadows[shadow]; // например '1px 1px 2px'
        const textShadow = shadowValue
            ? `${shadowValue} ${colorShadow || '#161616'}`
            : undefined;

       
        return (
            <Component
                className={clsx(
                    typography[variant],
                    fontStyle === 'italic' ? 'italic' : 'not-italic',
                    curShadow,
                    className,
                )}
                style={{ 
                    fontFamily: fontFamily ? `"${fontFamily}", sans-serif` : undefined,
                    fontSize: fontSize,
                    color: variants[color] ?? color,
                    letterSpacing: letterSpacingMap[tracking] ? letterSpacingMap[tracking] : tracking,
                    textShadow,
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