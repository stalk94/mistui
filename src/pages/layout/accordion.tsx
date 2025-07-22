import { Accordion } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


const variants = ["contained", "outline", "dash", "soft", "ghost"];
const items = [
    {
        content: <div>content</div>,
        title: 'title-1'
    }, {
        content: 'content',
        title: 'title-2'
    }
];


export default function InfoAccordion(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* Default */}
            <Section
                title="Accordion"
                description="Basic accordion component"
                code={`<Accordion items={items} />`}
            >
                <Grid className="justify-center">
                    <Accordion items={items} />
                </Grid>
            </Section>

            {/* Variants */}
            <Section
                title="Accordion Variants"
                description="Different styles"
                code={variants.map(v => `<Accordion variant="${v}" items={items} />`).join('\n')}
            >
                <Grid className="flex-col justify-center">
                    {variants.map((variant) => (
                        <Accordion 
                            key={variant} 
                            items={items} 
                            variant={variant} 
                        />
                    ))}
                </Grid>
            </Section>

            {/* Colors */}
            <Section
                title="Custom Colors"
                description="Different color themes"
                code={colors.map((color, i) => `<Accordion variant="${variants[i]}" color="${color}" items={items} />`).join('\n')}
            >
                <Grid className="flex-col justify-center">
                    {colors.map((color, i) => (
                        <Accordion
                            key={color}
                            items={items}
                            variant={variants[i]}
                            color={color}
                        />
                    ))}
                </Grid>
            </Section>

            {/* Sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes.map((size, i) => `<Accordion variant="${variants[i]}" size="${size}" items={items} />`).join('\n')}
            >
                <Grid className="flex-col justify-center">
                    {sizes.map((size, i) => (
                        <Accordion
                            key={size}
                            items={items}
                            variant={variants[i]}
                            size={size}
                        />
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


InfoAccordion.meta = {
    ...baseMeta,
    variant: {
        values: variants,
        type: 'enum',
        default: 'contained',
        description: ''
    },
    styleTitle: baseMeta.style
}