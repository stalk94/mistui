import Stat from '@/components/utils/stat';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';
import Divider from '@/components/utils/divider';
import RadialProgress from '@/components/utils/radial-progress';



export default function InfoStat() {
    return (
        <div className="p-6 space-y-8 ">
            {/* image */}
            <Section 
                title="Stat" 
                description="кнопка" 
                code={``}
            >
                <div className="flex justify-center">
                    <Stat
                        value='1200 %'
                        desccription='description'
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
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    direction: {
        values: ["start", "end"],
        type: 'enum',
        description: ''
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}