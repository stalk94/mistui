import Paginator from '@/components/list/pagination';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta, variantMeta } from '../meta';



export default function InfoPaginator(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }

            {/* base */}
            <Section 
                title="basic" 
                description="" 
                code={`
                    <Paginator/>
                `}
            >
                <div className="flex justify-center">
                    <Paginator />
                </div>
            </Section>
        </div>
    );
}


InfoPaginator.meta = {
    className: baseMeta.className,
    style: baseMeta.style,
    color: baseMeta.color,
    shadow: baseMeta.shadow,
    size: baseMeta.shadow,
    variant: {
        ...variantMeta.variant,
        default: 'soft'
    },
    count: {
        values: ['number'],
        type: 'number',
        default: 5,
        description: ''
    },
    page: {
        values: ['number'],
        type: 'number',
        description: ''
    },
    showFirstButton: {
        values: ['boolean'],
        type: 'boolean',
        description: ''
    },
    showLastButton: {
        values: ['boolean'],
        type: 'boolean',
        description: ''
    },
    onChange: {
        values: ['function'],
        type: 'func',
        description: 'A function called when page changes.'
    },
}