import { HorizontalCarousel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


const items = [
    { type: 'image', src: 'https://picsum.photos/600/600' },
    { type: 'image', src: 'https://picsum.photos/400/400' },
    { type: 'image', src: 'https://picsum.photos/300/300' },
    { type: 'image', src: 'https://picsum.photos/300/300' }
];


export default function InfoHorizontalCarousel(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* default */}
            <Section
                title="HorizontalCarousel"
                description="Basic horizontal carousel"
                code={`<HorizontalCarousel items={items} />\n\n// items example:\n${JSON.stringify(items, null, 2)}`}
            >
                <Grid className="justify-center">
                    <HorizontalCarousel items={items} />
                </Grid>
            </Section>

            {/* autoplay */}
            <Section
                title="HorizontalCarousel with autoplay"
                description="Carousel with autoplay enabled"
                code={`<HorizontalCarousel autoplay items={items} />`}
            >
                <Grid className="justify-center">
                    <HorizontalCarousel autoplay items={items} />
                </Grid>
            </Section>

            {/* other styles */}
            <Section
                title="HorizontalCarousel different styles"
                description="Various style options"
                code={''}
            >
                <Grid className="justify-center">
                    <HorizontalCarousel autoplay items={items} />
                </Grid>
            </Section>

            {/* custom color */}
            <Section
                title="Custom color"
                description="Example with custom styling"
                code={`<HorizontalCarousel></HorizontalCarousel>`}
            >
                <Grid className="justify-center">
                    
                </Grid>
            </Section>
        </div>
    );
}

const { children, ...rest } = baseMeta;
InfoHorizontalCarousel.meta = {
    ...rest,
    items: {
        type: 'array',
        values: [{
            type: {
                values: ['image', 'video', 'content'],
                type: 'enum',
                description: ''
            },
            src: {
                values: ['string'],
                type: 'string',
                description: ''
            },
            style: {
                values: ['React.CSSProperties'],
                type: 'object',
                description: ''
            },
        }],
        description: ''
    },
    loop: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: ''
    },
    autoplay: {
        values: ['boolean'],
        default: 'false',
        type: 'boolean',
        description: ''
    },
    slidesToScroll: {
        values: ['number'],
        type: 'number',
        default: 1,
        description: ''
    },
    autoplayDelay: {
        values: ['number'],
        type: 'number',
        default: 3000,
        description: ''
    },
    slidesToShow: {
        values: ['number'],
        type: 'number',
        default: 3,
        description: ''
    }
}