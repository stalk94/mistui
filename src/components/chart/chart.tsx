import React from "react";
import type { ChartProps, ChartType } from './types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip,
    Legend,
    Filler
} from "chart.js";
import {
    Pie,
    Doughnut,
    Bar,
    Line,
    PolarArea,
    Radar,
    Bubble,
    Scatter
} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    LineElement,
    PointElement,
    RadialLinearScale,
    Tooltip,
    Legend,
    Filler
);


export default function Chart<T extends ChartType>({
    type,
    data,
    options = {},
    className,
    style = {},
    enableLegend
}: ChartProps<T>) {
    const charts: Record<ChartType, React.ElementType> = {
        pie: Pie,
        doughnut: Doughnut,
        bar: Bar,
        line: Line,
        polarArea: PolarArea,
        radar: Radar,
        bubble: Bubble,
        scatter: Scatter
    }
    const ChartComponent = charts[type];

    if (!ChartComponent) {
        console.error(`Unsupported chart type: ${type}`);
        return null;
    }

    return (
        <ChartComponent 
            data={data} 
            options={{
                plugins: {
                    legend: { display: enableLegend ? true : false },
                    ...options?.plugins
                },
                ...options
            }}
            className={className} 
            style={style}
        />
    );
};