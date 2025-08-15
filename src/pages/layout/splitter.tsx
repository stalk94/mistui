import { Splitter, SplitterPanel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoSplitter(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* Default horizontal splitter */}
            <Section
                title="Splitter"
                description="Basic horizontal splitter"
                code={`
                    <Splitter style={{ height: 400, width: 500 }}>
                        <SplitterPanel size={20} minSize={10}>Panel 1</SplitterPanel>
                        <SplitterPanel size={80}>Panel 2</SplitterPanel>
                    </Splitter>
                `}
            >
                <Grid className="justify-center">
                    <Splitter style={{ height: 400, width: 500 }}>
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* Vertical splitter */}
            <Section
                title="Vertical Splitter"
                description="Splitter with vertical orientation"
                code={`
                    <Splitter orientation="vertical" style={{ height: 400, width: 500 }}>
                        <SplitterPanel size={20} minSize={10}>Panel 1</SplitterPanel>
                        <SplitterPanel size={80}>Panel 2</SplitterPanel>
                    </Splitter>
                `}
            >
                <Grid className="justify-center">
                    <Splitter orientation="vertical" style={{ height: 400, width: 500 }}>
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* Nested panels */}
            <Section
                title="Nested Panels"
                description="Splitter inside another splitter"
                code={`
                    <Splitter style={{ height: 400, width: 500 }}>
                        <SplitterPanel size={20} minSize={10}>Panel 1</SplitterPanel>
                        <SplitterPanel size={80}>
                            <Splitter orientation="vertical">
                            <SplitterPanel size={15}>Panel 2</SplitterPanel>
                            <SplitterPanel size={85}>
                                <Splitter>
                                <SplitterPanel size={20}>Panel 3</SplitterPanel>
                                <SplitterPanel size={80}>Panel 4</SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                `}
            >
                <Grid className="justify-center">
                    <Splitter style={{ height: 400, width: 500 }}>
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

            {/* Disabled resize */}
            <Section
                title="Disabled Resize"
                description="Splitter with resizing disabled"
                code={`
                    <Splitter disabled style={{ height: 400, width: 500 }}>
                        <SplitterPanel size={20} minSize={10}>Panel 1</SplitterPanel>
                        <SplitterPanel size={80}>Panel 2</SplitterPanel>
                    </Splitter>
                `}
            >
                <Grid className="justify-center">
                    <Splitter disabled style={{ height: 400, width: 500 }}>
                        <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                            Panel 1
                        </SplitterPanel>
                        <SplitterPanel className="flex justify-center items-center" size={80}>
                            Panel 2
                        </SplitterPanel>
                    </Splitter>
                </Grid>
            </Section>

            {/* Custom color */}
            <Section
                title="Custom Color"
                description="Splitter with custom color"
                code={`
                    <Splitter color="success" style={{ height: 400, width: 500 }}>
                        <SplitterPanel size={20} minSize={10}>Panel 1</SplitterPanel>
                        <SplitterPanel size={80}>Panel 2</SplitterPanel>
                    </Splitter>
                `}
            >
                <Grid className="justify-center">
                    <Splitter color="success" style={{ height: 400, width: 500 }}>
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
        description: 'disabled resize all SplitterPanel'
    },
    hidden: {
        values: ['any'],
        type: 'boolean',
        description: 'disabled visible borders'
    }
}