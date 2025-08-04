import { Typography, VerticalCarousel } from '@/index';
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
                description="Basic vertical carousel"
                code={`
                    const items = [
                    { type: 'image', src: 'https://picsum.photos/600/600' },
                    { type: 'image', src: 'https://picsum.photos/400/400' },
                    { type: 'image', src: 'https://picsum.photos/300/300' },
                    { type: 'image', src: 'https://picsum.photos/300/300' }
                ];

                    <VerticalCarousel items={items} />
                `}
            >
                <Grid className="h-160 w-90 m-auto">
                    <VerticalCarousel items={items} />
                </Grid>
            </Section>

            {/* autoplay */}
            <Section 
                title="autoplay" 
                description="Carousel with autoplay" 
                code={`
                    <VerticalCarousel autoplay items={items} />
                `}
            >
                <Grid className="h-160 w-90 m-auto">
                    <VerticalCarousel autoplay items={items} />
                </Grid>
            </Section>
        </div>
    );
}


InfoVerticalCarousel.meta = {
    ...InfoCarousel.meta
}