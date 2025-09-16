import React from 'react';
import * as MdIcons from "react-icons/md";
type IconGroup = Record<string, React.ComponentType<any>>;
type GroupName = keyof typeof groups;
type CategorizedIcons = Record<GroupName | "others", IconGroup>;
type IconsProps = {
    color?: string;
    onChange?: (iconName: string) => void;
    select?: string;
    onMouseDown?: (e: any, iconName: string) => void;
    className?: string;
};
declare const groups: {
    readonly navigation: readonly ["Home", "Search", "Arrow", "Menu", "Chevron", "Back", "Forward", "Page", "Expand", "Close", "Refresh", "Navigation", "Explore", "Map", "Place", "Location"];
    readonly media: readonly ["Photo", "Video", "Camera", "Image", "Album", "Mic", "Movie", "Music", "Play", "Pause", "Stop", "Slideshow", "Library", "Record", "Volume"];
    readonly social: readonly ["Person", "Group", "Chat", "Forum", "Notifications", "Thumb", "Share", "Favorite", "Comment", "Emoji", "Public", "Language", "Face"];
    readonly ecommerce: readonly ["Shopping", "Cart", "Payment", "Credit", "Card", "Store", "Offer", "Money", "Currency"];
    readonly storage: readonly ["Folder", "File", "Upload", "Download", "Save", "Cloud", "Backup", "Archive", "Drive"];
    readonly action: readonly ["Add", "Remove", "Delete", "Edit", "Save", "Cancel", "Done", "Check", "Clear", "Select", "Paste", "Copy", "Cut", "Drag", "Indicator"];
    readonly visibility: readonly ["Visibility", "Preview", "Zoom", "Pageview"];
    readonly ui: readonly ["Settings", "Tune", "Filter", "Sort", "More", "MenuOpen"];
    readonly auth: readonly ["Login", "Logout", "Lock", "Security", "Verified"];
    readonly alerts: readonly ["Warning", "Error", "Info", "Help", "Report", "Announcement"];
    readonly time: readonly ["Time", "Alarm", "Timer", "Schedule", "Calendar", "Event", "Date", "Clock"];
    readonly transport: readonly ["Car", "Flight", "Train", "Bus", "Bike", "Shipping", "Boat", "Directions", "Wheeler"];
    readonly devices: readonly ["Phone", "Laptop", "Computer", "Tablet", "Watch", "Tv", "Keyboard", "Mouse", "Headset", "Speaker", "Device", "Cast", "Usb"];
    readonly health: readonly ["Health", "Hospital", "Medical", "Medication", "Vaccines", "Blood", "Mask"];
    readonly weather: readonly ["Sunny", "DarkMode", "Cloud", "Rain", "Thunder", "Umbrella", "Night", "Wb"];
    readonly food: readonly ["Fastfood", "Cafe", "Restaurant", "Icecream", "Cake", "Bar", "Drink"];
    readonly office: readonly ["Work", "Dashboard", "Business", "Assessment", "Note", "Description", "Chart", "Table", "Timeline"];
    readonly misc: readonly ["Lightbulb", "Pets", "Build", "Construction", "Star"];
};
/** catalog categoryze icons */
export declare const icons: CategorizedIcons;
/** list catalog icons */
export declare const iconsList: {
    [K in keyof typeof MdIcons]: typeof MdIcons[K];
};
export default function Icons({ onChange, onMouseDown, select, className }: IconsProps): import("react/jsx-runtime").JSX.Element;
export {};
