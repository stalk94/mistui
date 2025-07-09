import type { FilterToggleButtonGroupProps } from './type';
import { FormWrapper } from './atomize';
import { useCache } from './hooks';
import { Fragment } from 'react';


export default function ToggleButtonFiltreGroup({
    options,
    value,
    onChange,
    valueReset,
    size,
    name,
    color,
    onlyId,
    ...props
}: FilterToggleButtonGroupProps) {
    const getSize = size ? `btn-${size}` : 'btn-sm sm:btn-md md:btn-md lg:btn-lg xl:btn-lg';
    const [select, setSelect] = useCache(value);

    const handleChange = (current: string | number | any) => {
        const cur = current?.id !== undefined ? current?.id : current;
        setSelect(current);
        onChange?.(onlyId ? cur : current);
    }


    return(
        <FormWrapper
            size={size}
            disabledVisibility
            { ...props }
        >
            <form className="filter w-full flex-wrap gap-[0.25rem] over">
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
                        { (select === undefined) && 
                            <button 
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
                        { opt === select && 
                            <button style={{pointerEvents:'none'}}
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