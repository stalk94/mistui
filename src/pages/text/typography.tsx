import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { Typography } from '@/components/text';


const trackingVariants = [ 'tighter','tight', 'normal', 'wide', 'wider', 'widest'];


export default function InfoTypography() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section title="Typography" description="кнопка"
                code={`<Typography>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Typography>`}
            >
                <div className="flex justify-center">
                    <Typography>
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
                        <div className="flex flex-col m-auto">
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
    children: {
        values: ['React.ReactNode'],
        type: 'node',
        description: 'Содержимое компонента. Может быть текстом или JSX-элементом.',
    },
    variant: {
        values: Object.keys(variants),
        type: 'enum',
        description: 'Вариант текста, определяющий стиль и размер.',
    },
    className: {
        values: ['string'],
        type: 'string',
        description: 'Дополнительные CSS классы для компонента.',
    },
    style: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Инлайн-стили, применяемые к компоненту.',
    },
    fontStyle: {
        values: ['normal', 'italic'],
        type: 'enum',
        description: 'Стиль шрифта: обычный или курсив.',
    },
    fontFamily: {
        values: Object.keys(variants),
        type: 'enum',
        description: 'Название шрифта из набора доступных семейств.',
    },
    fontSize: {
        values: ['string', 'number'],
        type: 'union',
        description: 'Размер шрифта (например, 16 или "1.2rem").',
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        type: 'enum',
        description: 'Размер тени текста.',
    },
    colorShadow: {
        values: ['string'],
        type: 'string',
        description: 'Цвет тени текста (например, "rgba(0,0,0,0.3)").',
    }
}