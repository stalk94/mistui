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
const shortItemsExample = [
  { type: 'image', src: 'https://picsum.photos/600/600' },
  { type: 'image', src: 'https://picsum.photos/400/400' },
  // ...more images
];


export default function InfoVerticalCarousel(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* default */}
            <Section
                title="VerticalCarousel"
                description="Basic vertical carousel"
                code={`<VerticalCarousel items={items} />\n\n// where items is like:\nconst items = ${JSON.stringify(shortItemsExample, null, 2)}\n// ...more items omitted`}
            >
                <Grid className="h-160 w-90 m-auto">
                    <VerticalCarousel items={items} />
                </Grid>
            </Section>

            {/* autoplay */}
            <Section title="VerticalCarousel autoplay" description="Carousel with autoplay" code={''}>
                <Grid className="h-160 w-90 m-auto">
                    <VerticalCarousel autoplay items={items} />
                </Grid>
            </Section>

            {/* other variations */}
            <Section title="Other styles" description="Different carousel styles" code={''}>
                <Grid className="h-160 w-90 m-auto">
                    <VerticalCarousel autoplay items={items} />
                </Grid>
            </Section>

            {/* custom color */}
            <Section title="Custom color" description="Customization example" code={''}>
                <Grid className="justify-center">
                    
                </Grid>
            </Section>
        </div>
    );
}


InfoVerticalCarousel.meta = {
    ...InfoCarousel.meta
}