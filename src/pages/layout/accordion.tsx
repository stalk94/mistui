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
            { tab }
            {/* default */}
            <Section title="Accordion" description="кнопка" code={`<Accordion></Accordion>`}>
                <Grid className="justify-center">
                    <Accordion
                        items={items}
                    />
                </Grid>
            </Section>

            {/* variant */}
            <Section
                title="Accordion variants"
                description="разные стили"
                code={''}
            >
                <Grid className="flex-col justify-center">
                    {variants.map((variant, i)=>
                        <Accordion
                            key={variant}
                            items={items}
                            variant={variant}
                        />
                    )}
                </Grid>
            </Section>

            {/* color */}
            <Section title="Custom color" description="кнопка" code={`<Accordion></Accordion>`}>
                <Grid className="flex-col justify-center">
                    {colors.map((color, i)=>
                        <Accordion
                            key={color}
                            items={items}
                            variant={variants[i]}
                            color={color}
                        />
                    )}
                </Grid>
            </Section>

            {/* sizes */}
            <Section title="Sizes" description="кнопка" code={`<Accordion></Accordion>`}>
                <Grid className="flex-col justify-center">
                    {sizes.map((size, i)=>
                        <Accordion
                            key={size}
                            items={items}
                            variant={variants[i]}
                            size={size}
                        />
                    )}
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