import React from 'react';
import { Select } from 'src/components/inputs';
import CustomBar from '../components/nav-bars/bar'
import { Collapse } from '../index';
import SandBox from './Render';
import PropsVariator, { store } from './config-props';
import { Button, GroupButton, GroupButtonFiltre } from '../index';


const daisyThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset"
];
const category = {
    text: ['Typography', 'Link', 'MarqueText'],
    buttons: ['Button', 'IconButton', 'GroupButtons', 'GroupButtonFiltre'],
    inputs: ['TextInput', 'Radio', 'Switch' , 'CheckBox', 'Slider', 'TextArea', 'Date', 'Time', 'File'],
    navigation: ['Tabs', 'Breadcrumbs', 'BottomNavigation'],
    'data-display': ['Avatar', 'AvatarGroup', 'Indicator', 'Badge', 'List', 'Table'],
    layout: ['Divider', 'Chat', 'Stat', 'Splitter', 'Collapse', 'Accordion', 'Overflow'],
    page: ['Footer', 'Hero', 'AppBar'],
    feedback: ['Alert', 'Tooltip', 'Modal', 'Popover', 'Drawer'],
    media: ['Card', 'Promo', 'VerticalCarousel', 'HorizontalCarousel'],
    form: [],
};



export default function Sand({ }) {
    const variants = store.variants.use();
    const [theme, setTheme] = React.useState('dark');


    return (
        <div
            data-theme={theme}
            data-font="roboto"
            className="flex h-screen w-screen main flex-col"
        >
            {/*<AppBar/>*/}
            <section className='flex h-full'>
                <CustomBar
                    style={{
                        width:'20%', 
                        background: 'rgb(54, 54, 54)',
                        boxShadow: "3px 0 4px rgba(0, 0, 0, 0.08)", 
                        padding: 5,
                    }}
                >
                    {variants &&
                        <GroupButton
                            size='sm'
                            isVertiacal
                            items={variants}
                            onChange={(v)=> store.preview.set(v)}
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
                        <div className="flex flex-col m-auto w-90">
                            <SandBox />
                        </div>
                    </main>
                </section>
            </section>
        </div>
    );
}