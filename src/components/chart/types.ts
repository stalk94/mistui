import { OrganizationChartProps } from "primereact/organizationchart";
import type {
  ChartData,
  ChartOptions,
  ChartDataset as ChartJSDataset,
  ScatterDataPoint,
  BubbleDataPoint
} from "chart.js";


type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'>;
export type OrgChartProps = Props & OrganizationChartProps & {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    variant?: 'contained' | 'solid' | 'dashed' | 'dotted'
}



export type ChartType =
    | "pie"
    | "doughnut"
    | "bar"
    | "line"
    | "polarArea"
    | "radar"
    | "bubble"
    | "scatter";

// Базовый набор полей для всех datasets
type BaseDataset = {
    label: string;
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    borderDash?: number[];
    hoverBackgroundColor?: string | string[];
    hoverBorderColor?: string | string[];
    hoverBorderWidth?: number;
    hidden?: boolean;
}

type DatasetByType<T extends ChartType> =
    T extends "bar"
    ? ChartJSDataset<"bar", number[]> & { borderRadius?: number }
    : T extends "line"
    ? ChartJSDataset<"line", number[]> & {
        fill?: boolean | string;
        tension?: number;
        pointRadius?: number;
        pointHoverRadius?: number;
    }
    : T extends "pie" | "doughnut"
    ? ChartJSDataset<T, number[]>
    : T extends "polarArea" | "radar"
    ? ChartJSDataset<T, number[]>
    : T extends "scatter"
    ? ChartJSDataset<"scatter", ScatterDataPoint[]>
    : T extends "bubble"
    ? ChartJSDataset<"bubble", BubbleDataPoint[]>
    : never;

export type ChartDataset<T extends ChartType = ChartType> = BaseDataset & DatasetByType<T>;


export type ChartProps<T extends ChartType = ChartType> = {
    type: T;
    data: ChartData<T, ChartDataset<T>["data"], string>;
    options?: ChartOptions<T>;
    enableLegend?: boolean;
    className?: string;
    style?: React.CSSProperties
}