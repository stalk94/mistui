import { useEffect, useState } from "react";
import { IconButton } from "../buttons";
import { useTheme } from "../theme";
import Overflow from "../utils/overflow";
import type { PaginatorProps } from './types';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";



export default function Paginator({ 
    shadow,
    size = 'xs',
    page,
    count = 5,
    className,
    color,
    variant = 'soft',
    isRounded,
    showFirstButton, 
    showLastButton,
    onChange,
    ...props 
}: PaginatorProps) {
    const [select, setSelect] = useState(page ?? 0);
    
    const handle = (value: number) => {
        setSelect(value);
        onChange?.(value);
    }
    useEffect(()=> {
        if (page !== undefined) setSelect(page);
    }, [page]);


    return (
        <div className={`join ${className ?? ''}`} { ...props }>
            { showFirstButton &&
                <IconButton
                    className="mr-0.5"
                    size={size}
                    variant="ghost"
                    color={color}
                    icon={<ChevronDoubleLeftIcon />}
                    isRounded={isRounded}
                    onClick={() => handle(0)}
                />
            }

            <IconButton
                className="mr-1"
                size={size}
                variant="ghost"
                color={color}
                icon={<ChevronLeftIcon />}
                isRounded={isRounded}
                onClick={() => setSelect((v)=> {
                    if (v >= 1) {
                        onChange?.(v - 1);
                        return v - 1
                    }
                    else {
                        onChange?.(v);
                        return v;
                    }
                })}
            />

            {new Array(count).fill(1).map((v, i)=> 
                <IconButton 
                    key={i}
                    size={size} 
                    selected={select === i}
                    variant={variant}
                    color={color}
                    icon={<span>{i + 1}</span>}
                    isRounded={isRounded}
                    style={{marginRight: 1}}
                    onClick={()=> handle(i)}
                />
            )}

            <IconButton
                className="ml-1"
                size={size}
                variant="ghost"
                color={color}
                icon={<ChevronRightIcon />}
                isRounded={isRounded}
                onClick={() => setSelect((v)=> {
                    if (v < (count - 1)) {
                        onChange?.(v + 1);
                        return v + 1
                    }
                    else {
                        onChange?.(v);
                        return v;
                    }
                })}
            />

            { showLastButton &&
                <IconButton
                    className="mr-0.5"
                    size={size}
                    color={color}
                    variant="ghost"
                    icon={<ChevronDoubleRightIcon />}
                    isRounded={isRounded}
                    onClick={() => handle(count - 1)}
                />
            }
        </div>
    );
}