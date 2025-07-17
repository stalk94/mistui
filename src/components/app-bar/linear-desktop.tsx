import React, { useState } from "react";
import { Button, IconButton } from "../buttons";
import { NavItem } from '../menu/type';
import Menu from '../menu/list-menu';
import Divider from "../utils/divider";
import { Bars4Icon } from "@heroicons/react/24/outline";
import Overflow from '../utils/overflow';


type OverflowNavigationItemsProps = { 
    hiddenItems: NavItem[] 
    children?: React.ReactNode 
}
type NavigationItemsDesktopProps = { 
    items: NavItem[] 
    /** кастомный элемент в режиме переполнения */
    elementOverflow?: React.ReactNode 
}


// Компонент для отображения элемента с вложенным меню в десктопном режиме
export const DesktopNestedMenuItem =({ item }: { item: NavItem })=> {

    return (
        <React.Fragment>
            <Button
                color="primary"
                onClick={handleClick}
            >
                <>
                    { item.icon }
                    { item.label }
                </>
            </Button>
            <Menu
                items={}
            />
        </React.Fragment>
    );
}
// то что не помешается в десктопном виде
const OverflowNavigationItems =({ hiddenItems, children }: OverflowNavigationItemsProps)=> {

    const renderDefaultElement = () => {
        return(
            <IconButton
                variant="ghost"
                aria-label="menu-overflow"
            >
                <Bars4Icon />
            </IconButton>
        );
    }


    return(
        <React.Fragment>
            <div
                onClick={(e) => {
                    
                }}
            >
                { children ?? renderDefaultElement() }
            </div>
            
            <Menu
                
            />
        </React.Fragment>
    );
}


/** линейная навигация для больших экранов */
export default function LinearNavigationItemsDesktop({ 
    items, 
    elementOverflow 
}: NavigationItemsDesktopProps) {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const [visibleItems, setVisibleItems] = useState<NavItem[]>(items);
    const [hiddenItems, setHiddenItems] = useState<NavItem[]>([]);
  

    //? размер на каждый элемент фиксирован (130px)
    React.useEffect(()=> {
        const updateVisibleItems =()=> {
            if (!containerRef.current) return;

            const containerWidth = containerRef.current.offsetWidth;
            let totalWidth = 0;
            const newVisibleItems: NavLinkItem[] = [];
            const newHiddenItems: NavLinkItem[] = [];

            for (const item of items) {
                const itemWidth = 130;
                totalWidth += itemWidth;

                if (totalWidth < containerWidth - 100) {
                    newVisibleItems.push(item);
                } 
                else {
                    newHiddenItems.push(item);
                }
            }

            setVisibleItems(newVisibleItems);
            setHiddenItems(newHiddenItems);
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);

        return ()=> window.removeEventListener("resize", updateVisibleItems);
    }, [items]);


    return(
        <div 
            ref={containerRef}
            className="md:flex"
            style={{
                justifyContent: "flex-start",
                flexGrow: 1,
            }}
        >
            { visibleItems.map((item, index) => (
                <React.Fragment key={index}>
                    {/* элемент с вложенным списком, с label/icon, только с icon*/}
                    { item.children 
                        ? (
                            <DesktopNestedMenuItem 
                                item={item} 
                            />
                        ) 
                        : item.label ? (
                            <Button
                                variant="ghost"
                                onClick={() => item.comand?.(item)}
                            >
                                <>
                                    { item.icon }
                                    { item.label }
                                </>
                            </Button>
                        ) 
                        : item.icon ? (
                            <Button
                                variant="ghost"
                                onClick={() => item.comand?.(item)}
                            >
                                <>
                                    { item.icon }
                                    { item.label }
                                </>
                            </Button>
                        ) 
                        : null
                    }

                    {/* Разделитель, кроме последнего элемента */}
                    { item.divider && (hiddenItems.length > 0 || index < visibleItems.length - 1) && (
                        <Divider
                            orientation="vertical"
                            style={{
                                height: "22px",
                                alignSelf: "center",
                            }}
                        />
                    )}
                </React.Fragment>
            ))}

            {/* то что не помещается выносим в выделенную вкладку */}
            { hiddenItems.length > 0 &&
                <OverflowNavigationItems 
                    hiddenItems={hiddenItems}
                    children={elementOverflow}
                />
            }
        </div>
    );
}