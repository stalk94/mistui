import { Fragment, cloneElement, isValidElement, useCallback } from "react";
import { Button } from "../buttons";
import clsx from 'clsx';
import type { NavigationItemsDesktopProps } from './types';
import { Popover } from "../helpers";
import Menu from "../menu/list-menu";
import Overflow from "../utils/overflow";



/** линейная навигация для больших экранов */
export default function LinearNavigationItems({ 
    items,
    style,
    className,
    onOverflow,
    ...props
}: NavigationItemsDesktopProps) {
    const mergedIcon = (icon)=> isValidElement(icon) && cloneElement(icon, {
        className: clsx(
            clsx(icon?.props?.className, 'h-[50%] mr-1')
        ),
    });

    const render = useCallback((children)=> {
        if (onOverflow) return(
            <Overflow
                className={`h-full pl-3 pt-0.5 flex-wrap ${className ?? ''}`}
                style={style}
                onOverflow={(h)=> onOverflow?.(h)}
                overflowMap={items}
                { ...props }
            >
                { children }
            </Overflow>
        );
        else return(
            <div 
                className={`h-full pl-3 pt-0.5 ${className ?? ''}`}
                style={style}
                { ...props }
            >
                { children }
            </div>
        );
    }, [onOverflow])


    return(
        render(
            items.map((item, index) => (
                <Fragment key={index}>
                    { item?.children 
                        ? (
                            <Popover
                                usePortal
                                shadow="md"  
                                className="min-w-40 p-2"    
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
                                className="px-1"
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
            ))
        )
    );
}