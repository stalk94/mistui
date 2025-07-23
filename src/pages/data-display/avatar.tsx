import Avatar from '@/components/avatar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';

const variants = ['base', 'square', 'round'];


export default function InfoAvatar(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Image avatar with rounded style"
                code={`<Avatar variant="round" size="sm" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />`}
            >
                <div className="flex justify-center">
                    <Avatar
                        variant="round"
                        size="sm"
                        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                    />
                </div>
            </Section>

            {/* placeholder */}
            <Section
                title="Placeholder"
                description="Initials instead of image"
                code={`<Avatar variant="square" size="sm">VS</Avatar>`}
            >
                <div className="flex justify-center">
                    <Avatar variant="square" size="sm">
                        VS
                    </Avatar>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="Different avatar shapes"
                code={variants
                    .map(
                        (v) =>
                            `<Avatar size="sm" variant="${v}" shadow="sm" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />`
                    )
                    .join('\n')}
            >
                <Grid>
                    {variants.map((v) => (
                        <Avatar
                            key={v}
                            size="sm"
                            variant={v}
                            shadow="sm"
                            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
                        />
                    ))}
                </Grid>
            </Section>

            {/* placeholder colors */}
            <Section
                title="Colors"
                description="Placeholder avatars with different background colors"
                code={colors
                    .map(
                        (color) =>
                            `<Avatar size="md" color="${color}" shadow="sm">${color}</Avatar>`
                    )
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <Avatar
                            key={color}
                            size="md"
                            color={color}
                            shadow="sm"
                            variant="round"
                        >
                            {color.slice(0, 2)}
                        </Avatar>
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Avatar size options"
                code={sizes
                    .map(
                        (size) =>
                            `<Avatar size="${size}" variant="round" src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />`
                    )
                    .join('\n')}
            >
                <div className="flex justify-center gap-4 items-end">
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className="flex flex-col items-center text-xs text-muted"
                        >
                            {size}
                            <Avatar
                                size={size}
                                variant="round"
                                src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
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
        description: 'Controls the visual form style component.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Enables gradient fill.'
    }
}