import Hero from '@/components/hero';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { Button } from '@/components/buttons';
import { baseMeta, orientationMeta } from '../meta';


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


export default function InfoHero(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* image */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    <Hero
                        className='min-h-150 min-w-170'
                        fontImageOverlaySrc='https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'
                    >
                        <Body />
                    </Hero>
                `}
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
        </div>
    );
}


InfoHero.meta = {
    ...baseMeta,
    fontImageOverlaySrc: {
        values: ['string'],
        type: 'string',
        description: 'url image font image'
    },
    classNameContent: {
        values: ['string'],
        type: 'string',
        description: '',
    },
    styleContent: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: '',
    }
}