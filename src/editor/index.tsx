import React from 'react';
import CustomBar from '../components/nav-bars/bar'
import { AppBar, Collapse, Divider, IconButton, Typography } from '../index';
import SandBox from './Render';
import { store } from './config-props';
import ListMenu from '../components/menu/list-menu';
import type { NavItem } from '../components/menu/type';
import { DocumentTextIcon, CursorArrowRaysIcon, PencilSquareIcon, ListBulletIcon,
    CodeBracketSquareIcon, DocumentIcon, ChatBubbleBottomCenterTextIcon, PhotoIcon, FolderIcon
} from '@heroicons/react/24/solid';
import { InformationCircleIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';
import { BurgerMenu, LinearNavigationItems } from '@/components/app-bar';


const IconComponent = () => (
    <svg 
        className="mt-[1px] mr-1" 
        width="16" 
        height="16" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20 29H6V43H20V29Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path><path d="M24 4L34 21H14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path>
        <path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path>
    </svg>
);
const CheckBox = ({onChange}) => (
    <IconButton variant='ghost' size='sm' className='mr-3'>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={(e)=> onChange(e.target.checked ? 'light' : 'dark')} />

            <svg
                className="swap-on h-5 mt-[2px] fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
                className="swap-off h-5 mt-[1px] fill-[silver]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
        </label>
    </IconButton>
);
const daisyThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset"
];
const icons = {
    text: <DocumentTextIcon />,
    buttons: <CursorArrowRaysIcon/>,
    inputs: <PencilSquareIcon />,
    navigation: <ListBulletIcon />,
    'data-display': <CodeBracketSquareIcon />,
    layout: <DocumentIcon />,
    page: <DocumentIcon />,
    feedback: <ChatBubbleBottomCenterTextIcon />,
    media: <PhotoIcon />,
    form: <FolderIcon />
}
const category = {
    text: ['Typography', 'Link', 'MarqueText'],
    buttons: ['Button', 'IconButton', 'GroupButtons', 'GroupButtonFiltre'],
    inputs: ['TextInput', 'NumberInput', 'ColorPicker', 'Radio', 'Switch' , 'CheckBox', 'Slider', 'TextArea', 'Date', 'Time', 'File', 'Autocomplete', 'Select'],
    navigation: ['Tabs', 'Breadcrumbs', 'BottomNavigation', 'Menu'],
    'data-display': ['Avatar', 'AvatarGroup', 'Indicator', 'Badge', 'List', 'Table'],
    layout: ['Divider', 'Chat', 'Stat', 'Splitter', 'Collapse', 'Accordion', 'Overflow'],
    page: ['Footer', 'Hero', 'AppBar'],
    feedback: ['Alert', 'Tooltip', 'Modal', 'Popover', 'Drawer'],
    media: ['Card', 'Promo', 'VerticalCarousel', 'HorizontalCarousel'],
    form: [''],
}



export default function Sand({ }) {
    const variants = store.variants.use();
    const [theme, setTheme] = React.useState('dark');

    const create = () => {
        const result: NavItem[] = [];

        Object.entries(category).map(([cat, elems])=> {
            result.push({
                id: cat,
                label: cat.toUpperCase(),
                icon: icons[cat],
                open: true,
                style: {
                    color: '#ffffff6c',
                    fontFamily: 'JetBrains Mono'
                },
                children: elems.map((nameComponent)=> ({
                    id: nameComponent,
                    label: (
                        <Typography 
                            className='font-light'
                            fontFamily='JetBrains Mono' 
                            style={{color:'#ffffff', fontSize:13}} 
                            variant='body1'
                        >
                            {'﹒' + nameComponent}
                        </Typography>
                    ),
                    style: {
                        color: '#909090'
                    },
                }))
            });
        });

        return result;
    }


    return (
        <div
            data-theme={theme}
            className="flex h-full w-screen main flex-col"
            style={{fontFamily: 'JetBrains Mono'}}
        >
           <AppBar
                startSlot={
                    <img
                        src="logo.png"
                        alt="Logo"
                        className='ml-1'
                        style={{
                            maxHeight: '40px',
                            boxShadow: '0 1px 2px 1px rgba(1, 1, 1, 0.1)',
                            padding: '5px',
                            objectFit: 'contain',
                            borderRadius: '3px',
                            border: '1px solid #fbfbfb32',
                        }}
                    />
                }
                centerSlot={
                    <LinearNavigationItems
                        style={{marginLeft: '5%'}}
                        items={[
                            { id: 'info', label: "introduction", icon: <InformationCircleIcon /> },
                            { id: 'base', label: "install", icon: <CloudArrowDownIcon /> },
                            { id: 'components', label: "components", icon: <IconComponent /> },
                        ]}
                    />
                }
                endSlot={
                    <div className='flex items-center'>
                        <CheckBox onChange={console.log}/>
                        <Divider
                            color="#000000"
                            orientation='vertical'
                            className="py-1"
                        />
                        <BurgerMenu 
                            items={[
                                { id: 'base', label: "Главная",  },
                                { id: 'base', label: "Главная",  },
                                { id: 'base', label: "Главная",  }
                            ]}
                        />
                    </div>
                }
           />

            <section className='flex h-full overflow-y-hidden'>
                <CustomBar
                    orientation='vertical'
                    style={{
                        width: '20%',
                        minWidth: 220,
                        background: '#282828',
                        boxShadow: "3px 3px 4px rgba(1, 1, 1, 0.18)", 
                        padding: 5,
                    }}
                >
                    {variants &&
                        <ListMenu
                            size='lg'
                            items={create()}
                            onSelect={(item)=> store.preview.set(item.id)}
                        />
                    }
                </CustomBar>

                <SandBox />
            </section>
        </div>
    );
}