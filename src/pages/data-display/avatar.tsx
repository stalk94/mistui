import Avatar from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';

const variants = ['base', 'square', 'round'];


export default function InfoAvatar() {
    return (
        <div className="p-6 space-y-8 ">
            {/* image */}
            <Section 
                title="Avatar" 
                description="кнопка" 
                code={`<Avatar variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></Avatar>`}
            >
                <div className="flex justify-center">
                    <Avatar 
                        variant='round'
                        size='sm'
                        src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                    />
                </div>
            </Section>
            {/* placeholder */}
            <Section
                title="Avatar placeholder"
                description="кнопка"
                code={`<Avatar variant='round' size='sm'>VS</Avatar>`}
            >
                <Grid>
                    <Avatar
                        size='sm'
                        variant='round'
                    >
                        VS
                    </Avatar>
                </Grid>
            </Section>

            {/* variants */}
            <Section
                title="Avatar variants"
                description=""
                code={variants
                    .map((v) => `<Avatar size="sm" variant="${v}" shadow="sm"></Avatar>`)
                    .join('\n')}
            >
                <Grid>
                    {variants.map((v) => (
                        <Avatar 
                            size="sm" 
                            key={v} 
                            shadow="sm"
                            variant={v}
                            src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                        />
                    ))}
                </Grid>
            </Section>

            {/* placeholder colors */}
            <Section
                title="Avatar placeholder colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Avatar size="sm" color="${color}" shadow="sm">${color}</Avatar>`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <Avatar 
                            size="sm" 
                            key={color} 
                            color={color} 
                            shadow="sm"
                            variant='round'
                        >
                            { color }
                        </Avatar>
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="Avatar sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Avatar size="${size}" shadow="sm">${size}</Avatar>`)
                    .join('\n')}
            >
               <div className="flex justify-center items-center">
                    {sizes.map((size) => (
                        <div className="flex flex-col justify-center items-center">
                            {size}
                            <Avatar 
                                key={size} 
                                size={size}
                                variant='round'
                                src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoAvatar.meta = {
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