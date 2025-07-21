import Avatar from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';

const variants = ['base', 'square', 'round'];


export default function InfoAvatar(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
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
                        variant='square'
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
                            size="md" 
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
                        <div key={size}  className="flex flex-col justify-center items-center">
                            {size}
                            <Avatar 
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
    ...baseMeta,
    variant: {
        values: ['base', 'square', 'round'],
        default: 'base',
        type: 'enum',
        description: 'Визуальный стиль компонента.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает градиентную заливку.'
    }
}