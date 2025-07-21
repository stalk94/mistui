import { AppBar, BurgerMenu, LinearNavigationItems } from '@/components/app-bar';
import { Section, Grid } from '../helpers';
import { colors, colorsCustom, sizes } from '../helpers';
import { Typography } from '@/components/text';
import { TrashIcon, HomeIcon, Cog8ToothIcon, CircleStackIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/buttons';
import Divider from '@/components/utils/divider';
import { baseMeta } from '../meta';


const navLinksTest = [
    { id: 'base', label: "Главная", icon: <HomeIcon />, divider: true },
    { id: 'info', label: "Информация", icon: <TrashIcon />, divider: true },
    { id: 'info2', label: "Информация-2", icon: <TrashIcon />, divider: true },
    { id: 'info2', label: "Информация-4", icon: <TrashIcon />, divider: true },
    {
        id: 'services',
        label: "Услуги",
        icon: <Cog8ToothIcon />,
        divider: true,
        children: [
            { id: '1', label: "Услуга 1", icon: <FolderIcon /> },
            { id: '2', label: "Услуга 2" },
            { id: '3', label: "Услуга 3" },
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
const transformRouter = () => {
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
}


export default function InfoAppBar(tab) {
    return (
        <div className="p-6 space-y-8 shrink-0">
            { tab }
            {/* image */}
            <Section 
                title="AppBar" 
                description="кнопка" 
                code={``}
            >
                <div className="flex justify-center">
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
                            <LinearNavigationItems
                                items={transformRouter()}
                            />
                        }
                        endSlot={
                            <div className="flex">
                                <Divider
                                    color="#171717"
                                    orientation='vertical'
                                    className="py-1"
                                />
                                <BurgerMenu
                                    items={transformRouter()}
                                />
                            </div>
                        }
                    />
                </div>
            </Section>

            {/*  */}
            <Section
                title="AppBar orientation"
                description="разные размеры"
                code={sizes
                    .map((size) => ``)
                    .join('\n')}
            >
               <div className="flex-col justify-center">
                    
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