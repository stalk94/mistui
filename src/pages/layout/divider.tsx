import Divider from '@/components/utils/divider';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';

const variants = ["solid", "dashed", "dotted"];
const positions = ['start', 'center', 'end'];


export default function InfoDivider() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section title="Divider" description="кнопка" code={`<Divider></Divider>`}>
                <div className="w-full">
                    <Divider></Divider>
                </div>
            </Section>

            {/* text */}
            <Section 
                title="Divider custom children" 
                description="кнопка" 
                code={`<Divider>divider</Divider>`}
            >
                <div className="w-full">
                    <Divider>divider</Divider>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Divider variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Divider size="sm" variant="${variant}">${variant}</Divider>`)
                    .join('\n')
                }
            >
                <Grid className="w-full flex-col">
                    {variants.map((variant) => (
                        <Divider  
                            key={variant} 
                            variant={variant}
                        >
                            {variant}
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* orientation */}
            <Section
                title="Divider vertical"
                description="разные цвета"
                code={''}
            >
                <Grid className="w-full h-40">
                    <Divider 
                        orientation='vertical'
                    >
                        vertical
                    </Divider>
                </Grid>
            </Section>

            {/* positions */}
            <Section
                title="Divider custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Divider size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Divider>`
                    )
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {positions.map((position, i) => (
                        <Divider
                            size="sm"
                            key={position}
                            position={position}
                            shadow="xs"
                        >
                            { position }
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* colors */}
            <Section
                title="Divider colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Divider size="sm" color="${color}" shadow="sm">${color}</Divider>`)
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {colors.map((color) => (
                        <Divider size="sm" key={color} color={color} shadow="sm">
                            {color}
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* custom colors*/}
            <Section
                title="Divider custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Divider size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Divider>`
                    )
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {variants.map((variant, i) => (
                        <Divider
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Divider>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


InfoDivider.meta = {
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