import { Card, Button, Modal, Typography } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';
import { useRef } from 'react';


function Render() {
    const ref = useRef<HTMLDialogElement>(null);

    return(
        <>
            <Modal
                ref={ref}
                children={
                    <>
                        <Typography variant='h6'>
                            Hello
                        </Typography>
                        <Typography className="py-4" variant='subtitle2'>
                            Press ESC key or click outside to close
                        </Typography>
                    </>
                }
            />
            <Button
                shadow='sm'
                size='md'
                style={{ margin: 3 }}
                color='secondary'
                variant='dash'
                onClick={() => ref?.current?.showModal()}
            >
                open modal
            </Button>
        </>
    );
}


export default function InfoModal(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* basis */}
            <Section 
                title="basic" 
                description="control modal through `[data-modal-root]` selector" 
                code={`

                `}
            >
                <Grid className="w-120 m-auto">
                    <Button
                        shadow='sm'
                        size='md'
                        style={{ margin: 3 }}
                        color='success'
                        variant='dash'
                        onClick={() => document.querySelector('[data-modal-root]').showModal()}
                    >
                        open modal
                    </Button>
                    <Modal
                        children={
                            <>
                                <Typography variant='h6'>
                                    Hello
                                </Typography>
                                <Typography className="py-4" variant='subtitle2'>
                                    Press ESC key or click outside to close
                                </Typography>
                            </>
                        }
                    />
                </Grid>
            </Section>

            {/* ref control */}
            <Section title="ref" 
                description="control through `ref`"
                code={`
                    
                `}
            >
                <Grid className="w-120 m-auto">
                    <Render />
                </Grid>
            </Section>
        </div>
    );
}


InfoModal.meta = {
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
    children: {
        type: 'object',
        values: ["React.ReactNode"],
        description: ''
    },
    actions: {
        type: 'object',
        values: ["React.ReactNode"],
        description: ''
    },
    style: baseMeta.style,
    classNameModalBox: baseMeta.className,
    classNameActions: baseMeta.className,
    className: baseMeta.className
}