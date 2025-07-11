import type { BarProps } from './types';
import { useTheme } from '../theme/index';



export default function CustomBar({
    orientation,
    children,
    start,
    end,
    style,
    ...props
}: BarProps) {
    const isVertical = (orientation === 'vertical' || orientation === undefined) ? true : false;
    const positionEnd = isVertical ? { bottom: 0 } : { right: 0 };
    const positionStart = isVertical ? { top: 0 } : { left: 0 };
    const { styles } = useTheme();


    return (
        <section 
            className='scrolable'
            {...props}
            style={{
                display: 'flex',
                flexDirection: isVertical ? 'column' : 'row',
                width: '100%',
                height: '100%',
                border: `1px solid ${styles.input.borderColor}`,
                overflowY: isVertical ? 'auto' : 'hidden',
                overflowX: isVertical ? 'hidden' : 'auto',
                textAlign: 'center',
                ...style
            }}
        >
            <div
                style={{
                    position: "sticky",
                    ...positionStart,
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                { start }
            </div>

            {children}

            {/* нижняя панель инструментов рабочей области */}
            <div
                style={{
                    position: "sticky",
                    ...positionEnd,
                    zIndex: 10,
                    marginTop: isVertical ? 'auto' : undefined,
                    marginLeft: !isVertical ? 'auto' : undefined,
                    textAlign: 'center',
                }}
            >
                { end }
            </div>
        </section>
    );
}