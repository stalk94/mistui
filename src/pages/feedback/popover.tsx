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
        values: ['React.ReactNode'],
        description: 'Element that triggers the popover (e.g. button or icon)'
    },
    children: {
        type: 'object',
        values: ['React.ReactNode'],
        description: 'Content displayed inside the popover'
    },
    align: {
        values: ['center', 'end', 'start'],
        type: 'enum',
        description: 'Horizontal alignment of the popover relative to the trigger'
    },
    side: {
        values: ['left', 'right', 'bottom', 'top'],
        type: 'enum',
        description: 'Side of the trigger where the popover will appear'
    },
    open: {
        type: 'boolean',
        values: ['boolean'],
        description: 'Controls whether the popover is open or closed'
    },
    usePortal: {
        type: 'boolean',
        values: ['boolean'],
        description: 'Whether to render the popover inside a React portal'
    },
    isHover: {
        type: 'boolean',
        values: ['boolean'],
        description: 'Opens the popover on hover instead of click'
    },
    setOpen: {
        values: [],
        type: 'func',
        description: 'Callback to manually control popover open state'
    },
    onClose: {
        values: [],
        type: 'func',
        description: 'Callback fired when the popover is closed'
    },
    anchor: {
        values: [],
        type: 'object',
        description: 'Optional custom anchor element to position the popover relative to'
    },
    className: baseMeta.className,
    style: baseMeta.style
}