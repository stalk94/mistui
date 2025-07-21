import { VerticalCarousel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import InfoCarousel from './horizontal-carousel';

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
    ...InfoCarousel.meta
}