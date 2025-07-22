import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, sizes, variants, colorsCustom } from '../helpers';
import { BaseInput } from '@/components/inputs';
import { inputsMeta } from '../meta';


// ! код примеров нет
export default function InfoInput(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="Base"
                description="simple input with icons and label"
                code={`
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                        labelLeft="🔍︎"
                        labelTop="label"
                    />
                `}
            >
                <div className="flex justify-center">
                    <BaseInput
                        type="text"
                        size="sm"
                        placeholder="placeholder"
                        labelLeft="🔍︎"
                        labelTop="label"
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description=""
                code={variants
                    .map((v) => `<BaseInput variant="${v}" placeholder="${v}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant) => (
                        <BaseInput
                            key={variant}
                            type="text"
                            size="sm"
                            placeholder={variant}
                            variant={variant}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* colors */}
            <Section
                title="Theme Colors"
                description=""
                code={colors
                    .map((c) => `<BaseInput color="${c}" variant="outline" placeholder="${c}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <BaseInput
                            key={color}
                            variant="outline"
                            color={color}
                            type="text"
                            size="sm"
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Sizes"
                description=""
                code={sizes
                    .map((size) => `<BaseInput size="${size}" placeholder="${size}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {sizes.map((size) => (
                        <BaseInput
                            key={size}
                            size={size}
                            placeholder={size}
                            labelTop={size}
                            value={size === 'xs' ? 'easter egg' : ''}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom colors */}
            <Section
                title="Custom Colors"
                description=""
                code={variants
                    .map((v, i) => `<BaseInput variant="${v}" color="${colorsCustom[i]}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colorsCustom[i]}
                            placeholder={colorsCustom[i]}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* labels left */}
            <Section
                title="Label Left"
                description="label left"
                code={`<BaseInput labelLeft="🔍︎" />`}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colors[i]}
                            placeholder={colorsCustom[i]}
                            labelLeft="🔍︎"
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* labels right */}
            <Section
                title="Label Right"
                description="label right"
                code={`<BaseInput labelRight="✔️" />`}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colors[i]}
                            placeholder={colorsCustom[i]}
                            labelRight="✔️"
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* labels top */}
            <Section
                title="Label Top"
                description="label-top"
                code={`<BaseInput labelTop="Label" />`}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colors[i]}
                            placeholder={colorsCustom[i]}
                            labelTop={`${variant} ${colors[i]}`}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* mixed labels */}
            <Section
                title="Mixed Labels"
                description=""
                code={`<BaseInput labelTop="..." labelLeft="🔍︎" labelRight="🔍︎" />`}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colors[i]}
                            placeholder={colorsCustom[i]}
                            labelLeft="🔍︎"
                            labelRight="🔍︎"
                            labelTop={`${variant} ${colors[i]}`}
                        />
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}

InfoInput.meta = {
    ...inputsMeta
}