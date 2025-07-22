import { Card, Button, Tooltip, Typography } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


function Render({ cb, ...props }) {
    return (
        <Tooltip
            children={
                <Button
                    shadow='sm'
                    size='md'
                    style={{ margin: 3 }}
                    className='w-full'
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
            
            {/* base */}
            <Section title="base" description="кнопка" code={`<Card></Card>`}>
                <Grid className="my-6 max-w-90 m-auto">
                    <Render cb='error' />
                </Grid>
            </Section>

            {/* colors */}
            <Section title="color" description="кнопка" code={`<Card></Card>`}>
                <Grid className="my-6 max-w-90 m-auto">
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
    
}