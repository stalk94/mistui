import Button from './button';
import type { ToggleButtonGroupProps } from './type';
import { FormWrapper } from '../inputs/atomize';
import { useCache } from '../hooks';
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
    const [select, setSelect] = useCache(value);

    const handleChange = (current: string | number | any) => {
        setSelect(current);
        const cur = current?.id !== undefined ? current?.id : current;
        onChange?.(onlyId ? cur : current);
    }
    const getColorHover = useCallback((key: 'backgroundColor' | 'color') => {
        const inlneBg = props?.style?.background ?? props?.style?.backgroundColor;
        const inlneTxt = props?.style?.color;
        const curVariant = styles.button[color];

        if (key === 'backgroundColor') return (inlneBg
            ? mixers.button.background(inlneBg, 'hover')
            : mixers.button.background(curVariant, 'hover')
        );
        else return (inlneTxt
            ? mixers.button.color(inlneTxt, 'hover')
            : mixers.button.color(curVariant, 'hover')
        );
    }, [props?.style, color]);
    

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
                    <Button
                        data-id={uid}
                        key={opt?.id ?? index}
                        size={size}
                        className={`
                            join-item 
                            flex-auto
                            ${select === opt && 'btn-select'}
                        `}
                        variant={variant}
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