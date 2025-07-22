import Button from './button';
import type { ToggleButtonGroupProps } from './type';
import { FormWrapper } from '../inputs/atomize';
import { useCache } from '../hooks';
import { useTheme } from '../theme';
import { useUids } from '../hooks/uuid';
import { useCallback } from 'react';
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
    ...props
}: ToggleButtonGroupProps) {
    const { plugins, variants, mixers } = useTheme();
    const uid = useUids('button-group');
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
    }, [props.style, color, variant]);
    

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
                    w-full 
                    gap-[2px]
                    ${orientation === 'vertical' ? 'join-vertical' : ''}
                `)}
            >
                {items.map((opt, index) => (
                    <Button
                        data-id={uid}
                        key={opt?.id ?? index}
                        size={size}
                        color={color}
                        className={`join-item flex-auto`}
                        selected={select === opt}
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