import Breadcrumbs from '@/components/breadcrumbs';
import { Section, Grid as BreadcrumbsGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';



export default function InfoBreadcrumbs() {
    return (
        <div className="p-6 space-y-8 ">
            {/* default */}
            <Section 
                title="Breadcrumbs" 
                description="кнопка" 
                code={`<Breadcrumbs size='sm'>default</Breadcrumbs>`}
            >
                <div className="flex justify-start">
                    <Breadcrumbs
                        size='md'
                        pathname='catalog/test'
                        Link={({ href, children }) =>
                            <div
                                onClick={() => console.log(href)}
                            >
                                {children}
                            </div>
                        }
                    />
                </div>
            </Section>


            {/* sizes */}
            <Section
                title="Breadcrumbs sizes"
                description="разные размеры"
                code={sizes
                    .map((size) => `<Breadcrumbs size="${size}" shadow="sm">${size}</Breadcrumbs>`)
                    .join('\n')}
            >
                <BreadcrumbsGrid className='flex-col'>
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

                            <Breadcrumbs
                                size={size}
                                pathname='catalog/test'
                                Link={({ href, children }) =>
                                    <div
                                        onClick={() => console.log(href)}
                                    >
                                        {children}
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </BreadcrumbsGrid>
            </Section>

            {/* colors */}
            <Section
                title="Breadcrumbs colors"
                description="разные цвета"
                code={colors
                    .map((color) => `<Breadcrumbs size="sm" color="${color}" shadow="sm">${color}</Breadcrumbs>`)
                    .join('\n')}
            >
                <BreadcrumbsGrid className='flex-col'>
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

                            <Breadcrumbs
                                size="sm"
                                key={color}
                                color={color}
                                pathname='catalog/test'
                                Link={({ href, children }) =>
                                    <div
                                        onClick={() => console.log(href)}
                                    >
                                        {children}
                                    </div>
                                }
                            />
                        </div>
                    ))}
                </BreadcrumbsGrid>
            </Section>
        </div>
    );
}


InfoBreadcrumbs.meta = {
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