import { useEffect, useCallback, useMemo, useState } from "react";
import AppBar from "./AppBar";
import { TrashIcon, HomeIcon, Cog8ToothIcon, CircleStackIcon, FolderIcon } from '@heroicons/react/24/outline';
import type { PreviewProps } from './types';
import { useBreakpoints } from "../hooks";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { LinearNavigationItems, BurgerMenu } from './index';
import Divider from "../utils/divider";


const TestLogo = () => (
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
);
const navLinksTest = [
    { id: 'base', label: "Home", icon: <HomeIcon />, divider: true },
    { id: 'info', label: "Information", icon: <TrashIcon />, divider: true },
    { id: 'info2', label: "Information-2", icon: <TrashIcon />, divider: true },
    { id: 'info2', label: "Information-4", icon: <TrashIcon />, divider: true },
    {
        id: 'services',
        label: "Services",
        icon: <Cog8ToothIcon />,
        divider: true,
        children: [
            { id: '1', label: "Service-1", icon: <FolderIcon /> },
            { id: '2', label: "Service-2" },
            { id: '3', label: "Service-3" },
        ]
    },
    {
        id: 'descr',
        label: "Info",
        children: [
            { id: '1', label: "Info-1", icon: <CircleStackIcon /> },
            { id: '2', label: "Info-2" },
            { id: '3', label: "Info-3" },
        ]
    },
];


/**
 *      
 *  
 */
export default function LinearAppBar({ 
    items, 
    onClick,
    startSlot,
    endSlot,
    ...props
}: PreviewProps) {
    const [overflow, setOverflow] = useState([]);

    
    // вяжется на все элементы навигации, получает rout нажатого элемента
    const handlerClickNavigation =(path: string)=> {
        console.log(path);
        onClick && onClick(path);
    }
    // ANCHOR - трансформатор id в rout
    const transformRouter = useMemo(()=> {
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
    
        const result = func(items ?? navLinksTest);
        return result;
    }, [items, onClick]);
    const handleOverflow = useCallback((items) => {
        setOverflow(prev =>
            JSON.stringify(prev) === JSON.stringify(items) ? prev : items
        );
    }, [items]);


    return(
        <AppBar
            { ...props }
            startSlot={
                startSlot
                    ? startSlot
                    : <TestLogo />
            }
            centerSlot={
                <LinearNavigationItems
                    items={transformRouter}
                    onOverflow={handleOverflow}
                />
            }
            endSlot={
                <div className="flex">
                    <BurgerMenu
                        items={overflow}
                        disabled={overflow.length === 0}
                        children={
                            <HiMiniBarsArrowDown size={'55%'}/>
                        }
                    />

                    <Divider
                        color="#171717"
                        orientation='vertical'
                        className="py-1"
                    />

                    { endSlot }
                </div>
            }
        />
    );
}