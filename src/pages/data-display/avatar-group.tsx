import { AvatarGroup } from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


export default function InfoAvatarGroup(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
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
                        <div key={size} className="flex flex-col justify-center items-center">
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


const { children, ...rest } = baseMeta;
InfoAvatarGroup.meta = {
    ...rest,
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает градиентную заливку.'
    },
    items: {
        values: ['AvatarProps'],
        type: 'array',
        description: ''
    }
}