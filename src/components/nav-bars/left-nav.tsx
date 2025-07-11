import React, { useState } from "react";
import { useTheme } from '../theme/index';
import type { SidebarMenuProps, LeftNavigationProps } from './types';
import { colord } from "colord";




/**
 * todo: надо декомпозировать и рефакторить
 * Базовый выдвижной список (располагается слева)
 * Можно передавать onChange которая для каждого выполнится выбранного.  
 * * так же у каждого item может быть свой comand()
 */
export function SidebarMenu({ 
    collapsed, 
    items,  
    onChange, 
    isFocusSelected, 
    selected, 
    style,
    ...props 
}: SidebarMenuProps) {
    const theme = useTheme();
    const [openMenus, setOpenMenus] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentChildren, setCurrentChildren] = useState([]);
    const [selectedItem, setSelectedItem] = useState<string|null>(null);
    const [activeParent, setActiveParent] = useState(null);

  
    const handleToggle =(id: string)=> {
        setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
    }
    const handleItemClick = (item: NavLinkItem, parent = null) => {
        if(onChange) onChange(item);
        item.comand?.(item);

        if(isFocusSelected) setSelectedItem(item.id);
        if(parent) setActiveParent(parent); // Устанавливаем активного родителя (или null)
    }
    const handleOpenPopover = (event, children, parentId) => {
        setAnchorEl(event.currentTarget);
        setCurrentChildren(children.map(child => ({ ...child, parentId }))); // Добавляем parentId к детям
    }
    const handlerClick =(event, item)=> {
        if(item) {
            if(!item.children) handleItemClick(item);
            else if (item.children) {
                if (collapsed) {
                    handleOpenPopover(event, item.children, item.id);
                } 
                else handleToggle(item.id);
            }
        }
    }
    const handleClosePopover = () => {
        setAnchorEl(null);
        setCurrentChildren([]);
    }
    const renderIcon =(item)=> {
        if(item.icon) return (
            React.cloneElement(item.icon, {
                sx: { 
                    fontSize: 18 
                }
            })
        )
        else if(!item.icon) return(
            <FiberManualRecord 
                sx={{ 
                    fontSize: 10, 
                    pl: 0.5 
                }} 
            />
        );
    }
    React.useEffect(()=> {
        if (collapsed) setOpenMenus({});
    }, [collapsed]);
    React.useEffect(()=> {
        if (selected) setSelectedItem(selected);
    }, [selected]);
    

    return (
        <React.Fragment>
            {/* вертикальный список */}
            <div className="scrolable"
                style={style ?? { 
                    display: "flex", 
                    flexDirection: "column",
                    overflowY: "auto", 
                    overflowX: "hidden"
                }}
            >
                
            </div>

            {/* Меню */}
            <ul
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "center", horizontal: "left" }}
            >
                { currentChildren.map((child, index)=> (
                    <li
                        key={index}
                        style={{ 
                            backgroundColor: selectedItem === child.id 
                                ? theme.palette?.toolNavBar?.select 
                                : "transparent" 
                        }}
                        onClick={()=> {
                            handleItemClick(child, child.parentId); // Используем parentLabel из child
                            handleClosePopover();
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 36, opacity: 0.6 }}>
                            { renderIcon(child) }
                        </ListItemIcon>
                        <ListItemText primary={child.label} />
                    </li>
                ))}
            </ul>
        </React.Fragment>
    );
}



/**
 * 
 * Панель навигации как в vs code (без рабочей области)     
 * с рабочей областью отдельный компонент
 */
export default function BaseLeftSideBar({ 
    collapsed, 
    start, 
    items, 
    onChange, 
    end, 
    style, 
    ...props 
}: LeftNavigationProps) {
    const {  } = useTheme();

    const merge = () => {
        if(start) {
            const startTransform = start?.map((elem)=> {
                elem.style = { backgroundColor: darken(theme.palette.toolNavBar.main, 0.1), padding:2 } 
                return elem;
            });

            return [...startTransform, ...items];
        }
        else return items;
    }

    
    return(
        <section
            style={{
                ...style,
                width: collapsed ? 60 : 200,
                minWidth: 50,
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '100%',
                overflowY: 'auto',
                justifyContent: 'space-between',
                border: `1px solid ${colord('#000').alpha(0.25).toRgbString()}`,
                backgroundColor: theme.palette?.toolNavBar?.main
            }}
        >
            <SidebarMenu
                selected={props.selected}
                collapsed={collapsed}
                items={merge()}
                onChange={onChange}
                isFocusSelected={props.isFocusSelected}
                listStyle={{padding: 0}}
            />

            {/* низ */}
            { end &&
                <SidebarMenu
                    collapsed={collapsed}
                    style={{
                        borderTop: `1px dotted ${theme.palette.divider}`,
                        backdropFilter: "blur(14px)",
                        backgroundColor: darken(theme.palette.toolNavBar.main, 0.1),
                    }}
                    items={end}
                    onChange={onChange}
                />
            }
        </section>
    );
}