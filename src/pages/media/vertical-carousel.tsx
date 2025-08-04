import { Typography, VerticalCarousel } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import InfoCarousel from './horizontal-carousel';


const items = [
    { type: 'image', src: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1294913/ABaVlDRggjM3opzltwgQ.jpg' },
    { type: 'image', src: 'https://turlog.ru/assets/images/tickets/395/header/priazovie-header.jpg' },
    { type: 'any', src: (
            <>
            <div> react component </div>
            <ul className="list-disc list-inside ml-4 my-1">
                <li>📷 Mixed content: images, videos, or custom elements</li>
                <li>👇 Drag/Swipe navigation with spring animation</li>
                <li>🔁 Optional autoplay with loop and delay settings</li>
                <li>⚙️ Adjustable number of visible slides (slidesToShow) and scroll amount (slidesToScroll)</li>
                <li>🎯 Responsive resizing and height auto-detection based on parent</li>
                <li>↔️ Navigation buttons with smooth transitions</li>
            </ul>
            </>
        )
    },
    { type: 'image', src: 'https://iy.kommersant.ru/Issues.photo/RADIO/2022/05/05/KMO_187425_00081_1_t222_211032.jpg' },
    { type: 'image', src: 'https://my-sedovo.narod.ru/images/Prir17.jpg' },
    { type: 'image', src: 'https://otdyhaem.com.ua/wp-content/uploads/2022/07/priazovskij-park05.jpg' },
    { type: 'video', src: '/sv.mp4' }
];


export default function InfoVerticalCarousel(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            <Typography as='div' variant='body2'>
                <ul className="list-disc list-inside ml-4 my-1">
                    <li>📷 Mixed content: images, videos, or custom react elements</li>
                    <li>👇 Drag/Swipe navigation with spring animation</li>
                    <li>🔁 Optional autoplay with loop and delay settings</li>
                    <li>⚙️ Adjustable number of visible slides (slidesToShow) and scroll amount (slidesToScroll)</li>
                    <li>🎯 Responsive resizing and height auto-detection based on parent</li>
                    <li>↔️ Navigation buttons with smooth transitions</li>
                </ul>
            </Typography>

            <Typography variant='caption' style={{color:'#9e9e9e'}}>
                💡 Dependency-free implementation — no external libraries for swipe handling, animation, or slide control. Built entirely with plain React and JavaScript.
            </Typography>
            
            {/* default */}
            <Section
                title="basic"
                description="Basic vertical carousel"
                code={`
                    const items = [
                        { type: 'image', src: 'https://picsum.photos/600/600' },
                        { type: 'video', src: '/sv.mp4' },
                        { type: 'any', src: <div> react component </div> }
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