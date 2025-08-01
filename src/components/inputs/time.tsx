import { LuClock4 } from "react-icons/lu";
import BaseInput from './base';
import { IconButton } from '../buttons';
import { useRef } from 'react';
import type { TimeInputProps } from './type';


export default function Time({
    size,
    ...props
}: TimeInputProps) {
    const ref = useRef<HTMLInputElement>(null);

    const openPicker = () => {
        if (ref.current) {
            ref.current.showPicker()
        }
    }


    return(
        <BaseInput
            ref={ref}
            type='time'
            size={size}
            labelRight={
                <IconButton
                    size={size}
                    onClick={openPicker}
                    variant="ghost"
                >
                    <LuClock4 
                        //color="white"
                    />
                </IconButton>    
            }
            { ...props }
        />
    );
}