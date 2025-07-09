import React from "react";
import AppBar, { Start, LinearNavigation, MobailBurger } from "./index";
import { AccountBox, Home, Settings, Info } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";
import { NavLinkItem } from '../menu/type';


type Props = {
    linkItems?: NavLinkItem[]
    onClick?: (path: string)=> void
}


/**
 * Презентационный AppBar скомпонованный по базовой схеме       
 * конструирует роуты из id и по клику(! id на каждом из уровней должен быть уникальным, либо будут коллизии)     
 */
export default function({ linkItems, onClick }: Props) {
    // тестовые данные, использовать как образец
    const navLinksTest = [
        { id: 'base', label: "Главная", icon: <Home />, divider: true },
        { id: 'info', label: "Информация", icon: <Info />, divider: true  },
        {
            id: 'services',
            label: "Услуги", 
            icon: <Settings />,
            divider: true ,
            children: [
                {  id: '1', label: "Услуга 1", icon: <Home /> },
                {  id: '2', label: "Услуга 2" },
                {  id: '3', label: "Услуга 3" },
            ]
        },
        {
            id: 'descr',
            label: "О нас",
            children: [
                { id: '1', label: "Вложенный 1", icon: <Home /> },
                { id: '2', label: "Вложенный 2" },
                { id: '3', label: "Вложенный 3" },
            ]
        },
    ];

    // вяжется на все элементы навигации, получает rout нажатого элемента
    const handlerClickNavigation =(path: 'string')=> {
        console.log(path);
        onClick && onClick(path);
    }
    // ANCHOR - трансформатор id в rout
    const transformUseRouter =()=> {
        const func =(items, parent?: string)=> {
            return items.map((elem, index)=> {
                if(!parent) elem.path = '/' + elem.id;
                else elem.path = parent + '/' + elem.id;
    
                elem.comand =()=> handlerClickNavigation(elem.path);
    
                if(elem.children) {
                    func(elem.children, elem.path);
                }
    
                return elem;
            });
        }
    
        const result = func(linkItems ?? navLinksTest);
        return result;
    }


    return(
        <AppBar
            elevation={1}
            start={
                <Start>
                    <Box
                        component="img"
                        src="https://arenadata.tech/wp-content/uploads/2024/10/logo-white-short.png" // Замените на ваш логотип
                        alt="Logo"
                        sx={{
                            maxHeight: '40px',
                            padding: '5px',
                            objectFit: 'contain',
                            borderRadius: '3px'
                        }}
                    />
                </Start>
            }
            center={
                <LinearNavigation
                    sx={{
                        justifyContent: 'flex-end',
                        mr: 2
                    }}
                    items={transformUseRouter()}
                />
            }
            end={
                <React.Fragment>
                    <IconButton
                        edge="end"
                        color="navigation"
                        aria-label="menu"
                        sx={{ mx: 0.5 }}
                    >
                        <AccountBox />
                    </IconButton>
                    <MobailBurger
                        items={transformUseRouter()}
                    />
                </React.Fragment>
            }
        />
    );
}