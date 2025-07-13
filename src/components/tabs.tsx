import { Fragment } from "react";

type Props = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'onClick' | 'style'>;
type TabsProps = Props & {
    variant?: 'box' | 'border' | 'lift'
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    items: {
        label: string | React.ReactNode
        content: string | React.ReactNode
    }[]
}


export default function Tabs({ 
    variant = 'lift',
    size,
    style,
    items,
    ...props
}:  TabsProps) {
    
    return (
        <div 
            role="tablist" 
            className={`
                tabs
                tabs-${variant}
            `}
        >
            {items.map((tabData, index)=>
                <Fragment key={index}>
                    {/* label */}
                    <label className="tab tab-active">
                        <input type="radio" name={`name-${index}`} />
                        { tabData.label }
                    </label>
                    {/* контент вкладки */}
                    <div 
                        className="tab-content bg-base-100 border-base-300 p-6"
                    >
                        { tabData.content }
                    </div>
                </Fragment>
            )}
        </div>
    );
}