import Badge from '@/components/utils/badge';
import { Section, Grid as BadgeGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';



export default function InfoBadge() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="Badge" 
                description="кнопка" 
                code={`<Badge size='sm'>default</Badge>`}
            >
                <div className="flex justify-center">
                    <Badge size='md'>default</Badge>
                </div>
            </Section>

            {/* icons */}
            <Section 
                title="Badge icons" 
                description="кнопка" 
                code={`<Badge size='sm'>default</Badge>`}
            >
                <div className="flex justify-center">
                    <Badge 
                        size='md'
                        color='secondary'
                        variant='dash'
                        iconLeft={<TrashIcon />}
                    >
                        left
                    </Badge>
                    <Badge 
                        className='ml-1'
                        size='md'
                        color='secondary'
                        variant='dash'
                        iconRight={<XMarkIcon className='rounded-3xl border-1' />}
                    >
                        right
                    </Badge>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Badge variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Badge size="sm" variant="${variant}">${variant}</Badge>`)
                    .join('\n')
                }
            >
                <BadgeGrid>
                    {variants.map((variant) => (
                        <Badge size='sm' key={variant} variant={variant}>
                            {variant}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Badge sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Badge size="${size}" shadow="sm">${size}</Badge>`)
                    .join('\n')}
            >
                <BadgeGrid>
                    {sizes.map((size) => (
                        <Badge key={size} size={size} shadow="sm">
                            {size}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* colors */}
            <Section
                title="Badge colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Badge size="sm" color="${color}" shadow="sm">${color}</Badge>`)
                    .join('\n')}
            >
                <BadgeGrid>
                    {colors.map((color) => (
                        <Badge size="sm" key={color} color={color} shadow="sm">
                            {color}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* colors custom */}
            <Section
                title="Badge custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Badge size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Badge>`
                    )
                    .join('\n')}
            >
                <BadgeGrid>
                    {variants.map((variant, i) => (
                        <Badge
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>
        </div>
    );
}


InfoBadge.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
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
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
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