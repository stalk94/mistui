import { IconButton } from '@/components/buttons';
import { Section, Grid as IconButtonGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';



export default function InfoIconButton() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section title="IconButton" description="кнопка" code={`<IconButton size='sm'>default</IconButton>`}>
                <div className="flex justify-center">
                    <IconButton size='sm'>
                        <HomeIcon />
                    </IconButton>
                </div>
            </Section>

            {/* rounded */}
            <Section title="IconButton" description="кнопка" code={`<IconButton size='sm'>default</IconButton>`}>
                <div className="flex justify-center">
                    <IconButton size='sm' isRounded>
                        <HomeIcon />
                    </IconButton>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="IconButton variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<IconButton size="sm" variant="${variant}">${variant}</IconButton>`)
                    .join('\n')
                }
            >
                <IconButtonGrid>
                    {variants.map((variant) => (
                        <IconButton size='sm' key={variant} variant={variant}>
                            <HomeIcon />
                        </IconButton>
                    ))}
                </IconButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="IconButton sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<IconButton size="${size}" shadow="sm">${size}</IconButton>`)
                    .join('\n')}
            >
                <IconButtonGrid>
                    {sizes.map((size) => (
                        <IconButton key={size} size={size} shadow="sm">
                             <HomeIcon />
                        </IconButton>
                    ))}
                </IconButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="IconButton colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<IconButton size="sm" color="${color}" shadow="sm">${color}</IconButton>`)
                    .join('\n')}
            >
                <IconButtonGrid>
                    {colors.map((color) => (
                        <IconButton size="sm" key={color} color={color} shadow="sm">
                             <HomeIcon />
                        </IconButton>
                    ))}
                </IconButtonGrid>
            </Section>

            {/* custom color */}
            <Section
                title="IconButton custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<IconButton size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</IconButton>`
                    )
                    .join('\n')}
            >
                <IconButtonGrid>
                    {variants.map((variant, i) => (
                        <IconButton
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            <HomeIcon />
                        </IconButton>
                    ))}
                </IconButtonGrid>
            </Section>
        </div>
    );
}


InfoIconButton.meta = {
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