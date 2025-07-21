import { VerticalCarousel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';

const items = [
    { type: 'image', src: 'https://picsum.photos/600/600' },
    { type: 'image', src: 'https://picsum.photos/400/400' },
    { type: 'image', src: 'https://picsum.photos/300/300' },
    { type: 'image', src: 'https://picsum.photos/300/300' }
];


export default function InfoVerticalCarousel(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section title="VerticalCarousel" description="кнопка" code={`<VerticalCarousel></VerticalCarousel>`}>
                <Grid className="justify-center">
                    <VerticalCarousel
                        items={items}
                    />
                </Grid>
            </Section>

            {/* isFull */}
            <Section
                title="VerticalCarousel vertical"
                description="разные стили"
                code={''}
            >
                <Grid className="justify-center">
                    <VerticalCarousel
                        items={items}
                    />
                </Grid>
            </Section>

            {/* isSide */}
            <Section
                title="VerticalCarousel vertical"
                description="разные стили"
                code={''}
            >
                <Grid className="justify-center">
                    <VerticalCarousel
                        items={items}
                    />
                </Grid>
            </Section>

            {/* color */}
            <Section title="Custom color" description="кнопка" code={`<VerticalCarousel></VerticalCarousel>`}>
                <Grid className="justify-center">
                    
                </Grid>
            </Section>
        </div>
    );
}


InfoVerticalCarousel.meta = {
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

    },
    autoplayDelay: {

    },
    slidesToShow: {

    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}