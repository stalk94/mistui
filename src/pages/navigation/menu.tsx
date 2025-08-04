import Menu from '@/components/menu/list-menu';
import { Section, Grid as MenuGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { baseMeta } from '../meta';



const items = [
    { id: '1', label: 'test', icon: <Cog8ToothIcon className='h-4' /> },
    { id: '2', label: 'test', icon: <HomeIcon className='h-4' /> },
    {
        id: '3', label: 'test', icon: <TrashIcon className='h-4' />, title: 'nested main',
        open: true, style: { fontSize: 12 },
        children: [
            { id: '3', label: 'test', icon: <TrashIcon className='h-4' /> },
            {
                id: '4', label: 'test', icon: <TrashIcon className='h-4' />,
                children: [
                    { id: '3', label: 'test', icon: <TrashIcon className='h-4' /> },
                    { id: '4', label: 'test', icon: <TrashIcon className='h-4' /> }
                ]
            }
        ]
    }
];


export default function InfoMenu(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* default */}
            <Section 
                title="basic" 
                description="" 
                code={`<Menu size='sm'>default</Menu>`}
            >
                <div className="flex justify-center">
                    <div className="flex justify-center m-auto">
                        <Menu 
                            size='md'
                            items={items}
                        />
                    </div>
                </div>
            </Section>


            {/* sizes */}
            <Section
                title="sizes"
                description=""
                code={sizes
                    .map((size) => `<Menu size="${size}" shadow="sm">${size}</Menu>`)
                    .join('\n')}
            >
                <MenuGrid className='flex-col'>
                    {sizes.map((size, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divder 
                                className='py-4'
                                variant='dashed' 
                                position='end'
                            >
                                <Typography color='#acacaa' variant='caption'>
                                    { size }
                                </Typography>
                            </Divder>
                            <div className="flex justify-center m-auto">
                                <Menu 
                                    key={size} 
                                    size={size} 
                                    shadow="sm"
                                    items={items}
                                />
                            </div>
                        </div>
                    ))}
                </MenuGrid>
            </Section>

            {/* colors */}
            <Section
                title="colors"
                description=""
                code={colors
                    .map((color) => `<Menu size="sm" color="${color}" shadow="sm">${color}</Menu>`)
                    .join('\n')}
            >
                <MenuGrid className='flex-col'>
                    {colors.map((color, i) => (
                        <div key={i} className='flex flex-col'>
                            <Divder  
                                className='py-4'
                                variant='dashed' 
                                position='end'
                            >
                                <Typography color={color} variant='caption'>
                                    { color }
                                </Typography>
                            </Divder>
                            <div className="flex justify-center m-auto">
                                <Menu
                                    size="sm"
                                    key={color}
                                    color={color}
                                    shadow="sm"
                                    items={items}
                                />
                            </div>
                        </div>
                    ))}
                </MenuGrid>
            </Section>
        </div>
    );
}


InfoMenu.meta = {
    style: baseMeta.style,
    className: baseMeta.className,
    size: baseMeta.size,
    onSelect: {
        values: [''],
        type: 'func',
        description: ''
    },
    items: {
        values: [{
            
        }],
        type: 'array',
        description: ''
    },
    color: baseMeta.color,
    shadow: baseMeta.shadow,
    isNested: {
        values: ['any'],
        type: 'boolean',
        description: ''
    },
}