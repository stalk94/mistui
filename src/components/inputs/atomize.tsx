import { forwardRef, useMemo } from 'react';
import type { LabelProps, LabelTopProps } from './type';
import { useTheme } from '../theme';
import React from 'react';
import clsx from 'clsx';
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
        ...props
    },
    ref
) {
    const { styles, autosizes, variants } = useTheme();
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
    const colorBorder = useMemo(() => {
        let propsColor = (variants[color] ?? color) ?? style.borderColor;

        propsColor = propsColor 
            ? colord(propsColor).alpha(0.5).toRgbString() 
            : styles?.input?.borderColor;
        
        return propsColor;
    }, [color, style, styles]);
    const colorBg = useMemo(() => {
        let propsColor = (variants[color] ?? color) ?? style.backgroundColor;

        propsColor = propsColor 
            ? colord(propsColor).alpha(0.1).toRgbString() 
            : styles?.input?.backgroundColor;
        
        return propsColor;
    }, [color, style, styles]);


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
                    color: styles?.input?.fontColor,
                    borderColor: colorBorder ?? styles?.input?.borderColor,
                    backgroundColor: !disabledVisibility && colorBg,
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