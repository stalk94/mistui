import { Button } from '@/components/buttons';
import { Section, Grid as ButtonGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';



export default function InfoButton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="Button" description="кнопка" code={`<Button size='sm'>default</Button>`}>
                <div className="flex justify-center">
                    <Button size='sm'>default</Button>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Button variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Button size="sm" variant="${variant}">${variant}</Button>`)
                    .join('\n')
                }
            >
                <ButtonGrid>
                    {variants.map((variant) => (
                        <Button size='sm' key={variant} variant={variant}>
                            {variant}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            <Section
                title="Button colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Button size="sm" color="${color}" shadow="sm">${color}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <Button size="sm" key={color} color={color} shadow="sm">
                            {color}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Button sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <Button key={size} size={size} shadow="sm">
                            {size}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom 1 */}
            <Section
                title="Button custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Button size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Button>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <Button
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom 2 */}
            <Section
                title="Button custom color"
                description="цвета и стили"
                code={colors
                    .map(
                        (color, i) =>
                            `<Button size="sm" color="${color}" variant="${variants[i]}" disabled shadow="xs">${color}</Button>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <Button
                            size="sm"
                            key={color}
                            color={color}
                            variant={variants[i]}
                            disabled
                            shadow="xs"
                        >
                            {color}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoButton.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    style: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Инлайн-стили, применяемые к компоненту.',
    },
    className: {
        values: ['string'],
        type: 'string',
        description: 'Дополнительные CSS классы для компонента.',
    },
    title: {
        values: ['string'],
        type: 'string',
        description: 'Заголовок компонента, если предусмотрен.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    variant: {
        values: ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'],
        default: 'contained',
        type: 'enum',
        description: 'Визуальный стиль компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', 'string'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает градиентную заливку.'
    },
    selected: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отображает компонент как выбранный.'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}