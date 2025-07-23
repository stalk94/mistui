import type { SliderInputProps } from './type';
import * as Slider from '@radix-ui/react-slider';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { cs } from '../hooks/cs';
import { useMemo, useRef } from 'react';


const sizeThumb = {
    xs: 'w-4 h-2',
    sm: 'w-4 h-3',
    md: 'w-4 h-3',
    lg: 'w-6 h-4',
    xl: 'w-6 h-4',
    auto: 'w-4 h-3 sm:w-4 sm:h-3 md:w-4 md:h-3 lg:w-6 lg:h-4 xl:w-6 xl:h-4'
}


// ! tooltip style
export default function SliderInput({
    onChange,
    onChangeEnd,
    disableForm,
    variant = 'outline',
    size,
    color = 'secondary',
    value,
    min,
    max,
    step,
    ...props
}: SliderInputProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const { styles, variants, plugins } = useTheme();
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
        if (variant === 'dash') return {
            borderStyle: 'dashed'
        }
        else if (variant === 'outline') return {
            borderStyle: 'solid'
        }
        else return {};
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
        }

        if (variant === 'dash' || variant === 'outline') {
            st.backgroundColor = 'inherit';
            st.borderWidth = 1;
        }
        if (variant === 'ghost') st.borderWidth = 0;

        return st;
    }, [color, variant, styles]);
    const styleRange = useMemo(() => {
        const systemBg = styles?.input?.sliderTrackColor;

        return ({
            borderColor: plugins.lighten((variants[color] ?? color) ?? systemBg, 0.3),
            backgroundColor: (variants[color] ?? color) ?? systemBg, 
        });
    }, [color, variant, styles]);
    const styleThumb = useMemo(() => {
        const systemBg = styles?.input?.sliderTrackColor;

        return ({
            borderColor: plugins.lighten((variants[color] ?? color) ?? systemBg, 0.8),
            backgroundColor: plugins.lighten(
                plugins.alpha(
                    (variants[color] ?? color) 
                        ?? systemBg, 1), 
                0.35)
        });
    }, [color, variant, styles]);


    return (
        <FormWrapper
            size={size}
            disabledVisibility={disableForm}
            { ...props }
        >
            <Slider.Root
                key={sliderKey}
                defaultValue={isValid ? (Array.isArray(value) ? value : [value]) : [0]}
                onValueChange={(v) => useChange(v, onChange)}
                onValueCommit={(v) => useChange(v, onChangeEnd)}
                max={max ?? 100}
                min={min ?? 0}
                step={step ?? 1}
                className={cs(`
                    flex
                    relative 
                    items-center 
                    select-none 
                    touch-none 
                    w-full
                    cursor-pointer
                    mt-1
                    min-w-60
                `)}
            >
                <Slider.Track 
                    style={{
                        height: `${styles?.input?.sliderTrackHeight}rem`,       //!
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
                    data-tip={ Array.isArray(value) ? value[0] : (value ?? 0) }
                    ref={ref}
                    style={{
                        border: 0,
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
                        ${sizeThumb[size] ?? sizeThumb.auto}
                    `)}
                />
            </Slider.Root>
        </FormWrapper>
    );
}
