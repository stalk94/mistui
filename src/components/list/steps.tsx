import { forwardRef } from 'react';
import type { StepsProps } from './types';



const Steps = forwardRef<HTMLUListElement, StepsProps>(function Steps({ 
    shadow,
    size = 'xs',
    className,
    color,
    variant = 'soft',
    ...props 
}: StepsProps) {


    return (
        <ul
            className={`steps`}
        >
           
        </ul>
    );
})