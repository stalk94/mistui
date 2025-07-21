import { GroupButton } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';



export default function InfoGroupButton() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}

            <Section title="GroupButton" description="кнопка" code={`<GroupButton size='sm'>default</GroupButton>`}>
                <div className="flex justify-center">
                    <GroupButton 
                        size='sm' 
                        variant='contained'
                        value='playground'
                        items={['documentation', 'playground', 'any']}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="GroupButton variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<GroupButton size="sm" variant="${variant}">${variant}</GroupButton>`)
                    .join('\n')
                }
            >
                <Grid className='flex-col justify-center'>
                    {variants.map((variant) => (
                        <div className="flex-col justify-center w-120 m-auto">
                            {variant}
                            <GroupButton 
                                size='sm' 
                                value='playground'
                                key={variant} 
                                variant={variant}
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="GroupButton sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<GroupButton size="${size}" shadow="sm">${size}</GroupButton>`)
                    .join('\n')}
            >
                <Grid className='flex-col justify-center'>
                    {sizes.map((size) => (
                        <div className="flex-col justify-center w-120 m-auto">
                            {size}
                            <GroupButton
                                size={size}
                                key={size}
                                value='playground'
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}

                </Grid>
            </Section>

            {/* colors */}
            <Section
                title="GroupButton colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<GroupButton size="sm" color="${color}" shadow="sm">${color}</GroupButton>`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <div className='flex flex-col'>
                            {color}
                            <GroupButton 
                                size="sm" 
                                key={color} 
                                color={color} 
                                shadow="sm"
                                value={['documentation', 'playground', 'any'][Math.floor(Math.random() * 3)]}
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


InfoGroupButton.meta = {
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