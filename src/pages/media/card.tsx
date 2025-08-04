import { Card, Button } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, orientationMeta } from '../meta';


export default function InfoCard(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* default */}
            <Section
                title="Card"
                description="Basic card component with image, title, description and actions"
                code={`<Card 
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        title="Card Title"
                        description="A card component with image, title, description and actions."
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        title="Card Title"
                        description="A card component with image, title, description and actions."
                        actions={
                            <Button size="sm" color="success" shadow="lg">
                                Go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* full image */}
            <Section
                title="Card with full image"
                description="Card with image covering full card area"
                code={`
                    <Card 
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        imageIsFull
                        title="Card Title"
                        description="Image covers entire card"
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        imageIsFull
                        title="Card Title"
                        description="Image covers entire card"
                        actions={
                            <Button size="sm" color="success" shadow="lg">
                                Go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* side image */}
            <Section
                title="Card with side image"
                description="Card with image shown on the side"
                code={`
                    <Card 
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        imageIsSide
                        title="Card Title"
                        description="Image shown on the side"
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        imageIsSide
                        title="Card Title"
                        description="Image shown on the side"
                        actions={
                            <Button size="sm" color="success" shadow="lg">
                                Go to
                            </Button>
                        }
                    />
                </Grid>
            </Section>

            {/* custom color */}
            <Section
                title="Custom color"
                description="(!in development) Card with custom background color"
                code={`
                    <Card 
                        color="primary"
                        title="Colored Card"
                        description="Card with custom color background."
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="justify-center">
                    <Card
                        color="primary"
                        title="Colored Card"
                        description="Card with custom color background."
                        actions={
                            <Button size="sm" color="success" shadow="lg">
                                Go to
                            </Button>
                        }
                    />
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