import { FaRegCalendarAlt } from "react-icons/fa";
import BaseInput from './base';
import { IconButton } from '../buttons';
import { useRef } from 'react';
import type { DateInputProps } from './type';


export default function Date({
    size,
    ...props
}: DateInputProps) {
    const ref = useRef<HTMLInputElement>(null);

    const openPicker = () => {
        if (ref.current) {
            ref.current.showPicker()
        }
    }


    return(
        <BaseInput
            ref={ref}
            type='date'
            size={size}
            labelRight={
                <IconButton
                    size={size}
                    onClick={openPicker}
                    variant="ghost"
                >
                    <FaRegCalendarAlt 
                        //color="white"
                    />
                </IconButton>    
            }
            { ...props }
        />
    );
}