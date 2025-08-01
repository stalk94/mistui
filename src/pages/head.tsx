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
    BaseInput: `
        🔡 BaseInput – flexible and clean input field
        A robust, theme-aware text input built to avoid the common pitfalls of most UI libraries. Clean by default, yet deeply customizable.
    `,
    NumberInput: `
        🔢 NumberInput – numeric input with step controls, built on BaseInput
        A user-friendly, theme-aware number input field based on BaseInput. Supports controlled and uncontrolled modes, optional increment/decrement buttons, built-in validation, and seamless integration with FormWrapper for labels, error messages, and styling.
    `,
    ColorPicker: `
        🎨 SelectColor – customizable color picker input
        A theme-aware color selector combining text input and an interactive RGBA color picker. Supports controlled and uncontrolled usage with debounced updates. Integrates with FormWrapper for labels, validation, sizing, and styling variants. Includes dynamic placeholder coloring and focus outline adapting to the current theme and variant.
    `,
    Radio: `
        🔘 RadioInput — customizable radio-style checkbox
        This is a stylized radio/checkbox component with full theme integration. Based on a regular <input type="checkbox">, it uses a ::before pseudo-element to create a filled circle when selected. Supports color themes, border variants (outline, dash, ghost), and sizes via useTheme(). Controlled via value and onChange. Uses FormWrapper for consistent form layout. Smooth visuals and clean integration with style tokens like variants, plugins, and shadows.
    `,
    Switch: `
        🟢 SwitchBox — customizable toggle switch with icon and theming
        A versatile toggle component based on @radix-ui/react-switch, styled with full theme support. Accepts different variants (outline, dash, ghost), colors, sizes, and custom shadow. Displays a check icon when active and supports dynamic styles based on state. Controlled via value and onChange, integrated with FormWrapper for consistent layout. Includes smooth animation and tooltip-ready structure.
    `,
    CheckBox: `
        ✅ CheckBoxInput – Custom Styled Checkbox
        A visually customizable checkbox component that uses native <input type="checkbox"> underneath. The checkbox has a themed border and a custom SVG checkmark that animates in/out on toggle. It supports different sizes, color variants, and border styles like outline, dash, and ghost.
    `,
    Slider: `
        🎚️ SliderInput — customizable slider with styling and tooltip
        A flexible slider built on Radix UI Slider, supporting dark/light themes, multiple variants (outline, dash, ghost, contained), sizes, colors, and tooltips. Works with both numbers and arrays. Uses FormWrapper for integration into form layouts with consistent labels. Supports onChange and onChangeEnd, and shows the current value in a tooltip.
    `,
    TextArea: `
        📝 TextAreaInput – flexible and theme-aware multiline input
        A resizable, theme-driven textarea component supporting controlled and uncontrolled modes. Provides dynamic placeholder coloring, adaptive focus outline, and style variants like outline, dash, and ghost. Integrates smoothly with label placement and custom shadows for flexible UI design.
    `,
    Date: `
        📅 Date – simple date picker built on BaseInput
        A clean, theme-aware date input component based on BaseInput. Supports custom sizing and includes a clickable calendar icon button to open the native date picker. Designed for easy integration and consistent styling across the library.
    `,
    Time: `
        ⏰ Time – simple time picker built on BaseInput
        A clean, theme-aware time input component based on BaseInput. Supports custom sizing and includes a clickable clock icon button to open the native time picker. Provides consistent style and behavior across the library.
    `,
    File: `
        📁 FileInput – customizable file uploader with progress and validation
        A theme-aware file input component supporting controlled usage, file size validation, and upload progress indication. Built with FormWrapper integration for consistent labels, colors, and sizing. Includes customizable left label/button, dynamic placeholder coloring, and easy file selection via hidden input.
    `,
    Autocomplete: `
        🔍 Autocomplete – Custom Input with Suggestion Dropdown
        A flexible, styled autocomplete input component with a dropdown that filters options as the user types.
    `,
    Select: `
        🔽 Select – Custom Dropdown Component
        A fully customizable select/dropdown component built using a Popover, styled wrapper, and a DropMenu. It supports dynamic items, color theming, animations, and is fully controlled via props.
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