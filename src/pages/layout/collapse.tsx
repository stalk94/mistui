import { Collapse } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';


const icons = ["plus", "arrow"];


export default function InfoCollapse() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="Collapse" 
                description="кнопка" 
                code={``}
            >
                <Grid className="justify-center">
                    <Collapse
                        title='title-1'
                        content='content'
                    />
                </Grid>
            </Section>
        </div>
    );
}


InfoCollapse.meta = {
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