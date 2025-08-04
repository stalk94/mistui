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
                code={`
                    <Card 
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
                        description="A card component with image, title, description and actions."
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="h-80 w-120 m-auto">
                    <Card
                        imageSrc="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                        imageIsFull
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
                        color="secondary"
                        title="Colored Card"
                        description="Card with custom color background."
                        actions={<Button size="sm" color="success" shadow="lg">Go to</Button>}
                    />
                `}
            >
                <Grid className="justify-center">
                    <Card
                        color="secondary"
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
        description: 'If true, the image is displayed on the side of the content (horizontal layout)'
    },
    imageIsFull: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: 'If true, the image takes up the full width or height of the card (depending on layout orientation)'
    },
    imageSrc: {
        values: ['string'],
        type: 'string',
        description: 'Image URL to be displayed in the card'
    },
    title: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Title of the card. Can be a plain string or a React node'
    },
    description: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Description or supporting text below the title. Accepts string or React node'
    },
    actions: {
        values: ['React.ReactNode'],
        type: 'object',
        description: 'Action section — usually buttons or links displayed at the bottom of the card'
    },
    classNameBody: {
        values: ['string'],
        type: 'string',
        description: ''
    }
}