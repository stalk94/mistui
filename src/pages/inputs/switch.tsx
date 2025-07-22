import { SwitchBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoSwitchBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Basic switch component"
                code={`<SwitchBox value={false} />\n<SwitchBox value={true} />`}
            >
                <div className="flex justify-center">
                    <SwitchBox value={false} className="mr-2" />
                    <SwitchBox value={true} />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="Different visual styles"
                code={variants
                    .map((variant) => `<SwitchBox variant="${variant}" size="sm" value={true} />`)
                    .join('\n')}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <SwitchBox
                            key={i}
                            variant={variant}
                            size="sm"
                            className="mr-2"
                            value={true}
                        />
                    ))}
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes
                    .map((size) => `<SwitchBox size="${size}" labelTop="${size}" value={true} />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <SwitchBox
                            key={size}
                            size={size}
                            shadow="sm"
                            labelTop={size}
                            value={true}
                            className="mr-2"
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Colors"
                description="Theme colors"
                code={colors
                    .map((color) => `<SwitchBox variant="outline" color="${color}" size="sm" value={true} />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <SwitchBox
                            key={i}
                            variant="outline"
                            color={color}
                            size="sm"
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* label positions */}
            <Section
                title="Label positions"
                description="Top, left, and right label options"
                code={variants
                    .map((variant, i) =>
                        `<SwitchBox variant="${variant}" color="${colorsCustom[i]}" size="sm" labelTop="top-label" />\n` +
                        `<SwitchBox variant="${variant}" color="${colorsCustom[i]}" size="sm" labelLeft="left-label" />\n` +
                        `<SwitchBox variant="${variant}" color="${colorsCustom[i]}" size="sm" labelRight="right-label" />`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    <div className="flex flex-col m-auto">
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size="sm"
                            labelTop="top-label"
                            className="mb-3"
                        />
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size="sm"
                            labelLeft="left-label"
                            className="mb-3"
                        />
                        <SwitchBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size="sm"
                            labelRight="right-label"
                        />
                    </div>
                </ButtonGrid>
            </Section>

            {/* combined labels */}
            <Section
                title="Combined label positions"
                description="Top, left, and right labels together"
                code={`<SwitchBox variant="dash" color="${colorsCustom[2]}" size="sm" labelTop="top-label" labelRight="right-label" labelLeft="left-label" />`}
            >
                <ButtonGrid>
                    <SwitchBox
                        variant="dash"
                        color={colorsCustom[2]}
                        size="sm"
                        labelTop="top-label"
                        labelRight="right-label"
                        labelLeft="left-label"
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoSwitchBox.meta = {
    ...inputsMeta,
    value: {
        values: ['string'],
        type: 'string',
        description: 'The current color value in rgba() format.'
    },
    onChange: {
        values: ['function'],
        type: 'func',
        description: 'Called when the color changes.'
    },
}