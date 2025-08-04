import { Collapse } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';

const icons = ['none', "plus", "arrow"];

// ! примеры стилизованные
export default function InfoCollapse(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            {/* default */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    <Collapse
                        title='title-1'
                        content='content'
                    />
                `}
            >
                <Grid className="justify-center">
                    <Collapse
                        title='title-1'
                        content='content'
                    />
                </Grid>
            </Section>

            {/* icon */}
            <Section 
                title="icon" 
                description="icon arrow" 
                code={`
                    <Collapse
                        title='title-1'
                        content='content'
                        icon='arrow'
                    />
                `}
            >
                <Grid className="justify-center">
                    <Collapse
                        title='title-1'
                        content='content'
                        icon='arrow'
                    />
                </Grid>
            </Section>

            <Section 
                title="icon" 
                description="icon plus/minus" 
                code={`
                    <Collapse
                        title='title-1'
                        content='content'
                        icon='plus'
                    />
                `}
            >
                <Grid className="justify-center">
                    <Collapse
                        title='title-1'
                        content='content'
                        icon='plus'
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
        description: 'Adds plus/minus or chevron icon or non icon'
    },
    open: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Force open'
    }
}