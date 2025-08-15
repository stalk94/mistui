import { AppBar, Collapse, Divider, IconButton, Select, Typography, OrgChart } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';
import { maskClasses } from './flag';

const variants = ['contained', 'solid', 'dashed', 'dotted'];
const data = [{
    label: 'Comands',
    expanded: true,
    children: [
        {
            label: 'England',
            expanded: true,
            children: [
                {
                    label: 'Chelsea FC',
                    data: 'test'
                },
                {
                    label: 'Liverpool FC'
                }
            ]
        },
        {
            label: 'Spain',
            expanded: true,
            children: [
                {
                    label: 'Barselona FC'
                },
                {
                    label: 'Real Madrid FC'
                }
            ]
        }
    ]
}];


export default function InfoOrgChart(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="basic"
                description=""
                code={`
                    const data =  [{
                        label: 'Comands',
                        expanded: true,
                        children: [
                            {
                                label: 'England',
                                expanded: true,
                                children: [
                                    {
                                        label: 'Chelsea FC',
                                        data: 'test'
                                    },
                                    {
                                        label: 'Liverpool FC'
                                    }
                                ]
                            },
                            {
                                label: 'Spain',
                                expanded: true,
                                children: [
                                    {
                                        label: 'Barselona FC'
                                    },
                                    {
                                        label: 'Real Madrid FC'
                                    }
                                ]
                            }
                        ]
                    }];

                    <OrgChart
                        value={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <OrgChart
                        size='xs'
                        value={data}
                    />
                </div>
            </Section>
        </div>
    );
}

InfoOrgChart.meta = {
    variant: {
        values: variants,
        type: 'enum',
        default: 'contained',
        description: ''
    },
    data: {
        values: [''],
        type: 'object',
        description: 'data diagram'
    },
    color: {
        ...baseMeta.color,
        default: 'primary'
    },
    size: {
        ...baseMeta.size,
        default: 'sm'
    }
}