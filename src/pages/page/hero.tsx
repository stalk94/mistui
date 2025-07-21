import Hero from '@/components/hero';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';


const Body = () => (
    <div className="max-w-md">
        <Typography
            variant='h2'
        >
            Hello there
        </Typography>
        <Typography
            variant='caption'
            className="mb-10 mt-2"
            style={{ color: '#c0c0c0' }}
        >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </Typography>
        <Button
            size='md'
            color='success'
            shadow='lg'
        >
            Get Started
        </Button>
    </div>
);


export default function InfoHero() {
    return (
        <div className="p-6 space-y-8 ">
            {/* image */}
            <Section 
                title="Hero" 
                description="кнопка" 
                code={`<AvatarGroup variant='round' size='sm' src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'></AvatarGroup>`}
            >
                <div className="flex justify-center">
                    <Hero
                        className='min-h-150 min-w-170'
                        fontImageOverlaySrc='https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'
                    >
                        <Body />
                    </Hero>
                </div>
            </Section>

            {/*  */}
            <Section
                title="Hero orientation"
                description="разные размеры"
                code={sizes
                    .map((size) => `<AvatarGroup size="${size}" shadow="sm">${size}</AvatarGroup>`)
                    .join('\n')}
            >
               <div className="flex-col justify-center">
                    <Hero
                        className='min-h-150 min-w-170'
                        fontImageOverlaySrc='https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'
                    >
                        <Body />
                    </Hero>
                </div>
            </Section>
        </div>
    );
}


InfoHero.meta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'union',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    size: {
        values: ['auto', 'xs', 'sm', 'md', 'lg', 'xl'],
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    fontImageOverlaySrc: {
        values: ['string'],
        type: 'string',
        description: 'url'
    },
    disabled: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Отключает компонент.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}