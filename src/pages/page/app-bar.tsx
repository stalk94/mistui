import { AppBar, BurgerMenu, LinearNavigationItems } from '@/components/app-bar';
import LinearAppBar from '@/components/app-bar/Preview';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { TrashIcon, HomeIcon, Cog8ToothIcon, CircleStackIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/buttons';
import Divider from '@/components/utils/divider';
import { baseMeta } from '../meta';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';


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
const Render = memo((props) => {
    const transformRouter = useMemo(() => {
        const func = (items, parent?: string) => {
            return items.map((elem, index) => {
                if (!parent) elem.path = '/' + elem.id;
                else elem.path = parent + '/' + elem.id;

                elem.comand = () => console.log(elem.path);

                if (elem.children) {
                    func(elem.children, elem.path);
                }

                return elem;
            });
        }

        const result = func(navLinksTest);
        return result;
    }, []);
    

    return (
        <AppBar
            startSlot={
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
            centerSlot={
                <div className='flex gap-2 ml-5'>
                    <a>link-1</a>
                    <a>link-2</a>
                    <a>link-3</a>
                </div>
            }
            endSlot={
                <div className="flex">
                    <Divider
                        color="#171717"
                        orientation='vertical'
                        className="py-1"
                    />
                    <BurgerMenu
                        items={transformRouter}
                    />
                </div>
            }
            {...props}
        />
    );
});


export default function InfoAppBar(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            
            <Section 
                title="basic" 
                description="" 
                code={`
                    import { AppBar, BurgerMenu, Divider } from 'mistui-kit';

                    <AppBar
                        startSlot={
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
                        centerSlot={
                            <div className='flex gap-2 ml-5'>
                                <a>link-1</a>
                                <a>link-2</a>
                                <a>link-3</a>
                            </div>
                        }
                        endSlot={
                            <div className="flex">
                                <Divider
                                    color="#171717"
                                    orientation='vertical'
                                    className="py-1"
                                />
                                <BurgerMenu
                                    items={transformRouter}
                                />
                            </div>
                        }
                    />
                `}
            >
                <div className="flex justify-center w-full">
                    <Render />
                </div>
            </Section>

            {/* center */}
            <Section 
                title="center" 
                description="navigation center" 
                code={`
                    <AppBar
                        variant='center'
                        ...
                    />
                `}
            >
                <div className="flex justify-center w-full">
                    <Render variant='center'/>
                </div>
            </Section>

            {/* overflow */}
            <Section
                title="overflow"
                description="navigation overflow. LinearAppBar uses LinearNavigation in the center slot by default, and it also creates routes on its own."
                code={`
                    import { LinearAppBar, BurgerMenu } from 'mistui-kit';
                    import { useRouter } from 'next/navigation';            // or any routing hook system

                    const router = useRouter()

                    // The id is treated as a path, with support for nested paths."
                    const items = [
                        { id: 'base', label: "Home", icon: <HomeIcon /> },
                        { id: 'settings', label: "setiings", icon: <HomeIcon />, children: [
                            { id: 'nested', label: "Nested", icon: <HomeIcon /> }           // will pass on to '/settings/nested' path
                        ] }
                        ...
                    ];

                    <LinearAppBar
                        items={items}
                        navigate={router.push}  // 
                        endSlot={
                            <BurgerMenu
                                items={[
                                    {id: 'base', label: "Home", icon: <HomeIcon />}, 
                                    {id: 'base2', label:'test-2'}
                                ]}
                            />
                        }
                    />
                `}
            >
                <div className="flex justify-center w-full">
                    <LinearAppBar
                        endSlot={
                            <BurgerMenu
                                items={[
                                    {id: 'base', label: "Home", icon: <HomeIcon />}, 
                                    {id: 'base2', label:'test-2'}
                                ]}
                            />
                        }
                    />
                </div>
            </Section>
        </div>
    );
}


InfoAppBar.meta = {
    ...baseMeta,
    startSlot: {
        values: ["React.ReactNode"],
        type: 'object',
        description: ''
    },
    centerSlot: {
        values: ['React.ReactNode'],
        type: 'object',
        description: ''
    },
    endSlot: {
        values: ['React.ReactNode'],
        type: 'object',
        description: ''
    },
    variant: {
        values: ["center", "left"],
        type: 'enum',
        description: ''
    }
}