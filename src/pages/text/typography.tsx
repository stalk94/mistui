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
            <Section title="Typography" description="кнопка"
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
                title="Typography variants"
                description="разные стили"
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
                title="Typography base variants theme colors"
                description="разные цвета"
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
                title="Typography custom color"
                description="цвета и стили"
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
                title="Typography shadow variants"
                description="цвета и стили"
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
                title="Typography shadow custom color"
                description="цвета и стили"
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
                title="Typography tracings (later spacing)"
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
        description: 'Вариант текста, определяющий стиль и размер.',
    },
    fontStyle: {
        values: ['normal', 'italic'],
        type: 'enum',
        description: 'Стиль шрифта: обычный или курсив.',
    },
    fontFamily: {
        values: ['string'],
        type: 'string',
        description: 'Название шрифта из набора доступных семейств.',
    },
    fontSize: {
        values: ['string', 'number'],
        type: 'enum',
        description: 'Размер шрифта (например, 16 или "1.2rem").',
    },
    colorShadow: {
        values: ['string'],
        type: 'string',
        description: 'Цвет тени текста (например, "rgba(0,0,0,0.3)").',
    }
}