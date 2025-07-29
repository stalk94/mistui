import { IconButton } from '@/components/buttons';
import { Section, Grid as IconButtonGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import ButtonInfo from './button';



export default function InfoIconButton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="" 
                description="" 
                code={`<IconButton size='sm'><HomeIcon /></IconButton>`}
            >
                <div className="flex justify-center">
                    <IconButton size='sm'>
                        <HomeIcon />
                    </IconButton>
                </div>
            </Section>

            {/* rounded */}
            <Section 
                title="Rounded" 
                description="" 
                code={`<IconButton isRounded size='sm'><HomeIcon /></IconButton>`}
            >
                <div className="flex justify-center">
                    <IconButton size='sm' isRounded>
                        <HomeIcon />
                    </IconButton>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description=""
                code={variants
                    .map((variant) => `<IconButton size="sm" variant="${variant}"><HomeIcon /></IconButton>`)
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
                title="sizes"
                description=""
                code={sizes
                    .map((size) => `<IconButton size="${size}" shadow="sm"><HomeIcon /></IconButton>`)
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
                title="colors"
                description=""
                code={colors
                    .map((color) => `<IconButton size="sm" color="${color}" shadow="sm"><HomeIcon /></IconButton>`)
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
                title="custom color"
                description=""
                code={variants
                    .map(
                        (variant, i) =>
                            `<IconButton size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs"><HomeIcon /></IconButton>`
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


const { children, ...rest } = ButtonInfo.meta;
InfoIconButton.meta = {
    ...rest,
    isRounded: {
        values: ['any'],
        type: 'boolean',
        description: 'Enables border rounding.'
    },
    icon: {
        values: ['React.ReactNode'],
        type: 'enum',
        description: 'SVG icon component (alternative children props)*'
    },
    children: {
        values: ['React.ReactNode'],
        type: 'enum',
        description: 'SVG icon component.'
    },
    ripple: {
        values: ['boolean'],
        type: 'boolean',
        default: 'true',
        description: 'Enable ripple animation effect'
    }
}