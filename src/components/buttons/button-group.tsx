import Button from './button';
import type { ToggleButtonGroupProps } from './type';
import { FormWrapper } from '../inputs/atomize';
import { useCache } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useCallback, useEffect } from 'react';
import { cs } from '../hooks/cs';
import { colord } from 'colord';



export default function ToggleButtonGroup({
    items,
    value,
    onChange,
    size,
    onlyId,
    color,
    variant,
    orientation = 'horizontal',
    fullWidth,
    ...props
}: ToggleButtonGroupProps) {
    const { plugins, variants } = useTheme();
    const uid = useUids('button-group');
    const isHorizontal = orientation === 'horizontal';
    const [select, setSelect] = useCache(value);


    const handleChange = (current: string | number | any) => {
        setSelect(current);
        const cur = current?.id !== undefined ? current?.id : current;
        onChange?.(onlyId ? cur : current);
    }
    const getColorHover = useCallback((key: 'backgroundColor' | 'color' | 'border') => {
        const inlneBg = props?.style?.backgroundColor;
        const inlneBorder = props?.style?.borderColor;
        const inlneTxt = props?.style?.color;
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
    }, [props.style, color, variant]);
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

            <div 
                className={cs(`
                    join 
                    flex-wrap
                    ${fullWidth ? 'w-full' : ''}
                    gap-[3px]
                    ${orientation === 'vertical' ? 'join-vertical' : ''}
                `)}
            >
                {items.map((opt, index) => (
                    <Button
                        data-id={uid}
                        key={opt?.id ?? index}
                        size={size}
                        color={color}
                        className={cs(`
                            join-item 
                            flex-auto 
                            flex-grow-0 
                            flex-shrink-0
                            ${isHorizontal && 'rounded-none'}
                            ${isHorizontal && index === 0 && "rounded-l-md"}
                            ${isHorizontal && index === items.length - 1 && "rounded-r-md"}
                            ${isHorizontal && index !== 0 && index !== items.length - 1 && "rounded-none"}
                            ${!isHorizontal && "w-full rounded-none"}
                            ${!isHorizontal && index === 0 && "rounded-t-md"}
                            ${!isHorizontal && index === items.length - 1 && "rounded-b-md"}
                        `)}
                        selected={isSelected(opt)}
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