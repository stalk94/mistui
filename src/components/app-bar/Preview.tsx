import React from "react";
import AppBar from "./index";
import { TrashIcon, HomeIcon, Cog8ToothIcon, CircleStackIcon, FolderIcon } from '@heroicons/react/24/outline';
import type { PreviewProps } from './types';
import { IconButton } from "../buttons";




/**
 * Презентационный AppBar скомпонованный по базовой схеме       
 * конструирует роуты из id и по клику(! id на каждом из уровней должен быть уникальным, либо будут коллизии)     
 */
export default function({ linkItems, onClick }: PreviewProps) {
    // тестовые данные, использовать как образец
    const navLinksTest = [
        { id: 'base', label: "Главная", icon: <HomeIcon />, divider: true },
        { id: 'info', label: "Информация", icon: <TrashIcon />, divider: true  },
        {
            id: 'services',
            label: "Услуги", 
            icon: <Cog8ToothIcon />,
            divider: true ,
            children: [
                {  id: '1', label: "Услуга 1", icon: <FolderIcon /> },
                {  id: '2', label: "Услуга 2" },
                {  id: '3', label: "Услуга 3" },
            ]
        },
        {
            id: 'descr',
            label: "О нас",
            children: [
                { id: '1', label: "Вложенный 1", icon: <CircleStackIcon /> },
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
            start={
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}
                >
                    <img
                        src="https://arenadata.tech/wp-content/uploads/2024/10/logo-white-short.png"
                        alt="Logo"
                        style={{
                            maxHeight: '40px',
                            padding: '5px',
                            objectFit: 'contain',
                            borderRadius: '3px'
                        }}
                    />
                </div>
            }
            center={
                <LinearNavigation
                    items={transformUseRouter()}
                />
            }
            end={
                <React.Fragment>
                    <IconButton
                        color="navigation"
                        aria-label="menu"
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