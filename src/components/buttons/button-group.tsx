import type { ToggleButtonGroupProps } from './type';
import { FormWrapper } from './atomize';
import { useCache } from './hooks';
import { useTheme } from '../theme';



export default function ToggleButtonGroup({
    items,
    value,
    onChange,
    size,
    color,
    onlyId,
    style,
    variant,
    ...props
}: ToggleButtonGroupProps) {
    const { styles } = useTheme();
    const getSize = size ? `btn-${size}` : 'btn-sm sm:btn-md md:btn-md lg:btn-lg xl:btn-lg';
    const [select, setSelect] = useCache(value);

    const handleChange = (current: string | number | any) => {
        setSelect(current);
        const cur = current?.id !== undefined ? current?.id : current;
        onChange?.(onlyId ? cur : current);
    }
    
    return (
        <FormWrapper
            size={size}
            disabledVisibility
            { ...props }
        >
            <div className="join flex-wrap w-full gap-y-[1px]">
                {items.map((opt, index) => (
                    <button
                        key={opt?.id ?? index}
                        className={`
                            join-item 
                            btn 
                            flex-auto
                            text-[var(--text-primary-content)]
                            ${getSize}
                            ${select === opt && 'btn-select'}
                        `}
                        style={{
                            backgroundColor: (select !== opt 
                                ? styles?.button?.backgroundColor 
                                : styles?.button?.backgroundActiveColor
                            ),
                            color: (select !== opt
                                ? styles?.button?.color
                                : styles?.button?.color
                            ),
                            ...style,
                        }}
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