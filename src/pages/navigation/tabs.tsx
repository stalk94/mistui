import Tabs from '@/components/tabs';
import { Section, Grid as TabsGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { baseMeta } from '../meta';

const variants: ("box" | "border" | "lift")[] = ["box", "border", "lift"];
const items = [
    { label: 'tab-1', content: 'Tab content 1' },
    { label: 'tab-2', content: 'Tab content 2' },
    { label: 'tab-3', content: 'Tab content 3' },
];


export default function InfoTabs(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="Tabs" 
                description="кнопка" 
                code={`<Tabs size='sm'>default</Tabs>`}
            >
                <div className="flex justify-center">
                    <Tabs 
                        size='md'
                        items={items}
                    />
                </div>
            </Section>

            {/* variants */}
            <Section
                title="Tabs variants"
                description="разные стили"
                code={variants
                    .map((variant) => `<Tabs size="sm" variant="${variant}">${variant}</Tabs>`)
                    .join('\n')
                }
            >
                <TabsGrid className='flex-col'>
                    {variants.map((variant, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divdder 
                                className='py-4'
                                variant='dashed' 
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    { variant }
                                </Typography>
                            </Divdder>
                            <Tabs 
                                size='sm' 
                                key={variant} 
                                variant={variant}
                                items={items}
                            />
                        </div>
                    ))}
                </TabsGrid>
            </Section>

            {/* sizes */}
            <Section
                title="Tabs sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Tabs size="${size}" shadow="sm">${size}</Tabs>`)
                    .join('\n')}
            >
                <TabsGrid className='flex-col'>
                    {sizes.map((size, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divdder 
                                className='py-4'
                                variant='dashed' 
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    { size }
                                </Typography>
                            </Divdder>
                            <Tabs 
                                key={size} 
                                size={size} 
                                shadow="sm"
                                items={items}
                            />
                        </div>
                    ))}
                </TabsGrid>
            </Section>

            {/* colors */}
            <Section
                title="Tabs colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Tabs size="sm" color="${color}" shadow="sm">${color}</Tabs>`)
                    .join('\n')}
            >
                <TabsGrid className='flex-col'>
                    {colors.map((color, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divdder  
                                className='py-4'
                                variant='dashed' 
                                position='end'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divdder>
                            <Tabs
                                size="sm"
                                key={color}
                                color={color}
                                shadow="sm"
                                items={items}
                            />
                        </div>
                    ))}
                </TabsGrid>
            </Section>
        </div>
    );
}


const { children, ...rest } = baseMeta;
InfoTabs.meta = {
    ...rest,
    activeIndexTab: {
        values: ['number'],
        type: 'number',
        default: 0,
        description: ''
    },
    variant: {
        values: ["box", "border", "lift"],
        default: 'lift',
        type: 'enum',
        description: ''
    },
    items: {
        values: [{
            label: {
                values: ['string', 'React.ReactNode'],
                type: 'enum',
                description: ''
            }, 
            content: {
                values: ['string', 'React.ReactNode'],
                type: 'enum',
                description: ''
            }
        }],
        type: 'array',
        description: ''
    },
    styleTab: baseMeta.style,
    styleContent: baseMeta.style
}