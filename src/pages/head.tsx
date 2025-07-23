import { Typography } from '@/components/text';
import { translateText } from '@/editor/helpers/translate';
import { useEffect, useState } from 'react';


const components = {
    Typography: `
        Компонент Typography повторяет концепцию MUI Typography, но адаптирован под Tailwind специфику классов, семейства 'text'.
    `,
    Link: `
        
    `,
    MarqueText: `
        
    `,

    Button: `
        
    `,
    IconButton: `
        
    `,
    GroupButtons: `
        
    `,
    GroupButtonFiltre: `
        
    `,

    TextInput: `
        
    `,
    NumberInput: `
        
    `,
    ColorPicker: `
        
    `,
    Radio: `
        
    `,
    Switch: `
        
    `,
    CheckBox: `
        
    `,
    Slider: `
        
    `,
    TextArea: `
        
    `,
    Date: `
        
    `,
    Time: `
        
    `,
    File: `
        
    `,
    Autocomplete: `
        
    `,
    Select: `
        
    `,

    Tabs: `
        
    `,
    Breadcrumbs: `
        
    `,
    BottomNavigation: `
        
    `,
    Menu: `
        
    `,

    Avatar: `
        Avatars are used to show a thumbnail representation of an individual or business in the interface.
        Avatars are found throughout with uses in everything from tables to dialog menus.
    `,
    AvatarGroup: `
        
    `,
    Indicator: `
        
    `,
    Badge: `
        
    `,
    List: `
        
    `,

    SimpleTable: `
        
    `,
    DataTable: `
        
    `,

    Divider: `
        
    `,
    Splitter: `
        
    `,
    Collapse: `
        
    `,
    Accordion: `
        
    `,
    Overflow: `
        
    `,

    Footer: `
        
    `,
    Hero: `
        
    `,
    AppBar: `
        
    `,
    Chat: `
        
    `,
    Stat: `
        
    `,

    Alert: `
        
    `,
    Tooltip: `
        
    `,
    Modal: `
        
    `,
    Popover: `
        
    `,
    Drawer: `
        
    `,

    Card: `
        
    `,
    Promo: `
        
    `,
    VerticalCarousel: `
        
    `,
    HorizontalCarousel: `
        
    `,
}


export default function Head({ preview }) {
    const [current, setCurrent] = useState<string>(components[preview] ?? 'Description in development');
    const lang = globalStore.lang.use();

    useEffect(()=> {
        const cur: string = components[preview];
        
        if (cur && cur.trim().length > 0) {
            translateText(cur, lang)
                .then(setCurrent)
        }
        else setCurrent('Description in development!');
    }, [preview, lang]);


    return(
        <div className=''>
            <Typography variant='body2' color='white'>
                { current }
            </Typography>
        </div>
    );
}