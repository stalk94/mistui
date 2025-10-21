import type { SliderInputProps } from './type';
import * as Slider from '@radix-ui/react-slider';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';
import { useMemo, useRef } from 'react';



export default function SliderInput({
    onChange,
    onChangeEnd,
    disableForm,
    variant = 'outline',
    size,
    color = 'secondary',
    value,
    min = 0,
    max = 100,
    step = 1,
    ...props
}: SliderInputProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const { styles, variants, sizes, autosizes, plugins } = useTheme();
    const isValid = value !== undefined && (typeof value === 'number' && !isNaN(value));
    const numericValue = Array.isArray(value) ? value.join(',') : value;
    const sliderKey = `${numericValue}`;


    const useChange = (newValue: number[], clb?: (v: number | number[]) => void) => {
        if (ref.current) ref.current.dataset.tip = `${newValue[0]}`;

        if (!clb) return;

        if (Array.isArray(value)) clb(newValue);
        else clb(newValue[0]);
    }
    const borderVariant = useMemo(() => {
        if (variant === 'dash') return { borderStyle: 'dashed' };
        if (variant === 'outline') return { borderStyle: 'solid' };
        return {};
    }, [variant]);
    const styleTrack = useMemo(() => {
        const systemBg = styles?.input?.sliderTrackColor;
        const fontColorTheme = styles?.input?.fontColor;
        const colorContrast = plugins.contrast((variants[color] ?? color) ?? fontColorTheme);

        let st = {
            borderStyle: variant === 'dash' ? 'dashed' : 'solid',
            backgroundColor: plugins.alpha((variants[color] ?? color) ?? systemBg, 0.4) ?? 'inherit',
            borderColor: plugins.alpha((variants[color] ?? color) ?? systemBg, 0.6),
            color: plugins.alpha(colorContrast, 0.6)
        };

        if (variant === 'dash' || variant === 'outline') {
            st.backgroundColor = 'inherit';
            st.borderWidth = 1;
        }
        if (variant === 'ghost') st.borderWidth = 0;

        return st;
    }, [color, variant, styles]);
    const styleRange = useMemo(() => {
        const systemBg = styles?.input?.sliderTrackColor;
        return {
            borderColor: plugins.lighten((variants[color] ?? color) ?? systemBg, 0.3),
            backgroundColor: (variants[color] ?? color) ?? systemBg,
        };
    }, [color, variant, styles]);
    const styleThumb = useMemo(() => {
        const systemBg = styles?.input?.sliderTrackColor;
        return {
            borderColor: plugins.lighten((variants[color] ?? color) ?? systemBg, 0.8),
            backgroundColor: plugins.lighten(
                plugins.alpha((variants[color] ?? color) ?? systemBg, 1),
                0.35
            )
        };
    }, [color, variant, styles]);

    return (
        <FormWrapper
            size={size}
            disabledVisibility={disableForm}
            variant={variant}
            color={color}
            {...props}
        >
            <Slider.Root
                key={sliderKey}
                defaultValue={isValid ? (Array.isArray(value) ? value : [value]) : [0]}
                onValueChange={(v) => useChange(v, onChange)}
                onValueCommit={(v) => useChange(v, onChangeEnd)}
                max={max}
                min={min}
                step={step}
                className={cs(`
                    flex
                    relative
                    items-center
                    select-none
                    touch-none
                    w-full
                    cursor-pointer
                    mt-1
                `)}
            >
                <Slider.Track
                    style={{
                        height: `${styles?.input?.sliderTrackHeight}rem`,
                        ...styleTrack,
                        ...borderVariant,
                    }}
                    className={cs(`
                        relative
                        grow
                        rounded-full
                    `)}
                >
                    <Slider.Range
                        style={{
                            height: `${styles?.input?.sliderTrackFillHeight}rem`,
                            ...styleRange
                        }}
                        className={cs(`
                            absolute
                            rounded-full
                            h-full
                            top-1/2
                            -translate-y-1/2
                        `)}
                    />
                </Slider.Track>

                <Slider.Thumb
                    data-radix-slider-thumb
                    data-tip={Array.isArray(value) ? value[0] : (value ?? 0)}
                    ref={ref}
                    style={{
                        border: 0,
                        width: "1rem",    // fallback размеры
                        height: "1rem",
                        ...styleThumb
                    }}
                    className={cs(`
                        block
                        tooltip
                        tooltip-primary
                        bg-gray-200
                        border
                        border-gray-400
                        rounded-full
                        shadow
                        ${sizes.thumb[size] ?? autosizes.thumb ?? "w-4 h-4"}
                    `)}
                />
            </Slider.Root>
        </FormWrapper>
    );
}