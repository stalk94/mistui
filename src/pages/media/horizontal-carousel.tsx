import { HorizontalCarousel, Typography } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';


const items = [
    { type: 'image', src: 'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1294913/ABaVlDRggjM3opzltwgQ.jpg' },
    { type: 'image', src: 'https://turlog.ru/assets/images/tickets/395/header/priazovie-header.jpg' },
    { type: 'image', src: 'https://iy.kommersant.ru/Issues.photo/RADIO/2022/05/05/KMO_187425_00081_1_t222_211032.jpg' },
    { type: 'image', src: 'https://my-sedovo.narod.ru/images/Prir17.jpg' },
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
    { type: 'image', src: 'https://otdyhaem.com.ua/wp-content/uploads/2022/07/priazovskij-park05.jpg' },
    { type: 'video', src: '/sv.mp4' }
];


export default function InfoHorizontalCarousel(tab) {
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
                description="Basic horizontal carousel"
                code={`
                    const items = [
                        { type: 'image', src: 'https://picsum.photos/600/600' },
                        { type: 'video', src: '/sv.mp4' },
                        { type: 'any', src: <div> react component </div> }
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