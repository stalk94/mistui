import { forwardRef, useMemo, useCallback } from 'react';
import type { LabelProps, LabelTopProps } from './type';
import { useTheme } from '../theme';
import React from 'react';
import clsx from 'clsx';
import { createGradientStyle } from '../hooks';
import { colord } from 'colord';


export const LabelTop = ({ children, style, size, required,  }: LabelTopProps) => {
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
export const ValidatorBottomLabel =({ children, 'data-id': dataId })=> {
    return(
        <span
            style={{
                marginTop: 0
            }} 
            className="validator-hint"
        >
            { children }
        </span>
    )
}


export const FormWrapper = forwardRef<HTMLDivElement, LabelProps>(function FormWrapper(
    {
        children,
        color,
        labelLeft,
        labelRight,
        labelTop,
        size,
        validator,
        required,
        disabledVisibility,
        style = {},
        className,
        variant,
        shadow,
        ...props
    },
    ref
) {
    const { styles, autosizes, shadows, variants, plugins, mixers } = useTheme();
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
    }, [variant, style, styles]);
    const getGradient = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const curVariant = variants[color];

        return createGradientStyle(inlneBg ?? curVariant);
    }, [style, color, variant]);
    const getStyle = useMemo(() => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;

        const fontColorTheme = styles?.input?.fontColor;
        const colorContrast = plugins.contrast((variants[color] ?? color));

        let st = {
            ...style,
            backgroundColor: (variant !== 'ghost') && (variants[color] ?? color),
            color: (variant === 'dash' || variant === 'outline')
                ? (variants[color] ?? color) ?? fontColorTheme
                : colorContrast,
        }

        if (variant === 'ghost') st.borderWidth = 0;
        if ((variant === 'dash' || variant === 'outline')) {
            const { backgroundColor, ...rest } = style;

            st = {
                ...rest,
                ...st,
                backgroundColor: plugins.alpha((variants[color] ?? color) ?? inlneBg, 0.05) ?? 'inherit',
                borderColor: plugins.alpha((variants[color] ?? color) ?? inlneBorder ?? inlneBg, 0.6),
                borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            };
        }


        return st;
    }, [style, color, variant]);
    const getColorHover = useCallback((key: 'backgroundColor' | 'color' | 'border') => {
        const inlneBg = style?.backgroundColor;
        const inlneBorder = style?.borderColor;
        const inlneTxt = style?.color;
        const curVariant = variants[color];

        if (key === 'backgroundColor') return (inlneBg
            ? mixers.button.background(inlneBg, 'hover')
            : mixers.button.background(curVariant, 'hover')
        );
        else if (key === 'border') return (inlneBg
            ? mixers.button.border(inlneBorder, 'hover')
            : mixers.button.border(curVariant, 'hover')
        );
        else return (inlneTxt
            ? plugins.contrast(inlneTxt)
            : plugins.contrast((inlneBg ?? inlneBorder) ?? curVariant)
        );
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
                }}
                className={clsx(
                    disabledVisibility
                        ? getSize
                        : [
                              'input',
                              'w-full',
                              'flex',
                              'input-focus',
                              getSize,
                              validator && 'validator',
                          ]
                )}
                { ...props }
            >
                 {/* [label][---] левый label */}
                { labelLeft &&
                    <span 
                        style={{ 
                            height: '100%', 
                            marginInlineEnd: (!disabledVisibility && (size==='xs'||size==='sm')) && 8
                        }}
                        className={`
                            label 
                            ${disabledVisibility && 'mr-4'}
                        `}
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
                        className={`
                            label
                            ${disabledVisibility && 'ml-4'}
                        `}
                    >
                        { labelRight }
                        { required && !labelTop &&
                            <div className='ml-1 text-red-600'>
                                *
                            </div>
                        }
                    </span>
                }
            </div>
        </section>
    );
});


export default FormWrapper;