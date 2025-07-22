import {NumberInput } from '@/components/inputs';
import { Section, Grid as ButtonGrid, variantsText, sizes, colors } from '../helpers';
import { inputsMeta } from '../meta';


export default function InfoNumberInput(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="Basic number input"
                code={`<NumberInput placeholder="Enter a number" />`}
            >
                <div className="flex justify-center">
                    <NumberInput size="sm" placeholder="Enter a number" />
                </div>
            </Section>

            {/* with icons */}
            <Section
                title="With Icons"
                description="With enable increment and decrement icons"
                code={`<NumberInput iconEnable placeholder="With icons" />`}
            >
                <div className="flex justify-center">
                    <NumberInput
                        size="sm"
                        value={3}
                        iconEnable
                        placeholder="With icons"
                    />
                </div>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description="Different input sizes"
                code={sizes
                    .map((s) => `<NumberInput size="${s}" placeholder="${s}" />`)
                    .join("\n")}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <NumberInput
                            key={size}
                            size={size}
                            iconEnable
                            placeholder={size}
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
                        (c) =>
                            `<NumberInput color="${c}" iconEnable placeholder="${c}" />`
                    )
                    .join("\n")}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <NumberInput
                            key={color}
                            size="sm"
                            color={color}
                            iconEnable
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoNumberInput.meta = {
    ...inputsMeta,
    step: {
        values: ['number'],
        type: 'number',
        description: 'Шаг при инкременте и декременте.'
    },
    iconEnable: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Включает кнопки плюс/минус.'
    },
}