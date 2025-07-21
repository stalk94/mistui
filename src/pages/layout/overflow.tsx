import { Overflow, Button } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';


const direction = ["row", "column"];
const jshoriz = ["start", "left", "center", "end"];
const jsvertical = ["start", "center", "end"];


export default function InfoOverflow() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="Overflow" 
                description="кнопка" 
                code={`<Accordion></Accordion>`}
            >
                <Grid className="justify-center">
                    <Overflow
                        onOverflow={(items) => console.log('overflow: ', items)}
                    >
                        <Button
                            shadow='sm'
                            size='sm'
                            style={{ margin: 3 }}
                        >
                            button-1
                        </Button>
                        <Button
                            shadow='sm'
                            style={{ margin: 3 }}
                        >
                            button-2
                        </Button>
                        <Button
                            shadow='sm'
                            size='md'
                            style={{ margin: 3 }}
                        >
                            button-3
                        </Button>
                    </Overflow>
                </Grid>
            </Section>
        </div>
    );
}


InfoOverflow.meta = {
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
    isExpand: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: ''
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}