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
                key='overflow'
                title="Overflow" 
                description="" 
                code={`
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
                `}
            >
                <div className="flex justify-center">
                    <div className='max-w-120'>
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
                    </div>
                </div>
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
        description: 'Expands all child items to evenly fill available space horizontally or vertically.'
    },
    direction: {
        values: direction,
        type: 'enum',
        default: 'row',
        description: 'Sets the layout direction of items: horizontal (`row`) or vertical (`column`).'
    },
    justifyHorizontal: {
        values: jshoriz,
        type: 'enum',
        default: 'start',
        description: 'Controls horizontal alignment of content within each item (e.g., `start`, `center`, `end`).'
    },
    justifyVertical: {
        values: jsvertical,
        type: 'enum',
        default: 'end',
        description: 'Controls vertical alignment of content within each item (e.g., `start`, `center`, `end`).'
    },
    style: baseMeta.style,
    onOverflow: {
        values: [''],
        type: 'func',
        description: 'Callback function triggered when items overflow the container. Receives an array of hidden items or mapped data.'
    },
    overflowMap: {
        values: ['any[]'],
        type: 'array',
        description: 'Custom mapping array corresponding to each child item, used by `onOverflow` callback.'
    }
}