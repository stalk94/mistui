import CustomBar from '../components/nav-bars/bar'
import { Typography } from '../index';
import { Outlet, useNavigate } from 'react-router-dom';
import { store } from './config-props';
import ListMenu from '../components/menu/list-menu';
import type { NavItem } from '../components/menu/type';
import { DocumentTextIcon, CursorArrowRaysIcon, PencilSquareIcon, ListBulletIcon,
    CodeBracketSquareIcon, DocumentIcon, ChatBubbleBottomCenterTextIcon, PhotoIcon, FolderIcon
} from '@heroicons/react/24/solid';
import { useEffect } from 'react';


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
    layout: ['Divider', 'Splitter', 'Collapse', 'Accordion', 'Overflow'],
    page: ['Footer', 'Hero', 'AppBar', 'Chat', 'Stat'],
    feedback: ['Alert', 'Tooltip', 'Modal', 'Popover', 'Drawer'],
    media: ['Card', 'Promo', 'VerticalCarousel', 'HorizontalCarousel'],
    form: [''],
}



export default function SandBoxRoot({ }) {
    const variants = store.variants.use();
    const navigate = useNavigate();

    
    const create = () => {
        const result: NavItem[] = [];

        Object.entries(category).map(([cat, elems]) => {
            result.push({
                id: cat,
                label: cat.toUpperCase(),
                icon: icons[cat],
                open: true,
                style: {
                    color: '#ffffff6c',
                },
                children: elems.map((nameComponent) => ({
                    id: nameComponent,
                    label: (
                        <Typography
                            className='font-light'
                            fontFamily='JetBrains Mono'
                            style={{ color: '#ffffff', fontSize: 13 }}
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
    useEffect(()=> {
        const result = create();
        store.variants.set(result);
    }, []);


    return (
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
                        onSelect={(item) => {
                            navigate(`/components/${item.id}`);
                        }}
                    />
                }
            </CustomBar>

            <Outlet />
        </section>
    );
}