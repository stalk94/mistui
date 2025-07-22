import Divider from '@/components/utils/divider';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';

const variants = ["solid", "dashed", "dotted"];
const positions = ['start', 'center', 'end'];


export default function InfoDivider(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="Divider" description="кнопка" code={`<Divider></Divider>`}>
                <div className="w-full">
                    <Divider></Divider>
                </div>
            </Section>

            {/* text */}
            <Section 
                title="Divider custom children" 
                description="кнопка" 
                code={`<Divider>divider</Divider>`}
            >
                <div className="w-full">
                    <Divider>divider</Divider>
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Divider variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Divider size="sm" variant="${variant}">${variant}</Divider>`)
                    .join('\n')
                }
            >
                <Grid className="w-full flex-col">
                    {variants.map((variant) => (
                        <Divider  
                            key={variant} 
                            variant={variant}
                        >
                            {variant}
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* orientation */}
            <Section
                title="Divider vertical"
                description="разные цвета"
                code={''}
            >
                <Grid className="w-full h-40">
                    <Divider 
                        orientation='vertical'
                    >
                        vertical
                    </Divider>
                </Grid>
            </Section>

            {/* positions */}
            <Section
                title="Divider custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Divider size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Divider>`
                    )
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {positions.map((position, i) => (
                        <Divider
                            size="sm"
                            key={position}
                            position={position}
                            shadow="xs"
                        >
                            { position }
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* colors */}
            <Section
                title="Divider colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Divider size="sm" color="${color}" shadow="sm">${color}</Divider>`)
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {colors.map((color) => (
                        <Divider size="sm" key={color} color={color} shadow="sm">
                            {color}
                        </Divider>
                    ))}
                </Grid>
            </Section>

            {/* custom colors*/}
            <Section
                title="Divider custom color"
                description="цвета и стили"
                code={variants
                    .map(
                        (variant, i) =>
                            `<Divider size="sm" variant="${variant}" color="${colorsCustom[i]}" shadow="xs">${variant}</Divider>`
                    )
                    .join('\n')}
            >
                <Grid className="w-full flex-col">
                    {variants.map((variant, i) => (
                        <Divider
                            size="sm"
                            key={variant}
                            variant={variant}
                            color={colorsCustom[i]}
                            shadow="xs"
                        >
                            {variant}
                        </Divider>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


InfoDivider.meta = {
    ...baseMeta,
    ...orientationMeta,
    size: {
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        type: 'enum',
        default: 'xs',
        description: baseMeta.size.description
    },
    variant: {
        values: variants,
        type: 'enum',
        default: 'solid',
        description: ''
    },
    position: {
        values: positions,
        type: 'enum',
        default: 'center',
        description: ''
    }
}