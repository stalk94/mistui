import type { SliderInputProps } from './type';
import * as Slider from '@radix-ui/react-slider';
import { FormWrapper } from './atomize';
import { useTheme } from '../theme';
import { colord } from 'colord';


export default function SliderInput({
    onChange,
    onChangeEnd,
    disableForm,
    size,
    color = 'primary',
    value,
    min,
    max,
    step,
    styleTrack,
    styleRange,
    styleThumb,
    ...props
}: SliderInputProps) {
    const { styles, variants } = useTheme();
    const isValid = value !== undefined && (typeof value === 'number' && !isNaN(value));
    const numericValue = Array.isArray(value) ? value.join(',') : value;
    const sliderKey = `${numericValue}`; 
 

    const sizeThumb = {
        xs: 'w-4 h-2',
        sm: 'w-4 h-3',
        md: 'w-4 h-3',
        lg: 'w-6 h-4',
        xl: 'w-6 h-4',
        auto: 'w-4 h-3 sm:w-4 sm:h-3 md:w-4 md:h-3 lg:w-6 lg:h-4 xl:w-6 xl:h-4'
    }
    const useChange = (newValue: number[], clb?: (v: number | number[]) => void) => {
        if (!clb) return;

        if (Array.isArray(value)) clb(newValue);
        else clb(newValue[0]);
    }


    return (
        <FormWrapper
            size={size}
            disabledVisibility={disableForm}
            color={color}
            { ...props }
        >
            <style >
                {`
                    .slider-thumb:hover {
                        background: white;
                    }
                `}
            </style>

            <Slider.Root
                key={sliderKey}
                defaultValue={isValid ? (Array.isArray(value) ? value : [value]) : [0]}
                onValueChange={(v) => useChange(v, onChange)}
                onValueCommit={(v) => useChange(v, onChangeEnd)}
                max={max ?? 100}
                min={min ?? 0}
                step={step ?? 1}
                className={`
                    flex
                    relative 
                    items-center 
                    select-none 
                    touch-none 
                    w-full
                    cursor-pointer
                `}
            >
                <Slider.Track 
                    style={{
                        background: (styleTrack?.background ?? styles?.input?.sliderTrackColor),
                        height: (styleTrack?.height ?? `${styles?.input?.sliderTrackHeight}rem`)
                    }}
                    className={`
                        relative 
                        grow 
                        rounded-full 
                    `}
                >
                    <Slider.Range
                        style={{
                            background: (styleRange?.background ?? styles?.input?.sliderTrackFillColor),
                            height: (styleRange?.height ?? `${styles?.input?.sliderTrackFillHeight}rem`)
                        }}
                        className={`
                            absolute
                            rounded-full 
                            h-full
                            top-1/2
                            -translate-y-1/2
                        `}
                    />
                </Slider.Track>

                <Slider.Thumb 
                    data-tip={ Array.isArray(value) ? value[0] : (value ?? 0) }
                    style={{
                        border: 0,
                        background: (variants[color] ?? color) 
                            ?? (styleThumb?.background 
                            ?? styles?.input?.sliderThumbBackgroundColor),
                    }}
                    className={`
                        block 
                        tooltip
                        bg-gray-200 
                        border 
                        border-gray-400 
                        rounded-full 
                        shadow 
                        ${sizeThumb[size] ?? sizeThumb.auto}
                    `}
                />
            </Slider.Root>
        </FormWrapper>
    );
}
