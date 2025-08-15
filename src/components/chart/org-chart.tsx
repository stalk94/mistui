import { OrganizationChart } from "primereact/organizationchart";
import type { OrgChartProps } from './types';
import { useTheme } from '../theme';


const sizes = {
    xs: 8,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18
}
const testData = [{
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


export default function OrgChart({
    value,
    color = 'primary',
    variant = 'contained',
    size = 'sm',
    ...props
}: OrgChartProps) {
    const { variants, plugins } = useTheme();
    

    const nodeTemplate = (node) => {
        const bg = plugins.alpha((variants[color] ?? color) ?? '#ccc', 0.15);

        return (
            <div
                style={{
                    border: `1px ${variant} ${(variants[color] ?? color) ?? '#ccc'}`,
                    background: variant === 'contained' ? bg : '',
                    padding: '8 16',
                    borderRadius: 4
                }}
            >
                <div style={{fontSize: sizes[size], fontWeight:'bold'}}>
                    { node.label }
                </div>
                <div className="node-content">
                    <div style={{fontSize: sizes[size] - 1, opacity:0.8}}>
                        { node.data }
                    </div>
                </div>
            </div>
        );
    }


    return(
        <>
            <style>{`
                .p-organizationchart .p-organizationchart-line-down {
                    background: ${(variants[color] ?? color) ?? '#ccc'};
                    opacity: 0.5;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid ${(variants[color] ?? color) ?? '#ccc'};
                    border-color: ${(variants[color] ?? color) ?? '#ccc'};
                    opacity: 0.5;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid ${(variants[color] ?? color) ?? '#ccc'};
                    border-color: ${(variants[color] ?? color) ?? '#ccc'};
                    opacity: 0.5;
                }
            `}
            </style>

            <OrganizationChart
                value={value ?? testData}
                nodeTemplate={nodeTemplate}
                { ...props }
            />
        </>
    );
}