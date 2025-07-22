import { GroupButton } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import ButtonInfo from './button';
import { Divdder, Typography } from '@/index';


export default function InfoGroupButton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section title="base" description="кнопка" code={`<GroupButton value='playground' items={['documentation', 'playground', 'any']} size='sm'/>`}>
                <div className="flex justify-center">
                    <GroupButton 
                        size='sm' 
                        variant='contained'
                        value='playground'
                        items={['documentation', 'playground', 'any']}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<GroupButton size="sm" variant="${variant}">${variant}</GroupButton>`)
                    .join('\n')
                }
            >
                <Grid className='flex-col justify-center'>
                    {variants.map((variant) => (
                        <div key={variant} className="flex-col justify-center w-full">
                            <Divdder
                                className='py-4'
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    { variant }
                                </Typography>
                            </Divdder>
                            <GroupButton 
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
                title="sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<GroupButton size="${size}" shadow="sm">${size}</GroupButton>`)
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
                            <GroupButton
                                size={size}
                                key={size}
                                value='play'
                                variant='dash'
                                shadow='sm'
                                color='secondary'
                                className='max-w-80 m-auto'
                                items={['doc', 'play', 'any']}
                            />
                        </div>
                    ))}

                </Grid>
            </Section>

            {/* colors */}
            <Section
                title="colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<GroupButton size="sm" color="${color}" shadow="sm">${color}</GroupButton>`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <div key={color} className='flex flex-col'>
                            <Divdder
                                className='py-4'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divdder>
                            <GroupButton 
                                size="sm" 
                                key={color} 
                                color={color} 
                                shadow="sm"
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


const { children, ...rest } = ButtonInfo.meta;
InfoGroupButton.meta = {
    ...rest,
    value: {
        values: ['string', 'number'],
        type: 'enum',
        description: ''
    },
    items: {
        values: [{
            id: {
                values: ['string', 'number'],
                type: 'enum',
                description: ''
            },
            label: {
                values: ['React.ReactElement'],
                type: 'enum',
                description: ''
            }
        }],
        type: 'array',
        description: ''
    },
    orientation: {
        values: ['horizontal', 'vertical'],
        type: 'enum',
        default: 'horizontal',
        description: ''
    }
}