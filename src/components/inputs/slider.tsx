import type { SliderInputProps } from './type';
import * as Slider from '@radix-ui/react-slider';
import { FormWrapper } from './atomize';



export default function SliderInput({
    onChange,
    onChangeEnd,
    disableForm,
    size,
    color,
    value,
    min,
    max,
    step,
    config,
    ...props
}: SliderInputProps) {
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
            style={disableForm && { background: 'inherit', border: 'none', boxShadow: 'none' }}
            size={size}
            { ...props }
        >
            <style data-editor-style='slider'>
                {`
                    .slider-track {
                        background: ${config?.['track-color']??'darkgrey'};
                        height: ${config?.['track-height'] ?? '0.1rem'};
                    }
                    .slider-track-range {
                        background: ${config?.['track-fill-color']??'lightgrey'};
                        height: ${config?.['track-fill-height'] ?? '0.2rem'};
                    }
                    .slider-thumb {
                        background: white;
                        border-width: 1px;
                        border-style: solid;
                        border-color: #11111162;
                    }
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
                    className={`
                        relative 
                        grow 
                        rounded-full 
                        slider-track
                    `}
                >
                    <Slider.Range
                        className={`
                            absolute
                            rounded-full 
                            h-full
                            slider-track-range
                            top-1/2
                            -translate-y-1/2
                        `}
                    />
                </Slider.Track>

                <Slider.Thumb 
                    data-tip={ Array.isArray(value) ? value[0] : (value ?? 0) }
                    className={`
                        block 
                        tooltip
                        slider-thumb
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
