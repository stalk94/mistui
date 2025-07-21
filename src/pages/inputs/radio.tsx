import { RadioBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors, variants } from '../helpers';


export default function InfoRadioBox() {
    return (
        <div className="p-6 space-y-8">
            
            <Section
                title="Radio"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <RadioBox
                        value={true}
                    />
                </div>
            </Section>

            <Section
                title="Radio variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <RadioBox 
                            key={i} 
                            variant={variant}
                            size='sm'
                            value={true}
                        />
                    ))}
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Radio sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <RadioBox 
                            key={size} 
                            size={size} 
                            shadow="sm"
                            labelTop={size}
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Radio base variants theme colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <RadioBox 
                            key={i} 
                            variant='outline'
                            color={color}
                            size='sm'
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoRadioBox.meta = {
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