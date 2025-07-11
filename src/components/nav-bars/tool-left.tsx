import React from "react";
import { useTheme } from '../theme/index';
import BaseLeftSideBar from "./left-nav";
import type { SideBarAndToolPanelProps } from './types';



/**
 * Это модернизация `<LeftSideBar>`   
 * Боковая панель со связаным полем справа  
 * 
 * как это работать должно:  
 * - подаем `schemaNavBar`
 * - слушаем `onChangeNavigation`
 * - меняем `children`
 */
export default function SideBarAndToolPanel({ 
    schemaNavBar, 
    center, 
    start, 
    end, 
    children, 
    onChangeNavigation, 
    ...props 
}: SideBarAndToolPanelProps) {
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
        <section className="scrolable"
            style={{
                display: 'flex',
                flexDirection: 'row',
                maxHeight: '100%',
                minWidth: 50,
                overflow: 'hidden'
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
                <div
                    style={{
                        width: props.width ?? '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: useBackgroundColor(),
                        //border: `1px solid ${darken(theme.palette.divider, 0.3)}`,
                        borderLeft: 'none',
                        boxShadow: "inset 3px 0 5px rgba(0, 0, 0, 0.15)",
                        overflowY: "auto",
                        overflowX: 'hidden',
                        ...props?.style,
                    }}
                >
                    {/* верхняя панель инструментов рабочей области */}
                    <div 
                        style={{
                            position: "sticky",
                            top: 0,
                            zIndex: 10,
                            textAlign: 'center',
                            background: useTopOrEndColor('start'),
                        }}
                    >
                        { center }
                    </div>

                    { children }

                    {/* нижняя панель инструментов рабочей области */}
                    <div 
                        style={{
                            position: "sticky",
                            bottom: 0,
                            zIndex: 10,
                            marginTop: 'auto',
                            textAlign: 'center',
                            background: useTopOrEndColor('end'),
                        }}
                    >
                        { end }
                    </div>
                </div>
            }           
        </section>
    );
}