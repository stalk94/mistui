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
            {tab}

            {/* Default */}
            <Section
                title=""
                description="Basic bottom navigation component"
                code={`<BottomNav size="sm" items={items} />`}
            >
                <div className="flex justify-start">
                    <BottomNav size="md" className="relative" items={items} />
                </div>
            </Section>

            {/* Sizes */}
            <Section
                title="Sizes"
                description="Different sizes"
                code={sizes
                    .map((size) => `<BottomNav size="${size}" items={items} />`)
                    .join('\n')}
            >
                <BottomNavGrid className="flex-col">
                    {sizes.map((size, i) => (
                        <div key={i} className="flex flex-col justify-start">
                            <Divdder className="py-4" variant="dashed" position="end">
                                <Typography color="#daf166" variant="caption">
                                    {size}
                                </Typography>
                            </Divdder>
                            <BottomNav className="relative" size={size} items={items} />
                        </div>
                    ))}
                </BottomNavGrid>
            </Section>

            {/* Colors */}
            <Section
                title="Colors"
                description="Different theme colors"
                code={colors
                    .map((color) => `<BottomNav size="sm" color="${color}" items={items} />`)
                    .join('\n')}
            >
                <BottomNavGrid className="flex-col">
                    {colors.map((color, i) => (
                        <div key={i} className="flex flex-col">
                            <Divdder className="py-4" variant="dashed" position="end">
                                <Typography color={color} variant="caption">
                                    {color}
                                </Typography>
                            </Divdder>
                            <BottomNav
                                key={color}
                                size="sm"
                                color={color}
                                items={items}
                                className="relative"
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