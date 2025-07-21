import { Card, Button } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';



export default function InfoCard(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section title="Card" description="кнопка" code={`<Card></Card>`}>
                <Grid className="justify-center">
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
                <Grid className="justify-center">
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
                <Grid className="justify-center">
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
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    orienattion: {
        values: ["horizontal", "vertical"],
        default: 'horizontal',
        type: 'enum',
        description: 'Размер компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
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
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}