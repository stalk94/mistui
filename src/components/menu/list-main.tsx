import React from 'react';
import Divider from '../utils/divider';


export default function MainList({
    style,
    items
}) {


    return (
        <div
            className={`
                list 
                bg-base-100 
                rounded-box 
                shadow-md
            `}
            style={style}
        >
            {items.map((item, index) => (
                <li className="list-row" key={index}>
                    {/* разделитель */}
                    {item.divider &&
                        item.divider === true
                        ? <Divider />
                        : item.divider
                    }

                    {/* элемент */}
                    {!item.divider && (
                        <React.Fragment>
                            <ListItemButton
                                onClick={(e) => handlerClick(e, item)}
                                sx={{
                                    justifyContent: collapsed ? "center" : "flex-start",
                                    px: collapsed ? 0 : 2,
                                    ...item?.style
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: collapsed ? "auto" : 36,
                                        color: (selectedItem === item.id || activeParent === item.id)
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
                                            {item.icon}
                                        </Badge>
                                    ) : (
                                        item.icon
                                    )}
                                </ListItemIcon>

                                {!collapsed &&
                                    <ListItemText primary={item.label} />
                                }

                                {!collapsed && item.children &&
                                    (openMenus[item.id]
                                        ? <ExpandLess />
                                        : <ExpandMore />
                                    )
                                }
                            </ListItemButton>

                        </React.Fragment>
                    )}
                </li>
            ))}
        </div>
    );
}


/** 
 * 
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
                                                    {child.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={child.label} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
 */