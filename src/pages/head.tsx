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
        📑 Tabs component renders a set of selectable tab labels with corresponding content panels — perfect for organizing related sections into a compact, switchable interface.
        It supports multiple visual styles (e.g., lift variant), dynamic sizing, shadows, and custom theming via colors and styles.
    `,
    Breadcrumbs: `
        🧭 Breadcrumbs component displays a navigation trail based on the current path — perfect for showing users their location within a site or app hierarchy.
        It generates clickable breadcrumb links with customizable separators and supports a home icon for quick access to the root.
    `,
    Menu: `
        📋 Menu component renders a flexible, optionally nested navigation menu — perfect for sidebars, dropdowns, or multi-level menus.
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

    SimpleTable: `
        📊 A minimalist, customizable table component designed for easy rendering of tabular data from either a schema or raw objects. It features fixed headers with sticky top/bottom rows, flexible column rendering via children or schema, smooth vertical scrolling, and seamless integration with theming for consistent sizing, shadows, and styles. Ideal for lightweight data display without heavy dependencies.
    `,
    DataTable: `
       📊 A table for more complex tasks is not just about displaying rows and columns. <DataTable> is designed to handle large volumes of data and offers a wide range of features: filtering, sorting, pagination, editable fields, customizable columns, and support for various data types. It is a powerful and flexible component that can be easily adapted to specific interface requirements and business logic. A lightweight wrapper around PrimeReact's <DataTable> with enhanced UX and theming integration. It simplifies design customization, solves scroll/height issues, and connects seamlessly to your theme context.
    `,

    Divider: `
        ⌇ A flexible line divider used to visually separate content. You can customize orientation, color, thickness, and add optional content (like a label or icon) in the center, left, or right.
    `,
    Splitter: `
        𝄜 Splitter  component provides a resizable layout system that supports horizontal or vertical orientation. It integrates with your design system for dynamic theming — allowing custom colors, shadows, and disabled interaction.
        You can nest multiple Splitter components inside each other to create complex, multi-directional split layouts (e.g., vertical split inside a horizontal one).
    `,
    Progress: `
       🧩 Progress component is a themed wrapper around the native <progress> HTML element. It supports customizable color, size, shadows, and inline styles based on your design system.
    `,
    RadialProgress: `
       ⭕ RadialProgress component renders a circular progress indicator with customizable size, color, thickness, and content. It uses CSS variables and integrates with your design system
    `,
    Collapse: `
        📑 The Collapse component provides a simple, accessible way to toggle visibility of content using a checkbox-powered expand/collapse mechanism.
        It’s ideal for showing optional or additional content under a titled section, such as FAQs, expandable menus, or detail summaries.
    `,
    Accordion: `
        📂 The Acordeon component renders a vertically stacked list of collapsible panels — ideal for organizing content into expandable sections.
        It supports multiple visual variants (contained, outline, ghost, soft, dash) and dynamic styling based on theme context.
        Each panel includes a clickable title and hidden content area that expands when selected.
        It also supports hover effects, shadows, and custom styles for both the container and individual titles.
        You can control the initially active item and apply dynamic themes like neutral, primary, or any other registered color.
    `,
    Overflow: `
        📏 The Overflow component intelligently renders only the visible portion of its children based on available space — perfect for responsive layouts, toolbars, or dynamic menus.
        It automatically measures child sizes and hides the overflowed items, giving you full control over layout behavior
    `,
    
    List: `
        📋 List is a flexible component for rendering vertical lists with consistent spacing and styles.
    `,
    BottomNavigation: `
        📱 BottomNav is a mobile-friendly bottom navigation bar used to switch between main views or routes in an app.
    `,
    AppBar: `
        📌 A customizable app header bar with slot-based layout.
    `,
    Paginator: `
        ⏭️ A flexible pagination control with customizable size, color, and button variants.
    `,
    Box: `
        📦 Box is a fundamental building block component used to construct layouts, cards, panels, and containers.
        It provides flexible styling options to help you create visually rich UI elements.
    `,
    Stat: `
        📊 Stat is a compact data display component used to show key metrics or summarized values in dashboards and cards.
    `,
    Footer: `
        📍 Footer is a flexible layout component for building responsive website footers.
    `,
    Hero: `
        🎯 Hero is a component for displaying a large box or image with a title and description. Ideal for landing pages and prominent sections.
    `,
    Chat: `
        💬 Chat bubbles are used to show one line of conversation and all its data, including the author image, author name, time, etc.
    `,

    Tooltip: `
        💬 Tooltip is a versatile informational popup that appears on hover or focus, providing additional context or details about an element
    `,
    Modal: `
        🗖 Modal is a dialog window component that overlays content and focuses user attention for tasks like alerts, forms, or confirmations.
    `,
    Popover: `
        🔽 Popover is a flexible, headless dropdown/popup component designed for both hover and click interactions.
    `,
    Drawer: `
        🚪 Drawer is a sliding panel component that appears from the specified screen edge (left, right, top, or bottom).
        It overlays the main content with a semi-transparent backdrop and supports smooth open/close animatio
    `,

    Card: `
        🖼️ Card is a flexible content container component with optional image, title, description, actions, and custom content.
    `,
    Promo: `
        📦 Promo component is a promotional card slider component for showcasing featured content (hybrid of card and slider).
    `,
    VerticalCarousel: `
        📦 VerticalCarousel is a customizable vertical media slider.
    `,
    HorizontalCarousel: `
        📦 HorizontalCarousel is a customizable horizontal media slider.
    `,
    Skeleton: `
        🦴 Display a preview of your content before loading the data to reduce perceived loading time.
        Data for your components might not be available immediately. You can improve the perceived responsiveness of the page by using skeletons. 
        This creates the impression that everything is happening instantly, while the actual information is gradually being shown on screen.
    `,
    Spinner: `
        🔄 A simple loading indicator component using DaisyUI's loading classes.
    `,
    Form: "📦 Form dynamically renders a list of form fields based on the passed `scheme[]`. Supports value passing, change handling, and centralized label position management."
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
            <Typography variant='body1' color='white'>
                { current }
            </Typography>
        </div>
    );
}