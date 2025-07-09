import React, { useState } from "react";
import { BoxProps, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Divider,
    Box, MenuItem, Badge, useTheme, alpha, darken
} from "@mui/material";
import { ExpandLess, ExpandMore, FiberManualRecord } from "@mui/icons-material";
import { NavLinkItem } from '../menu/type';
import Menu from '../menu/index';



type SidebarMenuProps = {
    collapsed: boolean
    onChange?: (item: NavLinkItem)=> void
    items: NavLinkItem[]
    sx?: React.CSSProperties
    isFocusSelected?: boolean 
    selected?: any
    listStyle?: React.CSSProperties
}
type LeftNavigationProps = SidebarMenuProps & BoxProps & {
    type: 'box' | 'drawer'
    end?: NavLinkItem[]
    start?: NavLinkItem[]
    /** показывать выделленным цветом текуший выбранный элемент */
    isFocusSelected?: boolean 
}



/**
 * todo: надо декомпозировать и рефакторить
 * Базовый выдвижной список (располагается слева)
 * Можно передавать onChange которая для каждого выполнится выбранного.  
 * * так же у каждого item может быть свой comand()
 */
export function SidebarMenu({ collapsed, items, sx, onChange, isFocusSelected, selected, ...props }: SidebarMenuProps) {
    const theme = useTheme();
    const isMounted = React.useRef(false)
    const [openMenus, setOpenMenus] = useState({});
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentChildren, setCurrentChildren] = useState([]);
    const [selectedItem, setSelectedItem] = useState<string|null>(null);
    const [activeParent, setActiveParent] = useState(null);


    React.useEffect(()=> {
        if(collapsed && isMounted.current) setOpenMenus({});
    }, [collapsed]);
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
        if(selected && isMounted.current) setSelectedItem(selected);
        else if(!isMounted.current) isMounted.current = true;
    }, [selected]);
    

    return (
        <React.Fragment>
            {/* вертикальный список */}
            <Box sx={sx ?? { 
                    display: "flex", 
                    flexDirection: "column",
                    overflowY: "auto", 
                    overflowX: "hidden",
                    ...theme.mixins.scrollbar
                }}
            >
                <List sx={{...props?.listStyle}}>
                    { items.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* разделитель */}
                            { item.divider && 
                                item.divider === true 
                                    ? <Divider sx={{mt:1, mb:1, borderStyle: 'dashed'}}/>
                                    : item.divider
                            }

                            {/* элемент */}
                            { !item.divider && (
                                <React.Fragment>
                                    <ListItemButton
                                        onClick={(e)=> handlerClick(e, item)}
                                        sx={{
                                            justifyContent: collapsed ? "center" : "flex-start",
                                            px: collapsed ? 0 : 2,
                                            ...item?.style
                                        }}
                                    >
                                        <ListItemIcon 
                                            sx={{ 
                                                minWidth: collapsed ? "auto" : 36,
                                                color: (selectedItem === item.id||activeParent === item.id) 
                                                    ? theme.palette?.toolNavBar?.select
                                                    : theme.palette?.toolNavBar?.icon 
                                            }}
                                        >
                                            {collapsed && item?.state?.badge ? (
                                                <Badge
                                                    showZero={false}
                                                    badgeContent={item.state.badge}
                                                    color="info"
                                                    variant="standard"
                                                    sx={{
                                                        '& .MuiBadge-badge': {
                                                            backgroundColor: theme.palette?.toolNavBar?.badgeBcg,
                                                            color: theme.palette?.toolNavBar?.badgeText,
                                                        }
                                                    }}
                                                >
                                                    { item.icon }
                                                </Badge>
                                            ) : (
                                                item.icon
                                            )}
                                        </ListItemIcon>

                                        { !collapsed && 
                                            <ListItemText primary={item.label} />
                                        }

                                        { !collapsed && item.children && 
                                            (openMenus[item.id] 
                                                ? <ExpandLess /> 
                                                : <ExpandMore />
                                            )
                                        }
                                    </ListItemButton>

                                    {/* вложенные children */}
                                    {!collapsed && item.children && (
                                        <Collapse in={openMenus[item.id]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {item.children.map((child, childIndex) => (
                                                    <ListItemButton
                                                        key={childIndex}
                                                        sx={{ 
                                                            pl: 4, 
                                                            backgroundColor: selectedItem === child.id ? theme.palette.action.active : "transparent" 
                                                        }}
                                                        onClick={() => {
                                                            handleItemClick(child, item.id);
                                                        }}
                                                    >
                                                        <ListItemIcon sx={{ minWidth: 36, color: "gray" }}>
                                                            { child.icon }
                                                        </ListItemIcon>
                                                        <ListItemText primary={child.label} />
                                                    </ListItemButton>
                                                ))}
                                            </List>
                                        </Collapse>
                                    )}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Box>

            {/* Меню */}
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "center", horizontal: "left" }}
                sx={{
                    ml: 1,
                    mt: {
                        xs: 1.5,
                        md: 0
                    }
                }}
            >
                { currentChildren.map((child, index)=> (
                    <MenuItem
                        key={index}
                        sx={{ 
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
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}



/**
 * 
 * Панель навигации как в vs code (без рабочей области)     
 * с рабочей областью отдельный компонент
 */
export default function BaseLeftSideBar({ collapsed, start, items, onChange, end, sx, ...props }: LeftNavigationProps) {
    const theme = useTheme();
    const styleEnd = { 
        borderTop: `1px dotted ${theme.palette.divider}`,
        backdropFilter: "blur(14px)",
        backgroundColor: darken(theme.palette.toolNavBar.main, 0.1),
        ...theme.mixins.scrollbar
    }
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
        <Box component='div'
            sx={{
                ...sx,
                width: collapsed ? 60 : 200,
                minWidth: 50,
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '100%',
                overflowY: 'auto',
                justifyContent: 'space-between',
                border: `1px solid ${alpha('#000', 0.25)}`,
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
                    sx={styleEnd}
                    items={end}
                    onChange={onChange}
                />
            }

        </Box>
    );
}