import { Button } from '@/components/buttons';
import { Section, Grid as ButtonGrid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoButton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="base" description="" code={`<Button size='sm'>default</Button>`}>
                <div className="flex justify-center">
                    <Button size='sm'>default</Button>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description="system theme variants"
                code={variants
                    .map((variant) => `<Button size="sm" variant="${variant}">${variant}</Button>`)
                    .join('\n')
                }
            >
                <ButtonGrid>
                    {variants.map((variant) => (
                        <Button size='sm' color='primary' key={variant} variant={variant}>
                            {variant}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            <Section
                title="colors"
                description="system theme color"
                code={colors
                    .map((color) => `<Button size="sm" color="${color}" shadow="sm">${color}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <Button size="sm" key={color} color={color} shadow="sm">
                            {color}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom */}
            <Section
                title="custom color"
                description="custom color props"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Button size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Button>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <Button
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* gradient */}
            <Section
                title="gradient"
                description="`isGradient` props true"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Button size="sm" isGradient variant="outline" color="${colorsCustom[i]}" shadow="xs">button</Button>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <Button
                            size="sm"
                            key={variant}
                            variant='outline'
                            isGradient
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="sizes"
                description="system theme sizes"
                code={sizes
                    .map((size) => `<Button size="${size}" shadow="sm">${size}</Button>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <Button key={size} size={size} shadow="sm">
                            {size}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>

            {/* disabled */}
            <Section
                title="disabled"
                description=""
                code={colors
                    .map(
                        (color, i) =>
                            `<Button size="sm" color="${color}" variant="${variants[i]}" disabled shadow="xs">${color}</Button>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <Button
                            size="sm"
                            key={color}
                            color={color}
                            variant={variants[i]}
                            disabled
                            shadow="xs"
                        >
                            {color}
                        </Button>
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoButton.meta = {
    ...baseMeta,
    variant: {
        values: ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'],
        default: 'contained',
        type: 'enum',
        description: 'Controls the visual style like filled, outlined, or link component.'
    },
    isGradient: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Enables gradient fill.'
    },
    selected: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Displays the component as selected.'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Disables the component.'
    },
}