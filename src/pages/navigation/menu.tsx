import Menu from '@/components/menu/list-menu';
import { Section, Grid as MenuGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';


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


export default function InfoMenu() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="Menu" 
                description="кнопка" 
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
                title="Menu sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Menu size="${size}" shadow="sm">${size}</Menu>`)
                    .join('\n')}
            >
                <MenuGrid className='flex-col'>
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
                title="Menu colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Menu size="sm" color="${color}" shadow="sm">${color}</Menu>`)
                    .join('\n')}
            >
                <MenuGrid className='flex-col'>
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
    variant: {
        values: ["box", "border", "lift"],
        default: 'contained',
        type: 'enum',
        description: 'Визуальный стиль компонента.'
    },
    color: {
        values: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
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