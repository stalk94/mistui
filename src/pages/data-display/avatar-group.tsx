import { AvatarGroup } from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';


export default function InfoAvatarGroup() {
    return (
        <div className="p-6 space-y-8 ">
            {/* image */}
            <Section 
                title="AvatarGroup" 
                description="кнопка" 
                code={`<AvatarGroup variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></AvatarGroup>`}
            >
                <div className="flex justify-center">
                    <AvatarGroup 
                        size='md'
                        items={[
                            { src: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'},
                            { src: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'},
                            { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp'},
                            { children: '+99' }
                        ]}
                    />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="AvatarGroup sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<AvatarGroup size="${size}" shadow="sm">${size}</AvatarGroup>`)
                    .join('\n')}
            >
               <div className="flex-col justify-center items-center">
                    {sizes.map((size) => (
                        <div className="flex flex-col justify-center items-center">
                            {size}
                            <AvatarGroup 
                                size={size}
                                items={[
                                    { src: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'},
                                    { src: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp'},
                                    { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp'},
                                    { children: '+99' }
                                ]}
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}


InfoAvatarGroup.meta = {
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