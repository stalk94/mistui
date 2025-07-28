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
    
}