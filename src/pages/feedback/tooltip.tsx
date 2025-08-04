import { Card, Button, Tooltip, Typography } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta, variantMeta } from '../meta';


function Render({ cb, ...props }) {
    return (
        <Tooltip
            children={
                <Button
                    shadow='sm'
                    size='md'
                    style={{ margin: 3 }}
                    variant='dash'
                    color={cb}
                >
                    hover my
                </Button>
            }
            content='tooltip content'
            {...props}
        />
    );
}


export default function InfoTooltip(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Typography as='div' variant='body2'>
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>Supports multiple positions: top, bottom, left, right</li>
                    <li>Several visual variants: contained, soft, outline, dash, ghost, and link</li>
                    <li>Customizable colors and sizes with automatic contrast adjustment</li>
                    <li>Dynamic styling with CSS variables for arrow and background</li>
                    <li>Simple wrapper that enhances any child element with tooltip content</li>
                    <li>Lightweight and easy to style via props and inline styles</li>
                </ul>
            </Typography>
          
            {/* base */}
            <Section 
                title="basik" 
                description="" 
                code={`
                    <Tooltip
                        content='tooltip content'
                    >
                        <Button>
                            hover my
                        </Button>
                    </Tooltip>
                `}
            >
                <Grid className="my-6 max-w-110 m-auto">
                    <Render cb='error' />
                </Grid>
            </Section>

            {/* colors */}
            <Section 
                title="color"
                description="" 
                code={`
                    <Tooltip
                        content='tooltip content'
                        color='secondary'
                    >
                        <Button>
                            hover my
                        </Button>
                    </Tooltip>
                `}
            >
                <Grid className="my-6 max-w-110 m-auto">
                    <Render 
                        cb='secondary'
                        color='secondary'
                    />
                </Grid>
            </Section>
        </div>
    );
}


InfoTooltip.meta = {
    ...baseMeta,
    ...variantMeta,
    children: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'Content that will display a tooltip when hovered over.'
    },
    content: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'Hint content'
    },
    position: {
        values: ["top", "left", "right", "bottom"],
        type: 'enum',
        default: 'top',
        description: ''
    }
}