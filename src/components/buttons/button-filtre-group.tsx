import Button from './button';
import type { FilterToggleButtonGroupProps } from './type';
import { useCallback } from 'react';
import { FormWrapper } from '../inputs/atomize';
import { useCache } from '../hooks';
import { Fragment } from 'react';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { colord } from 'colord';


export default function ToggleButtonFiltreGroup({
    items,
    value,
    onChange,
    valueReset,
    size,
    name,
    onlyId,
    variant,
    color,
    style = {},
    styleButtonReset = {},
    ...props
}: FilterToggleButtonGroupProps) {
    const { plugins, variants, mixers } = useTheme();
    const uid = useUids('button-group');
    const getSize = size ? `btn-${size}` : 'btn-sm sm:btn-md md:btn-md lg:btn-lg xl:btn-lg';
    const [select, setSelect] = useCache(value);


    const handleChange = (current: string | number | any) => {
        const cur = current?.id !== undefined ? current?.id : current;
        setSelect(current);
        onChange?.(onlyId ? cur : current);
    }
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
            ? colord(inlneTxt).alpha(0.6).toRgbString()
            : plugins.contrast((inlneBg ?? inlneBorder) ?? curVariant)
        );
    }, [style, color, variant, props.isSoft]);


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
                            ...styleButtonReset
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
                
                {/* buttons */}
                {items.map((opt, index) =>
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
                            <Button 
                                data-id={uid}
                                onClick={() => handleChange(opt)}
                                variant={variant}
                                color={color}
                                size={size}
                                className="flex-auto"
                            >
                                {(opt.id !== undefined)
                                    ? opt.label
                                    : opt
                                }
                            </Button> 
                        }
                        {(opt === select) && 
                            <Button 
                                style={{ pointerEvents:'none' }}
                                variant={variant}
                                color={color}
                                size={size}
                            >
                                {(opt.id !== undefined)
                                    ? opt.label
                                    : opt
                                }
                            </Button> 
                        }
                    </Fragment>
                )}
            </form>
        </FormWrapper>
    );
}