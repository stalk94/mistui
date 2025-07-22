import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { baseMeta } from '../meta';
import { Typography } from '@/components/text';


const trackingVariants = [ 'tighter','tight', 'normal', 'wide', 'wider', 'widest'];


export default function InfoTypography(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="base" description=""
                code={`<Typography>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Typography>`}
            >
                <div className="flex justify-center">
                    <Typography variant='body2' color='white'>
                        This converter creates fancy symbols. The explanation starts with unicode; an industry standard which
                    </Typography>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description=""
                code={variants
                    .map((variant) => `<Typography variant="${variant}">${variant}</Typography>`)
                    .join('\n')
                }
            >
                <ButtonGrid>
                    {variants.map((variant, i) => (
                        <Typography key={i} variant={variant}>
                            {variant}
                        </Typography>
                    ))}
                </ButtonGrid>
            </Section>

            {/* base color variants */}
            <Section
                title="base variants theme colors"
                description="system theme color"
                code={colors
                    .map((color) => `<Typography color="${color}">'${color}'</Typography>`)
                    .join('\n')}
            >
                <ButtonGrid>
                    {colors.map((color) => (
                        <Typography key={color} color={color}>
                            {color}
                        </Typography>
                    ))}
                </ButtonGrid>
            </Section>

            {/* custom color */}
            <Section
                title="custom color"
                description="custom color props"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Typography variant="${variant}" color="${colorsCustom[i]}">${variant}</Typography>`
                    )
                    .join('\n')}
            >
                <ButtonGrid className='flex-col flex m-auto'>
                    {variants.map((variant, i) => (
                        <div key={i} className="flex flex-col m-auto">
                            <Typography
                                key={variant}
                                variant='h6'
                                color={colorsCustom[i]}
                                tracking='tighter'
                            >
                                {variant}
                            </Typography>
                        </div>
                    ))}
                </ButtonGrid>
            </Section>

            {/* shadows */}
            <Section
                title="shadow"
                description=""
                code={textShadows
                    .map(
                        (shadow, i) =>
                            `<Typography color="${colorsCustom[i]}" variant="${variants[i]}" shadow="${shadow}">${shadow}</Typography>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {textShadows.map((shadow, i) => (
                        <Typography
                            key={i}
                            color={colorsCustom[i]}
                            variant={variants[i]}
                            shadow={shadow}
                        >
                            {shadow}
                        </Typography>
                    ))}
                </ButtonGrid>
            </Section>

            { /* shadows custom color */ }
            <Section
                title="shadow custom color"
                description="text shadow color (e.g., `rgba(0,0,0,0.3)`) or color theme variants."
                code={colorsCustom
                    .map(
                        (colorShadow, i) =>
                            `<Typography color="${colorsCustom[i]}" color='white' shadow="sm" colorShadow="${colorShadow}">${colorShadow}</Typography>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {colorsCustom.map((colorShadow, i) => (
                        <Typography
                            key={i}
                            color='white'
                            variant='h6'
                            shadow='sm'
                            colorShadow={colorShadow}
                        >
                            {colorShadow}
                        </Typography>
                    ))}
                </ButtonGrid>
            </Section>

            {/* tracking */}
            <Section
                title="tracings (later spacing)"
                description=""
                code={trackingVariants
                    .map(
                        (tr, i) =>
                            `<Typography variant='caption' color='white' tracking="${tr}">${tr}</Typography>`
                    )
                    .join('\n')}
            >
                <ButtonGrid>
                    {trackingVariants.map((tr, i) => (
                        <Typography
                            key={i}
                            color='white'
                            variant='caption'
                            tracking={tr}
                        >
                            { tr }
                        </Typography>
                    ))}
                </ButtonGrid>
            </Section>
        </div>
    );
}


InfoTypography.meta = {
    ...baseMeta,
    variant: {
        values: variants,
        type: 'enum',
        description: 'Text variant that defines style and size.',
    },
    fontStyle: {
        values: ['normal', 'italic'],
        type: 'enum',
        description: 'Font style: normal or italic.',
    },
    fontFamily: {
        values: ['string'],
        type: 'string',
        description: 'Font name from the available font families.',
    },
    fontSize: {
        values: ['string', 'number'],
        type: 'enum',
        description: 'Font size (e.g., 16 or "1.2rem").',
    },
    colorShadow: {
        values: ['string'],
        type: 'string',
        description: 'Text shadow color (e.g., "rgba(0,0,0,0.3)") or color theme variants.',
    }
}