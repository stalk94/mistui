import { OrganizationChart } from "primereact/organizationchart";
import type { OrgChartProps } from './types';


const testData = [{
    label: 'F.C Barcelona',
    expanded: true,
    children: [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'Chelsea FC'
                },
                {
                    label: 'F.C. Barcelona'
                }
            ]
        },
        {
            label: 'Real Madrid',
            expanded: true,
            children: [
                {
                    label: 'Bayern Munich'
                },
                {
                    label: 'Real Madrid'
                }
            ]
        }
    ]
}];


export default function OrgChart({
    value,
    ...props
}: OrgChartProps) {
    const nodeTemplate = (node) => {
        return (
            <div
                style={{
                    border: '1px solid #ccc',
                    padding: '8 16',
                    borderRadius: 2
                }}
            >
                <div
                    style={{
                        fontSize: 12
                    }}
                >
                    { node.label }
                </div>
                <div className="node-content">
                    <div>
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
                    background: #e5e7eb;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid #e5e7eb;
                    border-color: #e5e7eb;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid #e5e7eb;
                    border-color: #e5e7eb;
                }
            `}
            </style>

            <OrganizationChart
                value={value ?? testData}
                { ...props }
            />
        </>
    );
}