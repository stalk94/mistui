import { Fragment, cloneElement, isValidElement, useRef } from "react";
import { Button, IconButton } from "../buttons";
import clsx from 'clsx';
import type { NavigationItemsDesktopProps } from './types';
import { Popover } from "../helpers";
import Menu from "../menu/list-menu";



/** линейная навигация для больших экранов */
export default function LinearNavigationItemsDesktop({ 
    items,
    style,
    className,
    ...props
}: NavigationItemsDesktopProps) {
    const mergedIcon = (icon)=> isValidElement(icon) && cloneElement(icon, {
        className: clsx(
            clsx(icon?.props?.className, 'h-[50%] mr-1')
        ),
    });


    return(
        <div 
            className={`h-full pl-3 ${className ?? ''}`}
            style={{
                display:'flex', 
                flexWrap: 'nowrap',
                ...style
            }}
            { ...props }
        >
            {items.map((item, index) => (
                <Fragment key={index}>
                    { item?.children 
                        ? (
                            <Popover
                                shadow="md"
                                trigger={
                                    <Button
                                        size="md"
                                        variant='ghost'
                                        className="px-2"
                                    >
                                        <div className="flex h-full mt-5">
                                            { item.label } 
                                            <span className="opacity-70">
                                                ▼
                                            </span>
                                        </div>
                                    </Button>
                                }
                            >
                                <Menu
                                    items={item.children}
                                    onSelect={console.log}
                                />
                            </Popover>
                        ) 
                        : (
                            <Button 
                                size="md"
                                className="px-2"
                                variant="ghost"
                                onClick={() => item.comand?.(item)}
                            >
                                <div className="flex h-full mt-5">
                                    { mergedIcon(item.icon) }
                                    { item.label }
                                </div>
                            </Button>
                        )
                    }
                </Fragment>
            ))}
        </div>
    );
}