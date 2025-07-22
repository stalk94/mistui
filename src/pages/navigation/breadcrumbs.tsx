import Breadcrumbs from '@/components/breadcrumbs';
import { Section, Grid as BreadcrumbsGrid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Divdder, Typography } from '@/index';
import { Cog8ToothIcon, HomeIcon, TrashIcon } from '@heroicons/react/24/outline';
import { baseMeta } from '../meta';


export default function InfoBreadcrumbs(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
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
                title="sizes"
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
                title="colors"
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


const { children, ...rest } = baseMeta;
InfoBreadcrumbs.meta = {
   ...rest,
    pathname: {
        values: ['string'],
        type: 'string',
        description: 'path'
    }, 
    Link: {
        values: ['ComponentType<{ href: string; children: React.ReactNode }>'],
        type: 'func',
        description: ''
    }, 
    separator: {
        values: ['string', 'ReactNode'],
        default: '›',
        type: 'enum',
        description: 'path'
    }, 
    nameMap: {
        values: ['Record<string, string>'],
        type: 'object',
        description: 'path map'
    },
    classNameHomeicon: baseMeta.className
}