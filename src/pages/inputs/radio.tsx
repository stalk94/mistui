import { RadioBox } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoRadioBox(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Basic radio box"
                code={`<RadioBox value={true} />`}
            >
                <div className="flex justify-center">
                    <RadioBox value={true} />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="Different visual styles"
                code={variants
                    .map(
                        (variant) =>
                            `<RadioBox variant="${variant}" value={true} />`
                    )
                    .join("\n")}
            >
                <div className="flex justify-center">
                    {variants.map((variant, i) => (
                        <RadioBox
                            key={i}
                            variant={variant}
                            size="sm"
                            value={true}
                            className="mr-2"
                        />
                    ))}
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes
                    .map(
                        (size) =>
                            `<RadioBox size="${size}" value={true} />`
                    )
                    .join("\n")}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <RadioBox
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
                    .map(
                        (color) =>
                            `<RadioBox color="${color}" variant="outline" value={true} />`
                    )
                    .join("\n")}
            >
                <ButtonGrid>
                    {colors.map((color, i) => (
                        <RadioBox
                            key={i}
                            variant="outline"
                            color={color}
                            size="sm"
                            value={true}
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoRadioBox.meta = {
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