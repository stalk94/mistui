import { Card, Button, Drawer } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoDrawer(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* left */}
            <Section 
                title="basic" 
                description="" 
                code={`

                `}
            >
                <Grid className="w-120 m-auto">
                    <Drawer
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                style={{ margin: 3 }}
                                color='success'
                                variant='dash'
                            >
                                click my
                            </Button>
                        }
                    >
                        <>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </>
                    </Drawer>
                </Grid>
            </Section>

            {/* top */}
            <Section 
                title="top position" 
                description="" 
                code={`

                `}
            >
                <Grid className="w-120 m-auto">
                    <Drawer
                        position='top'
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                style={{ margin: 3 }}
                                color='error'
                                variant='dash'
                            >
                                top
                            </Button>
                        }
                    >
                        <>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </>
                    </Drawer>
                </Grid>
            </Section>

            {/* right */}
            <Section 
                title="right" 
                description="" 
                code={`

                `}
            >
                <Grid className="w-120 m-auto">
                    <Drawer
                        position='right'
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                style={{ margin: 3 }}
                                color='warning'
                                variant='dash'
                            >
                                right
                            </Button>
                        }
                    >
                        <>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </>
                    </Drawer>
                </Grid>
            </Section>

            {/* bottom */}
            <Section 
                title="bottom" 
                description="" 
                code={`

                `}
            >
                <Grid className="w-120 m-auto">
                    <Drawer
                        position='bottom'
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                style={{ margin: 3 }}
                                color='accept'
                                variant='dash'
                            >
                                bottom
                            </Button>
                        }
                    >
                        <>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </>
                    </Drawer>
                </Grid>
            </Section>
        </div>
    );
}


InfoDrawer.meta = {
    onClose: {
        type: 'func',
        values: [''],
        description: ''
    },
    position: {
        type: 'enum',
        default: "left",
        values: ["left", "right", "bottom", "top"],
        description: ''
    },
    open: {
        type: 'boolean',
        values: ["boolean"],
        description: ''
    },
    trigger: {
        type: 'object',
        values: ["React.ReactNode"],
        description: ''
    },
    children: {
        type: 'object',
        values: ["React.ReactNode"],
        description: ''
    },
    style: baseMeta.style,
    className: baseMeta.className
}