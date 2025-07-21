import { Splitter, SplitterPanel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';



export default function InfoSplitter(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="Splitter" description="кнопка" code={`<Splitter></Splitter>`}>
                <Grid className="justify-center">
                    <Splitter
                        style={{ height: 400, width: 500 }}
                    >
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* vertical */}
            <Section
                title="Splitter vertical"
                description="разные стили"
                code={''}
            >
                <Grid className="justify-center">
                    <Splitter
                        orientation='vertical'
                        style={{ height: 400, width: 500 }}
                    >
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* nested */}
            <Section 
                title="Nested Panels" 
                description="кнопка" 
                code={`<Splitter>Splitter</Splitter>`}
            >
                <Grid className="justify-center">
                    <Splitter
                        style={{ height: 400, width: 500 }}
                    >
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel size={80}>
                            <Splitter orientation="vertical">
                                <SplitterPanel className="flex justify-center items-center" size={15}>
                                    Panel 2
                                </SplitterPanel>
                                <SplitterPanel size={85}>
                                    <Splitter>
                                        <SplitterPanel className="flex justify-center items-center" size={20}>
                                            Panel 3
                                        </SplitterPanel>
                                        <SplitterPanel className="flex justify-center items-center" size={80}>
                                            Panel 4
                                        </SplitterPanel>
                                    </Splitter>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* disabled */}
            <Section title="Disabled resize" description="кнопка" code={`<Splitter></Splitter>`}>
                <Grid className="justify-center">
                    <Splitter
                        style={{ height: 400, width: 500 }}
                        disabled
                    >
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* color */}
            <Section title="Custom color" description="кнопка" code={`<Splitter></Splitter>`}>
                <Grid className="justify-center">
                    <Splitter
                        style={{ height: 400, width: 500 }}
                        color='success'
                    >
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>
        </div>
    );
}


InfoSplitter.meta = {
    ...baseMeta,
    ...orientationMeta,
    children: {
        values: ['SplitterPanel[]', 'SplitterPanel', 'Splitter', 'Splitter[]'],
        type: 'object',
        description: ''
    },
    disabled: {
        values: ['any'],
        type: 'boolean',
        default: 'false',
        description: ''
    }
}