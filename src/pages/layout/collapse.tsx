import { Collapse } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';

const icons = ['none', "plus", "arrow"];


export default function InfoCollapse(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
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
    ...baseMeta,
    classNameTitle: baseMeta.className,
    styleTitle: baseMeta.style,
    title: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    content: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    icon: {
        values: icons,
        type: 'enum',
        default: 'none',
        description: ''
    }
}