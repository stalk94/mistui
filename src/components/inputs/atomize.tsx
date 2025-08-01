import { forwardRef, useMemo } from 'react';
import type { LabelProps, LabelTopProps } from './type';
import { useTheme } from '../theme';
import clsx from 'clsx';
import { cs } from '../hooks/cs';
import { Typography } from '../text';


export const LabelTop = ({ children, style, size, required  }: LabelTopProps) => {
    const getSize = size ? `input-${size}` : 'input-sm sm:input-md md:input-md lg:input-lg xl:input-lg';


    return(
        <label 
            style={style}
            className={`
                flex
                ${getSize}
            `}
        >
            <span className='brightness-50'>
                { children }
            </span>
            { required &&
                <div className='ml-1 text-red-600'>
                    *
                </div>
            }
        </label>
    );
}
export const ValidatorBottomLabel = ({ children }) => {
    return (
        <Typography
            as='span'
            variant='caption'
            color='error'
            className='m-0.5'
        >
            {children}
        </Typography>
    )
}


export const FormWrapper = forwardRef<HTMLDivElement, LabelProps>(function FormWrapper(
    {
        children,
        color = 'neutral',
        labelLeft,
        labelRight,
        labelTop,
        size,
        error,
        required,
        disabledVisibility,
        style = {},
        className,
        variant = 'outline',
        shadow,
        ...props
    },
    ref
) {
    const { autosizes, shadows, variants, plugins } = useTheme();
    const getSize = size ? `input-${size}` : autosizes.input;
    const { borderColor, ...filteredStyle } = style;
    

    const borderVariant = useMemo(()=> {
        if (variant === 'dash') return { 
            borderStyle: 'dashed'
        }
        else if (variant === 'outline') return {
            borderStyle: 'solid'
        }
        else return {};
    }, [variant, style]);
    const getStyleEvent = useMemo(()=> {
        if (error) return { borderColor:  variants.error };
        else return {};
    }, [error]);
    const getStyle = useMemo(() => {
        if (disabledVisibility) return {};
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        const colorContrast = plugins.contrast((variants[color] ?? color));

        let st = {
            ...style,
            backgroundColor: (variant !== 'ghost') && (variants[color] ?? color),
            color: (variant === 'dash' || variant === 'outline')
                ? (variants[color] ?? color)
                : colorContrast,
            borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.65),
            borderStyle: variant === 'dash' ? 'dashed' : 'solid',
        }

        
        if (color === 'neutral') st.borderColor = plugins.lighten(plugins.alpha(st.borderColor, 1), 0.2);
        if (variant === 'ghost') {
            st.borderWidth = 0;
            st.backgroundColor = 'inherit';
        }
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: plugins.alpha((variants[color] ?? color) ?? inlneBg, 0.05) ?? 'inherit'
            };
        }


        return st;
    }, [style, color, variant]);
    

    return (
        <section className={clsx('formwrap', className)} style={filteredStyle}>
            {/* верхний label */}
            {labelTop && (
                <LabelTop size={size} required={required}>
                    { labelTop }
                </LabelTop>
            )}

            <div
                ref={ref}
                style={{
                    boxShadow: shadows[shadow],
                    ...getStyle,
                    ...borderVariant,
                    ...getStyleEvent
                }}
                className={clsx(
                    disabledVisibility
                        ? [
                            getSize,
                            'flex'
                        ]
                        : [
                              'input',
                              'w-full',
                              'flex',
                              'input-focus',
                              getSize
                          ]
                )}
                { ...props }
            >
                 {/* [label][---] левый label */}
                { labelLeft &&
                    <span 
                        className={cs(`
                            label 
                            ${disabledVisibility ? 'mr-4' : ''}
                        `)}
                        style={{ 
                            height: '100%', 
                            marginInlineEnd: (!disabledVisibility && (size==='xs'||size==='sm')) && 8
                        }}
                    >
                        { labelLeft }
                    </span>
                }

                { children }

                {/* [---][label] правый label */}
                { labelRight &&
                    <span 
                        style={{ 
                            height: '100%', 
                            marginInlineStart: (!disabledVisibility && (size==='xs'||size==='sm')) && 4 
                        }}
                        className={cs(`
                            label
                            ${disabledVisibility && 'ml-4'}
                        `)}
                    >
                        { labelRight }
                    </span>
                }
            </div>

            {/* error massages */}
            { error && error}
        </section>
    );
});


export default FormWrapper;