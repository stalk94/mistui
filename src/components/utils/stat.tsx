import type { StatProps, StatsProps } from './types';


export default function Stat({
    figure,
    title,
    value,
    description,
    actions,
    className,
    ...props
}: StatProps) {
    
    return (
        <div 
            className={`stat ${className && className}`}
            { ...props }
        >
            {figure &&
                <div className="stat-figure text-secondary">
                    { figure }
                </div>
            }
            {title &&
                <div className="stat-title">
                    { title }
                </div>
            }
            {value &&
                <div className="stat-value">
                    { value }
                </div>
            }
            {description &&
                <div className="stat-desc">
                    { description }
                </div>
            }
            {actions &&
                <div className="stat-actions">
                    { actions }
                </div>
            }
        </div>
    );
}


export function Stats({
    items,
    className,
    orientation = 'horizontal',
    ...props
}: StatsProps) {

    return(
        <div 
            className={`
                stats 
                stats-${orientation}
                shadow
                ${className && className}
            `}
            { ...props }
        >
            {items.map((elem, index)=>
                <Stat
                    key={index}
                    { ...elem }
                />
            )}
        </div>
    );
}