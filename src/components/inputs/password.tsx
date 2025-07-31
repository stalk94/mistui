import { IoEye, IoEyeOff } from "react-icons/io5";
import Base from './base';
import { IconButton } from '../buttons';
import { useState } from 'react';
import type { PasswordInputProps } from './type';


export default function Password({
    size,
    ...props
}: PasswordInputProps) {
    const [view, setView] = useState(false);


    return(
        <Base
            type={view ? 'text' : 'password'}
            size={size}
            labelRight={
                <IconButton
                    size={size}
                    onClick={()=> setView(v => !v)}
                    variant="ghost"
                >
                    { view 
                        ? <IoEye />
                        : <IoEyeOff />
                    }
                </IconButton>    
            }
            { ...props }
        />
    );
}