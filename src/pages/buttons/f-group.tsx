import { GroupButtonFiltre } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon } from '@heroicons/react/24/solid';
import InfoGroupButton from './group';
import { Divder, Typography } from '@/index';


export default function InfoGroupButtonFiltre(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="base" 
                description="" 
                code={`<GroupButtonFiltre variant='contained' size='sm' items={['doc', 'play', 'any']} />`}
            >
                <div className="flex justify-center">
                    <GroupButtonFiltre 
                        size='sm' 
                        variant='contained'
                        items={['doc', 'play', 'any']}
                    />
                </div>
            </Section>

            {/* select */}
            <Section 
                title="selected" 
                description="selected current value" 
                code={`<GroupButtonFiltre size='sm' variant='contained' value='play' items={['doc', 'play', 'any']} />`}
            >
                <div className="flex justify-center">
                    <GroupButtonFiltre 
                        size='sm' 
                        variant='contained'
                        value='play'
                        items={['doc', 'play', 'any']}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description=""
                code={variants
                    .map((variant) => `<GroupButtonFiltre items={['doc', 'play', 'any']} size="sm" variant="${variant}" /> /**${variant}*/`)
                    .join('\n')
                }
            >
                <Grid>
                    {variants.map((variant) => (
                        <div key={variant} className="flex-col justify-center">
                            <Divder
                                className='py-4'
                            >
                                <Typography color='#a3a3a2' variant='caption'>
                                    { variant }
                                </Typography>
                            </Divder>
                            <GroupButtonFiltre 
                                size='sm' 
                                variant={variant}
                                className='m-auto'
                                items={['doc', 'play', 'any']}
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
                    .map((size) => `<GroupButtonFiltre size="${size}" shadow='sm' color='secondary' variant='dash' value='play' size="${size}" shadow="sm" items={['doc', 'play', 'any']} />`)
                    .join('\n')}
            >
                <Grid>
                    {sizes.map((size) => (
                        <div key={size} className="flex-col justify-center">
                            <Divder
                                className='py-4'
                            >
                                <Typography color='#a3a3a2' variant='caption'>
                                    { size }
                                </Typography>
                            </Divder>
                            <GroupButtonFiltre
                                size={size}
                                key={size}
                                color='secondary'
                                variant='dash'
                                className='m-auto'
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
                    .map((color) => `<GroupButtonFiltre size="sm" color="${color}" shadow="sm" items={['docu', 'play', 'any']} />`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <div key={color} className='flex-col justify-center'>
                            <Divder
                                className='py-4'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divder>
                            <GroupButtonFiltre 
                                size="sm" 
                                key={color} 
                                color={color} 
                                className='m-auto'
                                items={['doc', 'play', 'any']}
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
        description: 'Inline styles applied to the component button reset.',
    }
}