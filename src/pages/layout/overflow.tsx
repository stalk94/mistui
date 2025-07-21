import { Overflow, Button } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';

const direction = ["row", "column"];
const jshoriz = ["start", "left", "center", "end"];
const jsvertical = ["start", "center", "end"];


export default function InfoOverflow(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
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
    children: baseMeta.children, 
    className: baseMeta.className, 
    isExpand: {
        values: ['boolean'],
        type: 'boolean',
        default: 'false',
        description: ''
    }, 
    direction: {
        values: direction,
        default: 'row'
    }, 
    justifyHorizontal: {
        values: jshoriz,
        default: 'start'
    }, 
    justifyVertical: {
        values: jsvertical,
        default: 'end'
    }, 
    style: baseMeta.style, 
    onOverflow: {
        values: [''],
        type: 'func',
        description: ''
    }, 
    overflowMap: {
        values: ['any[]'],
        type: 'array',
        description: ''
    }
}