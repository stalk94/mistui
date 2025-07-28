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
                description="simple input"
                code={`
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                    />
                `}
            >
                <div className="flex justify-center">
                    <BaseInput
                        size="sm"
                        placeholder="placeholder"
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Variants"
                description="in the example is used `color` default"
                code={variants
                    .map((v) => `<BaseInput variant="${v}" placeholder="${v}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant) => variant!=='link' && (
                        <BaseInput
                            key={variant}
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

            {/* custom colors */}
            <Section
                title="Custom Colors"
                description="passed custom color and `dash` variant to props"
                code={colorsCustom
                    .map((v, i) => `<BaseInput size="sm" variant="dash" color="${v}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colorsCustom.map((color, i) => (
                        <BaseInput
                            key={color}
                            size="sm"
                            variant='dash'
                            color={color}
                            placeholder={color}
                        />
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom colors or random variants */}
            <Section
                title="variants and color"
                description="passed themes color and variant to props"
                code={variants
                    .map((v, i) => `<BaseInput variant="${v}" color="${colorsCustom[i]}" />`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {variants.map((variant, i) => variant!=='link' && (
                        <BaseInput
                            key={variant}
                            size="sm"
                            variant={variant}
                            color={colorsCustom[i]}
                            placeholder={variant}
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
                            value={size === 'xs' ? 'easter egg' : ''}
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
                    <BaseInput
                        size="sm"
                        variant='dash'
                        color='secondary'
                        placeholder={'placeholder'}
                        labelLeft="🔍︎"
                    />
                </ButtonGrid>
            </Section>

            {/* labels right */}
            <Section
                title="Label Right"
                description="label right"
                code={`<BaseInput labelRight="✔️" variant='dash' color='secondary'/>`}
            >
                <ButtonGrid>
                    <BaseInput
                        size="sm"
                        variant='dash'
                        color='secondary'
                        placeholder={'placeholder'}
                        labelRight="✔️"
                    />
                </ButtonGrid>
            </Section>

            {/* labels top */}
            <Section
                title="Label Top"
                description="label top and mixery"
                code={`<BaseInput labelTop="label top" color='secondary' variant='outline'/>`}
            >
                <ButtonGrid>
                    <BaseInput
                        size="sm"
                        variant='outline'
                        color='secondary'
                        placeholder='placeholder'
                        labelTop={`label top`}
                    />
                    <BaseInput
                        size="sm"
                        placeholder={'placeholder'}
                        labelLeft="🔍︎"
                        labelRight="🔍︎"
                        color='secondary'
                        labelTop={`label mixery`}
                    />
                </ButtonGrid>
            </Section>
        </div>
    );
}

InfoInput.meta = {
    ...inputsMeta
}