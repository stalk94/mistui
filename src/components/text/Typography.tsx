import { forwardRef } from 'react';
import { TypographyComponent, typographyVariants, BaseTypographyProps, PolymorphicComponentProps, PolymorphicRef } from './types';
import clsx from 'clsx';


const Typography = forwardRef(
    <T extends React.ElementType = 'p'>(
        {
            as,
            variant = 'body1',
            classNames,
            children,
            fontStyle = 'normal',
            fontFamily,
            ...rest
        }: PolymorphicComponentProps<T, BaseTypographyProps>,
        ref?: PolymorphicRef<T>
    ) => {
        const Component = as || 'p';
        

        return (
            <Component
                className={clsx(
                    typographyVariants[variant],
                    fontStyle === 'italic' ? 'italic' : 'not-italic',
                    fontFamily && `font-[${fontFamily}]`,
                    classNames
                )}
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