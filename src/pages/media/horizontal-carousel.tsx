import { HorizontalCarousel, Typography } from '@/index';
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

            <Typography as='div' variant='body2'>
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>📷 Mixed content: images, videos, or custom elements</li>
                    <li>👇 Drag/Swipe navigation with spring animation</li>
                    <li>🔁 Optional autoplay with loop and delay settings</li>
                    <li>⚙️ Adjustable number of visible slides (slidesToShow) and scroll amount (slidesToScroll)</li>
                    <li>🎯 Responsive resizing and height auto-detection based on parent</li>
                    <li>↔️ Navigation buttons with smooth transitions</li>
                </ul>
            </Typography>
            
            <Typography variant='caption'>
                💡 Dependency-free implementation — no external libraries for swipe handling, animation, or slide control. Built entirely with plain React and JavaScript.
            </Typography>

            {/* default */}
            <Section
                title="basic"
                description="Basic horizontal carousel"
                code={`
                    const items = [
                    { type: 'image', src: 'https://picsum.photos/600/600' },
                    { type: 'image', src: 'https://picsum.photos/400/400' },
                    { type: 'image', src: 'https://picsum.photos/300/300' },
                    { type: 'image', src: 'https://picsum.photos/300/300' }
                ];

                    <HorizontalCarousel items={items} />
                `}
            >
                <Grid className="justify-center">
                    <HorizontalCarousel items={items} />
                </Grid>
            </Section>

            {/* autoplay */}
            <Section
                title="autoplay"
                description="Carousel with autoplay enabled"
                code={`<HorizontalCarousel autoplay items={items} />`}
            >
                <Grid className="justify-center">
                    <HorizontalCarousel autoplay items={items} />
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