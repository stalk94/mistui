import { forwardRef, cloneElement, useMemo, useState  } from 'react';
import { useTheme } from './theme';
import { Button } from './buttons';

type BottomNavProps = Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> & {
    items: {
        icon: React.ReactNode
        label?: string | React.ReactNode
    }[]
    active?: number
    size: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string
    onChange?: (activeIndex: number)=> void
}


const BottomNav = forwardRef<HTMLDivElement, BottomNavProps>(function BottomNav(
    {
        style = {},
        size,
        color,
        className,
        items,
        active,
        onChange,
        ...props
    },
    ref
) {
    const [curActive, setCurActive] = useState(active ?? 0);
    const { variants, autosizes } = useTheme();
    const curColor = (variants[color] ?? color);
    const sizes = (size && size !== 'auto') ? `dock-${size}` : autosizes.dock;


    return (
        <div 
            ref={ref} 
            className={`dock ${sizes}`}
            style={style}
            { ...props }
        >
            { items.map((elem, index)=> 
                <button
                    className={`${curActive === index && 'dock-active'}`}
                    onClick={()=> {
                        onChange?.(index);
                        setCurActive(index);
                    }}
                >
                    { elem.icon }

                    {elem.label &&
                        <span className="dock-label">
                            { elem.label }
                        </span>
                    }
                </button>
            )}
        </div>
    );
});


export default BottomNav;