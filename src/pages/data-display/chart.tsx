import { AppBar, Collapse, Divider, IconButton, Select, Typography, Chart } from '@/index';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { baseMeta } from '../meta';
import { maskClasses } from './flag';

const types = ["pie", "doughnut", "bar", "line", "polarArea", "radar", "bubble", "scatter"];
const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'Votes',
            data: [12, 19, 3],
            backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
            borderColor: '#fff',
            borderWidth: 2,
            hoverBackgroundColor: '#000',
            hidden: false
        }
    ]
};
const dataSc = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'Votes',
            data: [{ x: 3, y: 12 }, { x: 7, y: 6 }, { x: 10, y: 10 }],
            backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
            hoverBackgroundColor: '#000',
            hidden: false
        }
    ]
};
const dataBc = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'Votes',
            data: [{ x: 3, y: 12, r: 8 }, { x: 7, y: 16, r: 12 }, { x: 10, y: 10, r: 5 }],
            backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
            hoverBackgroundColor: '#000',
            hidden: false
        }
    ]
};

export default function InfoChart(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            {tab}

            {/* base */}
            <Section
                title="bar"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="bar"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="bar"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="line"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="line"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="line"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="pie"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="pie"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="pie"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="polarArea"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="polarArea"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="polarArea"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="radar"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="radar"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="radar"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="doughnut"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [12, 19, 3],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                borderColor: '#fff',
                                borderWidth: 2,
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="doughnut"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="doughnut"
                        data={data}
                    />
                </div>
            </Section>

            <Section
                title="scatter"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [{ x: 3, y: 12 }, { x: 7, y: 6 }, { x: 10, y: 10 }],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="scatter"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="scatter"
                        data={dataSc}
                    />
                </div>
            </Section>

            <Section
                title="bubble"
                description=""
                code={`
                    const data = {
                        labels: ['Red', 'Blue', 'Yellow'],
                        datasets: [
                            {
                                label: 'Votes',
                                data: [{ x: 3, y: 12, r: 8 }, { x: 7, y: 6, r: 12 }, { x: 10, y: 10, r: 5 }],
                                backgroundColor: ['#f87171', '#60a5fa', '#facc15'],
                                hoverBackgroundColor: '#000',
                                hidden: false
                            }
                        ]
                    };

                    <Chart
                        type="bubble"
                        data={data}
                    />
                `}
            >
                <div className="flex justify-center h-50">
                    <Chart
                        type="bubble"
                        data={dataBc}
                    />
                </div>
            </Section>
        </div>
    );
}

InfoChart.meta = {
    type: {
        values: types,
        type: 'enum',
        description: 'type diagram'
    },
    data: {
        values: [''],
        type: 'object',
        description: 'data diagram'
    },
    enableLegend: {
        values: ['boolean'],
        type: 'boolean',
        default: 'false',
        description: ''
    }
}