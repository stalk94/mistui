import { SliderInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';


export default function InfoSlider(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="Slider"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center mt-2">
                    <SliderInput

                    />
                </div>
            </Section>

            {/* disabled form */}
            <Section
                title="Disabled form"
                description="Базовый компонент выбора цвета"
                code={`<SliderInput disableForm />`}
            >
                <div className="flex justify-center">
                    <SliderInput className='mt-6' disableForm />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Slider variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <ButtonGrid className='flex-col w-100 m-auto'>
                    <SliderInput
                        variant='dash'
                        className='mt-6'
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
                title="Slider sizes"
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
                            labelTop={size}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Slider base variants theme colors"
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
                            className='mt-2'
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
    value: {
        values: ['string'],
        type: 'string',
        description: 'Текущее значение цвета в формате rgba().'
    },
    onChange: {
        values: ['function'],
        type: 'function',
        description: 'Вызывается при изменении цвета.'
    },
    placeholder: {
        values: ['string'],
        type: 'string',
        description: 'Текст внутри поля по умолчанию.'
    },
    required: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Обязательное поле.'
    },
    color: {
        values: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'primary',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    size: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        type: 'enum',
        description: 'Размер компонента.'
    },
    'data-id': {
        values: ['string'],
        type: 'string',
        description: 'Идентификатор для отладки и тестирования.'
    }
}