import { Accordion } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';


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


export default function InfoAccordion() {
    return (
        <div className="p-6 space-y-8 ">
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
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    variant: {
        values: ["contained", "outline", "dash", "soft", "ghost"],
        default: 'contained',
        type: 'enum',
        description: ''
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}