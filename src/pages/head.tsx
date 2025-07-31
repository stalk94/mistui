import { Typography } from '@/components/text';
import { translateText } from '@/editor/helpers/translate';
import { useEffect, useState } from 'react';


const components = {
    ThemeProvider: `
        🎨 The ThemeProvider component wraps your entire app and is required for all MistUI components to function correctly. To customize the theme, pass a config object using the 'theme' prop, created with createTheme().
    `,
    AlertProvider: `
        🔔 The AlertProvider component sets up a global alert system using React context. It allows you to trigger styled alert messages (toasts) from anywhere in your app using the useAlert() hook.  
    `,
    Typography: `
       ✏️ The Typography component follows the Material UI concept but is adapted to Tailwind CSS conventions and uses the text-* utility classes family.
    `,
    Link: `
        🔗 The Link component is an extension of the base [Typography] component, designed specifically for navigation purposes with optional support for custom routing logic.
    `,
    MarqueText: `
        🏃‍♂️ MarqueeText is a visual component for creating a continuous scrolling text (marquee effect) with customizable direction, speed, and optional pause on hover. It is fully compatible with Typography, from which it inherits visual styles and properties.
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
    Skeleton: `
        Отобразите предварительный просмотр вашего контента до загрузки данных, чтобы уменьшить время загрузки.
        Данные для ваших компонентов могут быть доступны не сразу. Вы можете улучшить воспринимаемую отзывчивость страницы, используя скелеты. Создаётся впечатление, что всё происходит мгновенно, а затем информация постепенно отображается на экране
    `
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