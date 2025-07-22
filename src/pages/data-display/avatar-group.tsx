import { AvatarGroup } from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


export default function InfoAvatarGroup(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base group */}
            <Section
                title="Base"
                description="Avatar group with images and overflow"
                code={`
                    <AvatarGroup
                        size="md"
                        items={[
                            { src: "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" },
                            { src: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" },
                            { src: "https://img.daisyui.com/images/profile/demo/batperson@192.webp" },
                            { children: "+99" }
                        ]}
                    />
                `}
            >
                <div className="flex justify-center">
                    <AvatarGroup
                        size="md"
                        items={[
                            { src: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp' },
                            { src: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp' },
                            { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp' },
                            { children: '+99' },
                        ]}
                    />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Different avatar group sizes"
                code={sizes
                    .map(
                        (size) => `<AvatarGroup size="${size}" items={[{ src: "..." }, { src: "..." }]} />`
                    )
                    .join('\n')}
            >
                <div className="flex flex-col gap-4 items-center">
                    {sizes.map((size) => (
                        <div key={size} className="flex flex-col items-center text-xs text-muted">
                            {size}
                            <AvatarGroup
                                size={size}
                                items={[
                                    {src: 'https://img.daisyui.com/images/profile/demo/yellingcat@192.webp',},
                                    {src: 'https://img.daisyui.com/images/profile/demo/spiderperson@192.webp',},
                                    { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp',},
                                    { children: '+99' },
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
        description: 'Controls the visual form style component.'
    },
    items: {
        values: ['AvatarProps'],
        type: 'array',
        description: ''
    }
}