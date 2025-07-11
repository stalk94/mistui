import { forwardRef } from 'react';
import type { LabelProps, LabelTopProps } from './type';
import { useTheme } from '../theme';
import React from 'react';
import clsx from 'clsx';


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
        labelLeft,
        labelRight,
        labelTop,
        colorBorder,
        size,
        validator,
        required,
        disabledVisibility,
        style,
        styleInput,
        className,
        ...props
    },
    ref
) {
    const { styles, autosizes } = useTheme();
    const getSize = size ? `input-${size}` : autosizes.input;


    return (
        <section className={clsx('formwrap', className)} style={style}>
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
                    borderColor: styles?.input?.borderColor,
                    borderStyle: styles?.input?.borderStyle,
                    borderWidth: !disabledVisibility && styles?.input?.borderWidth,
                    backgroundColor: !disabledVisibility && styles?.input?.backgroundColor,
                    ...styleInput,
                }}
                className={clsx(
                    disabledVisibility
                        ? getSize
                        : [
                              'input',
                              'w-full',
                              'flex',
                              'input-focus',
                              `input-${colorBorder}`,
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