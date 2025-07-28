import { CheckBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoCheckBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Basic checkbox component"
                code={`<CheckBox value={false} />\n<CheckBox value={true} />`}
            >
                <div className="flex justify-center">
                    <CheckBox size="sm" className="mr-2" value={false} />
                    <CheckBox size="sm" value={true} />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="Different visual styles"
                code={["contained", "outline", "dash", "ghost"]
                    .map((variant, i) => 
                        `<CheckBox variant="${variant}" size="sm" color="${colors[i + 1]}" value={true} />`
                    )
                    .join("\n")}
            >
                <div className="flex justify-center">
                    {["contained", "outline", "dash", "ghost"].map((variant, i) => (
                        <CheckBox
                            key={i}
                            variant={variant}
                            size="sm"
                            color={colors[i + 1]}
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
                    .map((size) => `<CheckBox size="${size}" labelTop="${size}" value={true} />`)
                    .join("\n")}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <CheckBox
                            key={size}
                            size={size}
                            shadow="sm"
                            labelTop={size}
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Colors"
                description="Theme colors"
                code={colors
                    .map((color) => `<CheckBox variant="outline" color="${color}" size="sm" value={true} />`)
                    .join("\n")}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <CheckBox
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
                code={[
                    `<CheckBox variant="${variants[1]}" color="${colorsCustom[2]}" size="sm" labelTop="top-label" />`,
                    `<CheckBox variant="${variants[1]}" color="${colorsCustom[2]}" size="sm" labelLeft="left-label" />`,
                    `<CheckBox variant="${variants[1]}" color="${colorsCustom[2]}" size="sm" labelRight="right-label" />`
                ].join("\n")}
            >
                <ButtonGrid>
                    <div className="flex flex-col m-auto">
                        <CheckBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size="sm"
                            labelTop="top-label"
                            className="mb-3"
                        />
                        <CheckBox
                            variant={variants[1]}
                            color={colorsCustom[2]}
                            size="sm"
                            labelLeft="left-label"
                            className="mb-3"
                        />
                        <CheckBox
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
                code={`<CheckBox variant="dash" color="${colorsCustom[2]}" size="sm" labelTop="top-label" labelLeft="left-label" labelRight="right-label" />`}
            >
                <ButtonGrid>
                    <CheckBox
                        variant="dash"
                        color={colorsCustom[2]}
                        size="sm"
                        labelTop="top-label"
                        labelLeft="left-label"
                        labelRight="right-label"
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}

InfoCheckBox.meta = {
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