import { Card, Button } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoCard(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section title="Card" description="кнопка" code={`<Card></Card>`}>
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                        title='Card Title'
                        description='A card component has a figure, a body part, and inside body there are title and actions parts'
                        actions={
                            <Button
                                size='sm'
                                color='success'
                                shadow='lg'
                            >
                                go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* isFull */}
            <Section
                title="Card vertical"
                description="разные стили"
                code={''}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                        title='Card Title'
                        description='A card component has a figure, a body part, and inside body there are title and actions parts'
                        imageIsFull
                        actions={
                            <Button
                                size='sm'
                                color='success'
                                shadow='lg'
                            >
                                go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* isSide */}
            <Section
                title="Card vertical"
                description="разные стили"
                code={''}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
                        title='Card Title'
                        description='A card component has a figure, a body part, and inside body there are title and actions parts'
                        imageIsSide
                        actions={
                            <Button
                                size='sm'
                                color='success'
                                shadow='lg'
                            >
                                go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* color */}
            <Section title="Custom color" description="кнопка" code={`<Card></Card>`}>
                <Grid className="justify-center">
                    
                </Grid>
            </Section>
        </div>
    );
}


InfoCard.meta = {
    ...baseMeta,
    imageIsSide: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: ''
    },
    imageIsFull: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: ''
    },
    imageSrc: {
        values: ['string'],
        type: 'string',
        description: 'URL'
    },
    title: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: ''
    },
    description: {
        values: ['string','React.ReactNode'],
        type: 'enum',
        description: ''
    },
    actions: {
        values: ['React.ReactNode'],
        type: 'object',
        description: ''
    },
    classNameBody: {
        values: ['string'],
        type: 'string',
        description: ''
    }
}