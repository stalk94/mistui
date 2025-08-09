import { forwardRef } from 'react';
import { useTheme } from '../theme';
import type { RatingProps } from './type';


const sizesStar = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 26,
    xl: 32
}


const Rating = forwardRef<HTMLDivElement, RatingProps>(function Rating(
    {
        value = 2,
        max = 5,
        color = 'orange',
        onChange,
        size,
        className,
        shadow,
        ...props
    },
    ref
) {
    const { variants, shadows } = useTheme();


    return(
        <div 
            ref={ref}
            className={`rating ${className ?? ''}`} 
            {...props}
        >
            {new Array(max).fill(1).map((v, i)=>
                <input 
                    key={i}
                    type="radio" 
                    name="rating" 
                    className="mask mask-star"
                    defaultChecked={value === i+1 ? 'checked' : undefined}
                    onClick={()=> onChange?.(i+1)}
                    style={{
                        background: variants[color] ?? color,
                        boxShadow: shadows[shadow],
                        width: sizesStar[size],
                        height: sizesStar[size],
                    }}
                />
            )}
        </div>
    );
});


export default Rating;