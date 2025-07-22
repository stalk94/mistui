import { SliderInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';



export default function InfoSlider(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                className='overflow-visible'
                title="Slider"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center mt-2 overflow-visible">
                    <SliderInput
                    />
                </div>
            </Section>

            {/* disabled form */}
            <Section
                className='overflow-visible'
                title="Disabled form"
                description="Базовый компонент выбора цвета"
                code={`<SliderInput disableForm />`}
            >
                <div className="flex justify-center">
                    <SliderInput disableForm />
                </div>
            </Section>

            {/* variants */}
            <Section
                className='overflow-visible'
                title="Slider variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <ButtonGrid className='flex-col w-100 m-auto'>
                    <SliderInput
                        variant='dash'
                        disableForm
                        size='sm'
                    />
                    <SliderInput
                        variant='outline'
                        disableForm
                        className='mt-4'
                        size='sm'
                    />
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                className='overflow-visible'
                title="sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid className='flex-col w-100 m-auto'>
                    {sizes.map((size) => (
                        <SliderInput
                            disableForm
                            key={size} 
                            size={size} 
                            variant='outline'
                            labelTop={size}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                className='overflow-visible'
                title="base variants theme colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid className='flex-col w-100 m-auto'>
                    {colors.map((color, i) => (
                        <SliderInput 
                            key={i} 
                            disableForm
                            variant='outline'
                            color={color}
                            labelTop={color}
                            size='sm'
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/*  labels */}
            <Section
                className='overflow-visible'
                title="Slider label position varints"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    <SliderInput
                        variant='dash'
                        color={colorsCustom[2]}
                        size='sm'
                        labelTop={'top-label'}
                        labelRight={'right-label'}
                        labelLeft={'left-label'}
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoSlider.meta = {
    ...inputsMeta
}