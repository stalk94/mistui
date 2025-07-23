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
                code={`<Accordion shadow='lg' items={items} />`}
            >
                <Grid className="justify-center">
                    <Accordion shadow='lg' items={items} />
                </Grid>
            </Section>

            {/* Variants */}
            <Section
                title="Variants"
                description=""
                code={variants.map(v => `<Accordion shadow='lg' variant="${v}" items={items} />`).join('\n')}
            >
                <Grid className="flex justify-center">
                    {variants.map((variant) => (
                        <div key={variant} className='flex w-120 m-auto'>
                            <Accordion 
                                shadow='lg'
                                key={variant} 
                                items={items} 
                                variant={variant} 
                            />
                        </div>
                    ))}
                </Grid>
            </Section>

            {/* Colors */}
            <Section
                title="Custom Colors"
                description="custom color and variants"
                code={colors.map((color, i) => `<Accordion shadow='lg' variant="${variants[i]}" color="${color}" items={items} />`).join('\n')}
            >
                <Grid className="flex justify-center">
                    {colors.map((color, i) => (
                        <div key={color} className='flex w-120 m-auto'>
                            <Accordion
                                shadow='lg'
                                items={items}
                                variant={variants[i]}
                                color={color}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>

            {/* Sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes.map((size, i) => `<Accordion shadow='lg' variant="${variants[i]}" size="${size}" items={items} />`).join('\n')}
            >
                <Grid className="flex justify-center">
                    {sizes.map((size, i) => (
                        <div key={size} className='flex w-120 m-auto'>
                            { size }:
                            <Accordion
                                shadow='lg'
                                items={items}
                                variant={variants[i]}
                                size={size}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}


InfoAccordion.meta = {
    ...baseMeta,
    color: {
        ...baseMeta.color,
        default: 'neutral'
    },
    variant: {
        values: variants,
        type: 'enum',
        default: 'contained',
        description: ''
    },
    styleTitle: baseMeta.style
}