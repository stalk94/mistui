import Badge from '@/components/utils/badge';
import { Section, Grid as BadgeGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { baseMeta, variantMeta } from '../meta';


export default function InfoBadge(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Simple badge"
                code={`<Badge size="sm">default</Badge>`}
            >
                <div className="flex justify-center">
                    <Badge size="md">default</Badge>
                </div>
            </Section>

            {/* with icons */}
            <Section
                title="With icons"
                description="Badge with left and right icons"
                code={`
                    <Badge iconLeft={<TrashIcon />}>left</Badge>
                    <Badge iconRight={<XMarkIcon />}>right</Badge>
                `}
            >
                <div className="flex justify-center gap-2">
                    <Badge
                        size="md"
                        color="secondary"
                        variant="dash"
                        iconLeft={<TrashIcon />}
                    >
                        left
                    </Badge>
                    <Badge
                        size="md"
                        color="secondary"
                        variant="dash"
                        iconRight={<XMarkIcon className="rounded-3xl border-1" />}
                    >
                        right
                    </Badge>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="Different visual styles"
                code={variants
                    .map((v) => `<Badge size="sm" variant="${v}">${v}</Badge>`)
                    .join('\n')}
            >
                <BadgeGrid>
                    {variants.map((v) => (
                        <Badge key={v} size="sm" variant={v}>
                            {v}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Badge sizes"
                code={sizes
                    .map((size) => `<Badge size="${size}" shadow="sm">${size}</Badge>`)
                    .join('\n')}
            >
                <BadgeGrid>
                    {sizes.map((size) => (
                        <Badge key={size} size={size} shadow="sm">
                            {size}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* system colors */}
            <Section
                title="System colors"
                description="Predefined color palette"
                code={colors
                    .map((color) => `<Badge size="sm" color="${color}" shadow="sm">${color}</Badge>`)
                    .join('\n')}
            >
                <BadgeGrid>
                    {colors.map((color) => (
                        <Badge key={color} size="sm" color={color} shadow="sm">
                            {color}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>

            {/* custom colors */}
            <Section
                title="Custom colors"
                description="Custom color + variant combination"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Badge size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Badge>`
                    )
                    .join('\n')}
            >
                <BadgeGrid>
                    {variants.map((variant, i) => (
                        <Badge
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Badge>
                    ))}
                </BadgeGrid>
            </Section>
        </div>
    );
}


InfoBadge.meta = {
    ...baseMeta,
    ...variantMeta,
    iconLeft: {
        values: ['SVGElement', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    iconRight: {
        values: ['SVGElement', 'React.ReactNode'],
        type: 'enum',
        description: ''
    }
}