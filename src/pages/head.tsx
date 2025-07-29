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