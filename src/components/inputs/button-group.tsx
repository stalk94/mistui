import type { ToggleButtonGroupProps } from './type';
import { FormWrapper } from './atomize';
import { useCache } from './hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useCallback } from 'react';


export default function ToggleButtonGroup({
    items,
    value,
    onChange,
    size,
    color,
    onlyId,
    variant,
    ...props
}: ToggleButtonGroupProps) {
    const { styles, mixers } = useTheme();
    const uid = useUids('button-group');
    const getSize = size ? `btn-${size}` : 'btn-sm sm:btn-md md:btn-md lg:btn-lg xl:btn-lg';
    const [select, setSelect] = useCache(value);

    const handleChange = (current: string | number | any) => {
        setSelect(current);
        const cur = current?.id !== undefined ? current?.id : current;
        onChange?.(onlyId ? cur : current);
    }
    const getColorHover = useCallback((key: 'backgroundColor' | 'color') => {
        const inlneBg = props?.style?.background ?? props?.style?.backgroundColor;
        const inlneTxt = props?.style?.color;
        const curVariant = styles.button[variant];

        if (key === 'backgroundColor') return (inlneBg
            ? mixers.button.background(inlneBg, 'hover')
            : mixers.button.background(curVariant, 'hover')
        );
        else return (inlneTxt
            ? mixers.button.color(inlneTxt, 'hover')
            : mixers.button.color(curVariant, 'hover')
        );
    }, [props?.style, variant]);
    

    return (
        <FormWrapper
            size={size}
            disabledVisibility
            { ...props }
        >
            <style>
                {`
                    button[data-id="${uid}"]:hover {
                        color: ${getColorHover('color')};
                        backgroundColor: ${getColorHover('backgroundColor')};
                    }
                `}
            </style>

            <div className="join flex-wrap w-full gap-y-[1px]">
                {items.map((opt, index) => (
                    <button
                        data-id={uid}
                        key={opt?.id ?? index}
                        className={`
                            join-item 
                            btn 
                            flex-auto
                            text-[var(--text-primary-content)]
                            ${getSize}
                            ${select === opt && 'btn-select'}
                        `}
                        onClick={() => handleChange(opt)}
                        children={
                            (opt?.id !== undefined) 
                                ? <>{ opt.label }</>
                                : opt
                        }
                    />
                ))}
            </div>
        </FormWrapper>
    );
}