import { GroupButtonFiltre } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import InfoGroupButton from './group';
import { Divdder, Typography } from '@/index';


export default function InfoGroupButtonFiltre(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="GroupButtonFiltre" 
                description="кнопка" 
                code={`<GroupButtonFiltre size='sm'>default</GroupButtonFiltre>`}
            >
                <div className="flex justify-center">
                    <GroupButtonFiltre 
                        size='sm' 
                        variant='contained'
                        items={['documentation', 'playground', 'any']}
                    />
                </div>
            </Section>

            {/* select */}
            <Section 
                title="GroupButtonFiltre" 
                description="кнопка" 
                code={`<GroupButtonFiltre size='sm'>default</GroupButtonFiltre>`}
            >
                <div className="flex justify-center">
                    <GroupButtonFiltre 
                        size='sm' 
                        variant='contained'
                        value='playground'
                        items={['documentation', 'playground', 'any']}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="GroupButtonFiltre variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<GroupButtonFiltre size="sm" variant="${variant}">${variant}</GroupButtonFiltre>`)
                    .join('\n')
                }
            >
                <Grid className='flex flex-col'>
                    {variants.map((variant) => (
                        <div key={variant} className="flex-col justify-center ">
                            <Divdder
                                className='py-4'
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    { variant }
                                </Typography>
                            </Divdder>
                            <GroupButtonFiltre 
                                size='sm' 
                                value='playground'
                                key={variant} 
                                variant={variant}
                                className='w-120 m-auto'
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>

            {/* sizes */}
            <Section
                title="GroupButtonFiltre sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<GroupButtonFiltre size="${size}" shadow="sm">${size}</GroupButtonFiltre>`)
                    .join('\n')}
            >
                <Grid className='flex-col justify-center'>
                    {sizes.map((size) => (
                        <div key={size} className="flex-col justify-center">
                            <Divdder
                                className='py-4'
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    { size }
                                </Typography>
                            </Divdder>
                            <GroupButtonFiltre
                                size={size}
                                key={size}
                                value='playground'
                                className='w-120 m-auto'
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}

                </Grid>
            </Section>

            {/* colors */}
            <Section
                title="GroupButtonFiltre colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<GroupButtonFiltre size="sm" color="${color}" shadow="sm">${color}</GroupButtonFiltre>`)
                    .join('\n')}
            >
                <Grid className='flex-col'>
                    {colors.map((color) => (
                        <div key={color} className='flex-col justify-center'>
                            <Divdder
                                className='py-4'
                                position='end'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divdder>
                            <GroupButtonFiltre 
                                size="sm" 
                                key={color} 
                                color={color} 
                                className='w-120 m-auto'
                                value={['documentation', 'playground', 'any'][Math.floor(Math.random() * 3)]}
                                items={['documentation', 'playground', 'any']}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>
        </div>
    );
}



InfoGroupButtonFiltre.meta = {
    ...InfoGroupButton.meta,
    valueReset: {
        values: ['string', 'number'],
        type: 'enum',
        description: ''
    },
    styleButtonReset: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Инлайн-стили, применяемые к компоненту.',
    }
}