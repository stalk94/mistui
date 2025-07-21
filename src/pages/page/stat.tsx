import Stat from '@/components/utils/stat';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';
import Divider from '@/components/utils/divider';
import RadialProgress from '@/components/utils/radial-progress';
import { baseMeta } from '../meta';


export default function InfoStat(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* image */}
            <Section 
                title="Stat" 
                description="кнопка" 
                code={``}
            >
                <div className="flex justify-center">
                    <Stat
                        value='1200 %'
                        description='description'
                        title='title'
                        figure={
                            <RadialProgress value={70}>
                                70%
                            </RadialProgress>
                        }
                        actions={
                            <>
                                <Divider color='primary' style={{ borderStyle: 'dashed', color: 'silver' }}>
                                    actions
                                </Divider>
                                <Button size='sm' color='success'>one button</Button>
                                <Button size='sm' color='error'>two button</Button>
                            </>
                        }
                    />
                </div>
            </Section>

            {/*  */}
            <Section
                title="Stat orientation"
                description="разные размеры"
                code={sizes
                    .map((size) => ``)
                    .join('\n')}
            >
               <div className="flex-col justify-center">
                    
                </div>
            </Section>
        </div>
    );
}


InfoStat.meta = {
    value: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    description: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    title: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    figure: {
        values: ['React.ReactNode'],
        type: 'object',
        description: ''
    },
    actions: {
        values: ['React.ReactNode'],
        type: 'object',
        description: ''
    },
    style: baseMeta.style,
    className: baseMeta.className
}