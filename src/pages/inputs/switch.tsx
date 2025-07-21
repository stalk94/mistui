import { SwitchBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';


export default function InfoSwitchBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section
                title="Switch"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    <SwitchBox
                        value={false}
                    />
                    <SwitchBox
                        value={true}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Switch variants"
                description="Базовый компонент выбора цвета"
                code={`<ColorPicker placeholder="Выберите цвет" />`}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <SwitchBox
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
                title="Switch sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <SwitchBox
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
                title="Switch base variants theme colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <SwitchBox 
                            key={i} 
                            variant='outline'
                            color={color}
                            size='sm'
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* label left */}
            <Section
                title="Switch label"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<BaseInput variant="${variant}" color="${colorsCustom[i]}">${variant}</BaseInput>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    <SwitchBox
                        variant={variants[1]}
                        color={colorsCustom[2]}
                        size='sm'
                        labelTop={'top-label'}
                    />
                    <SwitchBox
                        variant={variants[1]}
                        color={colorsCustom[2]}
                        size='sm'
                        labelLeft={'left-label'}
                    />
                    <SwitchBox
                        variant={variants[1]}
                        color={colorsCustom[2]}
                        size='sm'
                        labelRight={'right-label'}
                    />
                </ButtonGrid>
            </Section>

            {/* combo label */}
            <Section
                title="Switch label position varints"
                description="разные цвета"
                code={colors
                    .map((color) => `<BaseInput color="${color}">'${color}'</BaseInput>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    <SwitchBox
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


InfoSwitchBox.meta = {
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