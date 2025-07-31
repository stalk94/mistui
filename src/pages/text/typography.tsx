import { Section, Grid as ButtonGrid, variantsText } from '../helpers';
import { colors, colorsCustom, variantsText as variants, textShadows } from '../helpers';
import { baseMeta } from '../meta';
import { Typography } from '@/components/text';


const trackingVariants = [ 'tighter','tight', 'normal', 'wide', 'wider', 'widest'];


export default function InfoTypography(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Typography as='div' variant='caption'>
                Supports a polymorphic as prop, allowing rendering of any HTML element (e.g., p, span, h1, etc.).
                Uses theme-configured typography variants (variant), applying Tailwind-based classes like body2, h1, subtitle. <br/><br/>

                Allows customizing text styles: <br/>
                - Color (color) sourced from the theme's color variants <br/>
                - Font style (fontStyle), e.g., normal or italic <br/>
                - Font family (fontFamily) <br/>
                - Font size (fontSize) can be set manually <br/><br/>

                Supports text shadows: <br/>
                - Predefined shadow styles are configured in the theme and selected via the shadow prop <br/>
                - Custom shadow color can be controlled via colorShadow <br/><br/>

                Controls letter spacing (tracking) using preset values from the theme or custom inputs<br/>
                Easily extendable via className(Tailwind, etc.) and inline style prop<br/>
            </Typography>

            {/* default */}
            <Section 
                title="base" 
                description=""
                code={`<Typography>'This converter creates fancy symbols. The explanation starts with unicode; an industry standard which'</Typography>`}
            >
                <div className="flex">
                    <Typography color='white'>
                        This converter creates fancy symbols. The explanation starts with unicode; an industry standard which
                    </Typography>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description="all variants preview"
                code={variants
                    .map((variant) => `<Typography variant="${variant}">${variant}</Typography>`)
                    .join('\n')
                }
            >
                <ButtonGrid className='flex-col justify-center'>
                    {variants.map((variant, i) => (
                        <Typography color='white' key={i} variant={variant}>
                            {variant}: Lorem ipsum dolor sit amet
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
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </div>
                    ))}
                </ButtonGrid>
            </Section>

            {/* shadows */}
            <Section
                title="shadow"
                description="example of using different shadow options props"
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
                description="laterSpacing is a typography setting that defines additional spacing between lines of text appearing sequentially (e.g., during animations or progressive rendering). It helps improve readability and the visual flow of textual content"
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
    as: {
        values: ['any html tag name'],
        type: 'enum',
        description: 'html tag name (polymorphic)',
        default: 'p'
    },
    color: {
        ...baseMeta.color,
        default: 'primary'
    },
    variant: {
        values: variants,
        type: 'enum',
        description: 'Text variant that defines style and size.',
        default: 'body2'
    },
    fontStyle: {
        values: ['normal', 'italic'],
        type: 'enum',
        default: 'normal',
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
    },
    tracking: {
        values: ["tighter", "tight", "normal", "wide", "wider", "widest"],
        type: 'enum',
        description: 'later Spacing',
    }
}