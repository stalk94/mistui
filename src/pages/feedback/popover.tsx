import { Card, Button, Popover, Typography } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


function Render({ ...props }) {
    return (
        <Popover
            {...props}
            trigger={
                <Button
                    shadow='sm'
                    size='md'
                    color='success'
                    variant='dash'
                >
                    {props?.isHover ? 'Hover my' : 'click my'}
                </Button>
            }
        >
            <div>
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </div>
        </Popover>
    );
}


export default function InfoPopover(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* click */}
            <Section 
                title="click" 
                description="" 
                code={`
                    <Popover
                        usePortal
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                color='success'
                                variant='dash'
                            >
                                {props?.isHover ? 'Hover my' : 'click my'}
                            </Button>
                        }
                    >
                        <div>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </div>
                    </Popover>
                `}
            >
                <Grid className="w-120 m-auto">
                    <Render usePortal />
                </Grid>
            </Section>

            {/* hover */}
            <Section 
                title="isHover" 
                description="" 
                code={`
                    <Popover
                        usePortal
                        isHover
                        trigger={
                            <Button
                                shadow='sm'
                                size='md'
                                color='success'
                                variant='dash'
                            >
                                {props?.isHover ? 'Hover my' : 'click my'}
                            </Button>
                        }
                    >
                        <div>
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </div>
                    </Popover>
                `}
            >
                <Grid className="w-120 m-auto">
                    <Render usePortal isHover />
                </Grid>
            </Section>
        </div>
    );
}


InfoPopover.meta = {
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
    align: {
        values: ["center", "end", "start"],
        type: 'enum',
        description: ''
    },
    side: {
        values: ["left", "right", "bottom", "top"],
        type: 'enum',
        description: ''
    }, 
    open: {
        type: 'boolean',
        values: ["boolean"],
        description: ''
    },
    usePortal: {
        type: 'boolean',
        values: ["boolean"],
        description: ''
    },
    isHover: {
        type: 'boolean',
        values: ["boolean"],
        description: ''
    },  
    setOpen: {
        values: [],
        type: 'func',
        description: ''
    },
    onClose: {
        values: [],
        type: 'func',
        description: ''
    },
    anchor: {
        values: [],
        type: 'object',
        description: ''
    },
    className: baseMeta.className,
    style: baseMeta.style
}