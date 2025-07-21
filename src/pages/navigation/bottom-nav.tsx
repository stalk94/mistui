import BottomNav from '@/components/bottom-nav';
import { Section, Grid as BottomNavGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { baseMeta } from '../meta';

const items = [
    { icon: <HomeIcon/>, label: 'home' },
    { icon: <Cog8ToothIcon/>, label: 'settings' },
    { icon: <TrashIcon/>, label: 'delete' },
];


export default function InfoBottomNav(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="BottomNav" 
                description="кнопка" 
                code={`<BottomNav size='sm'>default</BottomNav>`}
            >
                <div className="flex justify-start">
                    <BottomNav
                        size='md'
                        className='relative'
                        items={items}
                    />
                </div>
            </Section>


            {/* sizes */}
            <Section
                title="BottomNav sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<BottomNav size="${size}" shadow="sm">${size}</BottomNav>`)
                    .join('\n')}
            >
                <BottomNavGrid className='flex-col'>
                    {sizes.map((size, i) => (
                        <div key={i} className='flex flex-col justify-start'>
                            <Divdder
                                className='py-4'
                                variant='dashed'
                                position='end'
                            >
                                <Typography color='#daf166' variant='caption'>
                                    {size}
                                </Typography>
                            </Divdder>

                            <BottomNav
                                className='relative'
                                size={size}
                                items={items}
                            />
                        </div>
                    ))}
                </BottomNavGrid>
            </Section>

            {/* colors */}
            <Section
                title="BottomNav colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<BottomNav size="sm" color="${color}" shadow="sm">${color}</BottomNav>`)
                    .join('\n')}
            >
                <BottomNavGrid className='flex-col'>
                    {colors.map((color, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divdder
                                className='py-4'
                                variant='dashed'
                                position='end'
                            >
                                <Typography color={color} variant='caption'>
                                    {color}
                                </Typography>
                            </Divdder>

                            <BottomNav
                                size="sm"
                                key={color}
                                color={color}
                                items={items}
                                className='relative'
                            />
                        </div>
                    ))}
                </BottomNavGrid>
            </Section>
        </div>
    );
}


const { children, ...rest } = baseMeta;
InfoBottomNav.meta = {
    ...rest,
    active: {
        values: ['number'],
        type: 'number',
        default: 0,
        description: ''
    },
    onChange: {
        values: [''],
        type: 'func',
        description: ''
    },
    items: {
        values: [{
            
        }],
        type: 'array',
        description: ''
    }
}