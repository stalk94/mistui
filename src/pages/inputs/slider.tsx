import { SliderInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, colorsCustom, sizes, colors, variants } from '../helpers';
import { inputsMeta } from '../meta';



export default function InfoSlider(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                className="overflow-visible"
                title="Slider"
                description="Basic slider component"
                code={`<SliderInput />`}
            >
                <div className="flex justify-center mt-2 overflow-visible">
                    <SliderInput color='secondary'/>
                </div>
            </Section>

            {/* disabled form */}
            <Section
                className="overflow-visible"
                title="Disabled form"
                description="Disabled form visibility"
                code={`<SliderInput disableForm />`}
            >
                <div className="flex justify-center">
                    <SliderInput disableForm />
                </div>
            </Section>

            {/* variants */}
            <Section
                className="overflow-visible"
                title="Variants"
                description="Different visual styles"
                code={`<SliderInput variant="dash" />\n<SliderInput variant="outline" />`}
            >
                <ButtonGrid className="flex-col w-100 m-auto">
                    <SliderInput variant="dash" disableForm size="sm" />
                    <SliderInput variant="outline" disableForm size="sm" className="mt-4" />
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                className="overflow-visible"
                title="Sizes"
                description="Different sizes"
                code={sizes
                    .map((size) => `<SliderInput size="${size}" />`)
                    .join("\n")}
            >
                <ButtonGrid className="flex-col w-100 m-auto">
                    {sizes.map((size) => (
                        <SliderInput
                            key={size}
                            size={size}
                            disableForm
                            variant="outline"
                            labelTop={size}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                className="overflow-visible"
                title="Colors"
                description="Theme colors"
                code={colors
                    .map((color) => `<SliderInput color="${color}" />`)
                    .join("\n")}
            >
                <ButtonGrid className="flex-col w-100 m-auto">
                    {colors.map((color, i) => (
                        <SliderInput
                            key={i}
                            disableForm
                            variant="outline"
                            color={color}
                            labelTop={color}
                            size="sm"
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* label positions */}
            <Section
                className="overflow-visible"
                title="Label positions"
                description="Top / Left / Right label positions"
                code={`<SliderInput labelTop="top" labelLeft="left" labelRight="right" />`}
            >
                <ButtonGrid>
                    <SliderInput
                        variant="dash"
                        color={colorsCustom[2]}
                        size="sm"
                        labelTop="Top"
                        labelRight="Right"
                        labelLeft="Left"
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoSlider.meta = {
    ...inputsMeta
}