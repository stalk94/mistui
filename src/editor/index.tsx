import React from 'react';
import { Select } from '../components/inputs';
import CustomBar from '../components/nav-bars/bar'
import { Collapse, Typography } from '../index';
import SandBox from './Render';
import PropsVariator, { store } from './config-props';
import ListMenu from '../components/menu/list-menu';
import type { NavItem } from '../components/menu/type';
import { DocumentTextIcon, CursorArrowRaysIcon, PencilSquareIcon, ListBulletIcon, 
    CodeBracketSquareIcon, DocumentIcon, ChatBubbleBottomCenterTextIcon, PhotoIcon, FolderIcon
} from '@heroicons/react/24/solid';


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
    inputs: ['TextInput', 'NumberInput', 'Radio', 'Switch' , 'CheckBox', 'Slider', 'TextArea', 'Date', 'Time', 'File'],
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
                    color: '#ffffff66'
                },
                children: elems.map((nameComponent)=> ({
                    id: nameComponent,
                    label: (
                        <Typography 
                            fontFamily='lato' 
                            style={{color:'#ffffff', fontSize:14}} 
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
            data-font="roboto"
            className="flex h-screen w-screen main flex-col"
        >
            {/*<AppBar/>*/}
            <section className='flex h-full'>
                <CustomBar
                    orientation='vertical'
                    style={{
                        width: '20%', 
                        background: '#282828',
                        boxShadow: "3px 0 4px rgba(0, 0, 0, 0.08)", 
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

                <PropsVariator />

                <section className='flex flex-col w-full'>
                    <nav
                        className="flex gap-2 w-full"
                        style={{ background: 'rgb(54, 54, 54)', boxShadow: "3px 0 4px rgba(0, 0, 0, 0.3)" }}
                    >
                        <Select
                            size='sm'
                            value={theme}
                            items={daisyThemes}
                            onChange={setTheme}
                        />
                    </nav>

                    <main className="flex flex-col h-full w-full">
                        <SandBox />
                    </main>
                </section>
            </section>
        </div>
    );
}