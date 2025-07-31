import Button from './button';
import type { FilterToggleButtonGroupProps } from './type';
import { useCallback, useEffect } from 'react';
import { FormWrapper } from '../inputs/atomize';
import { useCache } from '../hooks';
import { Fragment } from 'react';
import { useUids } from '../hooks/uuid';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';
import { colord } from 'colord';


// ! reset button style
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
    fullWidth,
    ...props
}: FilterToggleButtonGroupProps) {
    const { plugins, variants } = useTheme();
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
            ? plugins.mixers.background(inlneBg, 'hover')
            : plugins.mixers.background(curVariant, 'hover')
        );
        else if (key === 'border') return (inlneBg
            ? plugins.mixers.border(inlneBorder, 'hover')
            : plugins.mixers.border(curVariant, 'hover')
        );
        else return (inlneTxt
            ? colord(inlneTxt).alpha(0.6).toRgbString()
            : plugins.contrast((inlneBg ?? inlneBorder) ?? curVariant)
        );
    }, [style, color, variant, props.isSoft]);
    const isSelected = useCallback((opt: any) => {
        const getId = (v: any) => (typeof v !== 'object' || v === null) ? v : v.id;
        return getId(opt) === getId(select);
    }, [select]);
    useEffect(() => {
        if (value == null) return;

        const isPrimitive = (v: any) => typeof v !== 'object' || v === null;

        const getId = (v: any) => (isPrimitive(v) ? v : v?.id);

        const valueId = getId(value);
        const selectId = getId(select);

        if (valueId !== selectId) {
            setSelect(value);
        }
    }, [value]);


    return(
        <FormWrapper
            size={size}
            disabledVisibility
            { ...props }
        >
            <form 
                className={`
                    filter 
                    flex-wrap 
                    gap-[0.25rem] 
                    over
                    ${fullWidth ? 'w-full' : ''}
                `}
            >
                {/* select button */}
                { select &&
                    <input
                        className={cs(`
                            btn 
                            ${getSize}
                            btn-square
                            hover:border-neutral-500
                            hover:bg-[var(--btn-color)]
                            bg-[#0a0a0a3a]
                        `)}
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
                            checked={isSelected(opt)}
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