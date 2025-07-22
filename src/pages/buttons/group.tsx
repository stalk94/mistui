import { GroupButton } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import ButtonInfo from './button';
import { Divdder, Typography } from '@/index';
import { orientationMeta } from '../meta';


export default function InfoGroupButton(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section title="base" 
                description="" 
                code={`<GroupButton value='playground' items={['documentation', 'playground', 'any']} size='sm'/>`}
            >
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
                description=""
                code={variants
                    .map((variant) => `<GroupButton size="sm" variant="${variant}" items={['doc', 'play', 'any']}/>`)
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
                description=""
                code={sizes
                    .map((size) => `<GroupButton shadow='sm' color='secondary' variant='dash' value='play' size="${size}" shadow="sm" items={['doc', 'play', 'any']}/>`)
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

            {/* select */}
            <Section
                title="select"
                description=""
                code={colors
                    .map((color) => `<GroupButton size="sm" color="${color}" shadow="sm" value={'any'} items={['documentation', 'playground', 'any']}/>`)
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
        description: 'The current value of the select.'
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
        description: 'Scheme format data.'
    },
    ...orientationMeta
}