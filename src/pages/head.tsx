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
        🔘 The Button component is a highly customizable UI element built on top of native <button>, providing extended styling options, theme integration, dynamic hover effects, gradient support, and ripple animation.
        It is tightly integrated with the design system (via useTheme()), and inherits consistent sizing, color variants, shadows, and utilities from your theme setup.
    `,
    IconButton: `
        🔘 IconButton is a specialized button component designed to display icons with advanced styling, theme integration, and interactive effects. Built on top of the native <button>, it supports adaptive visual variants, (gradients in development), shadows, and ripple animations.
    `,
    GroupButtons: `
        🎛️ The ToggleButtonGroup (<GroupButton>) is a smart, customizable group of buttons that allows users to toggle between multiple options — like tabs, filters, or view modes.
        It supports both plain values (string, number) and object items ({ id, label }), and returns the selected item (or just its ID) via onChange.
    `,
    GroupButtonFiltre: `
        🧮 The ToggleButtonFiltreGroup (<GroupButtonFiltre>) is a filter-style toggle button group designed for selecting a single option with a reset capability. It’s perfect for filter UIs, search tools, or segmented control bars.
    `,
    Flag: `
        🏳️ FlagCountry renders the SVG flag of a country based on its country code. It automatically normalizes some special codes (e.g., EN or UK become GB) and selects the correct SVG from the flags collection covering over 250 countries.
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
        👤 Avatar is a universal component for displaying user avatars or placeholders with initials or icons. It supports various sizes, shapes, colors (including custom ones) and shadows, and is fully integrated with themes.
    `,
    AvatarGroup: `
        👥 The AvatarGroup component renders a set of overlapping avatars — perfect for representing users, team members, or participants.
        It is a simple wrapper around the Avatar component that arranges multiple avatars in a grouped layout.
    `,
    Indicator: `
        🎯 The Indicator component overlays badges, dots, or any custom content over another element — perfect for showing status, notifications, or attention markers.
        It works by wrapping a target element (children) and positioning one or multiple indicators.
    `,
    Badge: `
        🔖 The Badge component is a small, stylized label used to highlight, tag, or annotate content. It supports variants, color (themes or optional), shadows, and optional icons.
    `,
    List: `
        
    `,

    SimpleTable: `
        
    `,
    DataTable: `
        
    `,

    Divider: `
        ⌇ A flexible line divider used to visually separate content. You can customize orientation, color, thickness, and add optional content (like a label or icon) in the center, left, or right.
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
        🦴 Display a preview of your content before loading the data to reduce perceived loading time.
        Data for your components might not be available immediately. You can improve the perceived responsiveness of the page by using skeletons. 
        This creates the impression that everything is happening instantly, while the actual information is gradually being shown on screen.
    `,
    Spinner: `
        🔄 A simple loading indicator component using DaisyUI's loading classes.
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