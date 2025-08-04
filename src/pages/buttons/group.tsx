import { GroupButton } from '@/components/buttons';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, variants, sizes } from '../helpers';
import { HomeIcon, DocumentIcon, FilmIcon } from '@heroicons/react/24/solid';
import ButtonInfo from './button';
import { Divder, Typography } from '@/index';
import { orientationMeta } from '../meta';



export default function InfoGroupButton(tab) {
    

    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            {/* default */}
            <Section title="base" 
                description="the values are simple strings in this example" 
                code={`
                    <GroupButton 
                        value='play' 
                        onChange={console.log}
                        items={['doc', 'play', 'any']} 
                        size='sm'
                    />
                `}
            >
                <div className="flex justify-center">
                    <GroupButton 
                        size='sm' 
                        variant='contained'
                        value='play'
                        onChange={console.log}
                        items={['doc', 'play', 'any']}
                    />
                </div>
            </Section>

            {/* orientation */}
            <Section title="vertical" 
                description="vertiacal orientation" 
                code={`
                    <GroupButton 
                        value='play' 
                        onChange={console.log}
                        orientation='vertical'
                        items={['doc', 'play', 'any']} 
                        size='sm'
                    />
                `}
            >
                <div className="flex justify-center">
                    <GroupButton 
                        size='sm' 
                        variant='contained'
                        value='play'
                        orientation='vertical'
                        onChange={console.log}
                        items={['docn', 'play', 'any']}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="variants"
                description=""
                code={variants
                    .map((variant) => `<GroupButton size="sm" variant="${variant}" items={['doc', 'play', 'game', 'any']}/>`)
                    .join('\n')
                }
            >
                <Grid>
                    {variants.map((variant) => variant !== 'ghost' && (
                        <div key={variant} className="flex-col justify-center">
                            <Divder
                                className='py-4'
                            >
                                <Typography color='#a3a3a2' variant='caption'>
                                    { variant }
                                </Typography>
                            </Divder>
                            <GroupButton 
                                size='sm' 
                                value='play'
                                color='secondary'
                                variant={variant}
                                className='m-auto'
                                items={['doc', 'play', 'game', 'any']}
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
                <Grid>
                    {sizes.map((size) => (
                        <div key={size} className="flex-col justify-center">
                            <Typography color='#a3a3a2' variant='caption'>
                                { size }
                            </Typography>

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

            {/* colors */}
            <Section
                title="colors"
                description="or your color"
                code={colors
                    .map((color) => `<GroupButton size="sm" color="${color}" shadow="sm" value={'any'} items={['doc', 'play', 'any']}/>`)
                    .join('\n')}
            >
                <Grid>
                    {colors.map((color) => (
                        <div key={color} className='flex flex-col'>
                            <Divder
                                className='py-4'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divder>
                            <GroupButton 
                                size="sm" 
                                color={color} 
                                shadow="sm"
                                value={['doc', 'play', 'any'][Math.floor(Math.random() * 3)]}
                                items={['doc', 'play', 'any']}
                            />
                        </div>
                    ))}
                </Grid>
            </Section>

            {/* icon */}
            <Section 
                dot='⚡'
                title="icon" 
                description={`
                    This component is smart enough to manage its own internal state, while also allowing controlled usage. The passed value acts like a default (not locked), 
                    so you don't need to manually sync every change. It supports hybrid values — either a primitive (string/number) or an object with an 'id' — and handles comparison automatically
                `}
                code={`
                    <GroupButton 
                        size='sm' 
                        variant='contained'
                        value={{id: 'film'}}
                        onChange={console.log}
                        items={[
                            { id: 'home', label: <HomeIcon className='h-4'/> }, 
                            { id: 'doc', label: <DocumentIcon className='h-4'/> },
                            { id: 'film', label: <FilmIcon className='h-4'/> }
                        ]}
                    />
                `}
            >
                <div className="flex justify-center">
                    <GroupButton
                        size='sm'
                        variant='contained'
                        value={{id: 'film'}}
                        items={[
                            { id: 'home', label: <HomeIcon className='h-4' /> },
                            { id: 'doc', label: <DocumentIcon className='h-4' /> },
                            { id: 'film', label: <FilmIcon className='h-4' /> }
                        ]}
                    />
                </div>
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