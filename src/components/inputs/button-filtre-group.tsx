import type { FilterToggleButtonGroupProps } from './type';
import { useCallback } from 'react';
import { FormWrapper } from './atomize';
import { useCache } from './hooks';
import { Fragment } from 'react';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';


export default function ToggleButtonFiltreGroup({
    options,
    value,
    onChange,
    valueReset,
    size,
    name,
    color,
    onlyId,
    variant,
    style,
    ...props
}: FilterToggleButtonGroupProps) {
    const { styles, mixers } = useTheme();
    const uid = useUids('button-group');
    const getSize = size ? `btn-${size}` : 'btn-sm sm:btn-md md:btn-md lg:btn-lg xl:btn-lg';
    const [select, setSelect] = useCache(value);

    const handleChange = (current: string | number | any) => {
        const cur = current?.id !== undefined ? current?.id : current;
        setSelect(current);
        onChange?.(onlyId ? cur : current);
    }
    const getColorHover = useCallback((key: 'backgroundColor' | 'color') => {
        const inlneBg = style?.background ?? style?.backgroundColor;
        const inlneTxt = style?.color;
        const curVariant = styles.button[variant];

        if (key === 'backgroundColor') return (inlneBg
            ? mixers.button.background(inlneBg, 'hover')
            : mixers.button.background(curVariant, 'hover')
        );
        else return (inlneTxt
            ? mixers.button.color(inlneTxt, 'hover')
            : mixers.button.color(curVariant, 'hover')
        );
    }, [style, variant]);


    return(
        <FormWrapper
            size={size}
            disabledVisibility
            { ...props }
        >
            <form className="filter w-full flex-wrap gap-[0.25rem] over">
                { select &&
                    <input
                        className={`
                            btn 
                            ${getSize}
                            btn-square
                            hover:border-neutral-500
                            hover:bg-[var(--btn-color)]
                            bg-[#0a0a0a3a]
                        `}
                        style={{
                            transition: 'background-color 0.3s ease, border-color 0.3s ease',
                        }}
                        type="reset"
                        value="×"
                        onClick={()=> handleChange(valueReset)}
                    />
                }
                <style>
                    {`
                        button[data-id="${uid}"]:hover {
                            color: ${getColorHover('color')};
                            backgroundColor: ${getColorHover('backgroundColor')};
                        }
                    `}
                </style>

                {options.map((opt, index) =>
                    <Fragment key={opt?.id ?? index}>
                        <input
                            className='hidden'
                            readOnly
                            type="radio"
                            checked={opt === select}
                            name={name ?? 'filters group'}
                            aria-label={
                                (opt.id !== undefined)
                                    ? opt.label
                                    : opt
                            }
                        />
                        {(select === undefined) && 
                            <button 
                                data-id={uid}
                                onClick={() => handleChange(opt)}
                                className={`
                                    btn
                                    flex-auto
                                    ${getSize}
                                    text-[var(--text-primary-content)]
                                `}
                            >
                                {(opt.id !== undefined)
                                    ? opt.label
                                    : opt
                                }
                            </button> 
                        }
                        {(opt === select) && 
                            <button 
                                style={{pointerEvents:'none'}}
                                className={`
                                    btn
                                    ${getSize}
                                    text-[var(--text-primary-content)]
                                `}
                            >
                                {(opt.id !== undefined)
                                    ? opt.label
                                    : opt
                                }
                            </button> 
                        }
                    </Fragment>
                )}
            </form>
        </FormWrapper>
    );
}