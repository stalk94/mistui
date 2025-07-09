import React from "react";
import { Box, useTheme, darken, SxProps } from "@mui/material";
import { NavLinkItem } from '../menu/type';
import BaseLeftSideBar from "./left-nav";


export type SideBarAndToolPanelProps = {
    /** слоты навигационной панели */
    schemaNavBar: {
        start?: NavLinkItem[]
        items: NavLinkItem[]
        /** нижняя субпанелька, всегда поверх базовой */
        end?: NavLinkItem[]
    }
    /** ⬇️ Нижняя панелька для дополнительных элементов(tool) */
    end?: React.ReactNode
    /** центральные элементы */
    center?: React.ReactNode
    /** ⬆️ Верхняя панелька для дополнительных элементов(tool) */
    start?: React.ReactNode
    /** 💻 Контент рабочей области(правая панель) */
    children: React.ReactNode
    /** 🔥 нажат элемент боковой навигации */
    onChangeNavigation?: (item: NavLinkItem)=> void
    /** 📏 Ширина рабочей области (без учета навигации) */
    width?: string | number
    /** настройки стиля обшего контейнера */
    sx: SxProps
    style?: React.CSSProperties
    selected?: any
}



/**
 * Это модернизация `<LeftSideBar>`   
 * Боковая панель со связаным полем справа  
 * 
 * как это работать должно:  
 * - подаем `schemaNavBar`
 * - слушаем `onChangeNavigation`
 * - меняем `children`
 */
export default function SideBarAndToolPanel({ schemaNavBar, center, start, end, children, onChangeNavigation, ...props }: SideBarAndToolPanelProps) {
    const theme = useTheme();

    const useBackgroundColor =()=> {
        const mainColor = theme.palette.toolNavBar.main;
        return darken(mainColor, 0.1);
    }
    const useTopOrEndColor =(type: 'start' | 'end')=> {
        const color = theme.palette?.toolNavBar?.[type];

        if(!color) {
            const bcgColor = useBackgroundColor();
            return darken(bcgColor, 0.1);
        }
    }


    return(
        <Box component='div'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                maxHeight: '100%',
                minWidth: 50,
                overflow: 'hidden',
                ...props.sx
            }}
        >
            {/* ANCHOR - левое навигационное меню */}
            <BaseLeftSideBar
                type="drawer"
                collapsed={true}
                onChange={(item)=> onChangeNavigation(item)}
                isFocusSelected={true}
                start={schemaNavBar?.start}
                items={schemaNavBar.items}
                end={schemaNavBar.end}
                selected={props?.selected}
            />

            {/* ANCHOR - рабочая область */}
            { children &&
                <Box
                    sx={{
                        width: props.width ?? '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: useBackgroundColor(),
                        border: `1px solid ${darken(theme.palette.divider, 0.3)}`,
                        borderLeft: 'none',
                        boxShadow: "inset 3px 0 5px rgba(0, 0, 0, 0.15)",
                        overflowY: "auto",
                        overflowX: 'hidden',
                        ...props?.style,
                        ...theme.mixins?.scrollbar
                    }}
                >
                    {/* верхняя панель инструментов рабочей области */}
                    <Box 
                        sx={{
                            position: "sticky",
                            top: 0,
                            zIndex: 10,
                            textAlign: 'center',
                            background: useTopOrEndColor('start'),
                        }}
                    >
                        { center }
                    </Box>

                    { children }

                    {/* нижняя панель инструментов рабочей области */}
                    <Box 
                        sx={{
                            position: "sticky",
                            bottom: 0,
                            zIndex: 10,
                            marginTop: 'auto',
                            textAlign: 'center',
                            background: useTopOrEndColor('end'),
                        }}
                    >
                        { end }
                    </Box>
                </Box>
            }           
        </Box>
    );
}