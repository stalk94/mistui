import React from 'react';
import * as MdIcons from "react-icons/md";
import { MdAutorenew } from "react-icons/md";

//////////////////////////////////////////////////////////////////////////////////////////////
type IconGroup = Record<string, React.ComponentType<any>>;
type GroupName = keyof typeof groups; 
type CategorizedIcons = Record<GroupName | "others", IconGroup>;
type IconsProps = {
    color?: string
    onChange?: (iconName: string)=> void
    select?: string
    onMouseDown?: (e: any, iconName: string)=> void
    className?: string
}

//////////////////////////////////////////////////////////////////////////////////////////////
const groups = {
    navigation: ["Home", "Search", "Arrow", "Menu", "Chevron", "Back", "Forward", "Page", "Expand", "Close", "Refresh", "Navigation", "Explore", "Map", "Place", "Location"],
    media: ["Photo", "Video", "Camera", "Image", "Album", "Mic", "Movie", "Music", "Play", "Pause", "Stop", "Slideshow", "Library", "Record", "Volume"],
    social: ["Person", "Group", "Chat", "Forum", "Notifications", "Thumb", "Share", "Favorite", "Comment", "Emoji", "Public", "Language", "Face"],
    ecommerce: ["Shopping", "Cart", "Payment", "Credit", "Card", "Store", "Offer", "Money", "Currency"],
    storage: ["Folder", "File", "Upload", "Download", "Save", "Cloud", "Backup", "Archive", "Drive"],
    action: ["Add", "Remove", "Delete", "Edit", "Save", "Cancel", "Done", "Check", "Clear", "Select", "Paste", "Copy", "Cut", "Drag", "Indicator"],
    visibility: ["Visibility", "Preview", "Zoom", "Pageview"],
    ui: ["Settings", "Tune", "Filter", "Sort", "More", "MenuOpen"],
    auth: ["Login", "Logout", "Lock", "Security", "Verified"],
    alerts: ["Warning", "Error", "Info", "Help", "Report", "Announcement"],
    time: ["Time", "Alarm", "Timer", "Schedule", "Calendar", "Event", "Date", "Clock"],
    transport: ["Car", "Flight", "Train", "Bus", "Bike", "Shipping", "Boat", "Directions", "Wheeler"],
    devices: ["Phone", "Laptop", "Computer", "Tablet", "Watch", "Tv", "Keyboard", "Mouse", "Headset", "Speaker", "Device", "Cast", "Usb"],
    health: ["Health", "Hospital", "Medical", "Medication", "Vaccines", "Blood", "Mask"],
    weather: ["Sunny", "DarkMode", "Cloud", "Rain", "Thunder", "Umbrella", "Night", "Wb"],
    food: ["Fastfood", "Cafe", "Restaurant", "Icecream", "Cake", "Bar", "Drink"],
    office: ["Work", "Dashboard", "Business", "Assessment", "Note", "Description", "Chart", "Table", "Timeline"],
    misc: ["Lightbulb", "Pets", "Build", "Construction", "Star"],
} as const;

function categorizeIcons(): CategorizedIcons {
    const categorized = {} as CategorizedIcons;

    // инициализируем пустые группы
    (Object.keys(groups) as GroupName[]).forEach((k) => (categorized[k] = {}));
    categorized["others"] = {};

    for (const [iconName, IconComp] of Object.entries(MdIcons)) {
        const foundGroup = (Object.keys(groups) as GroupName[]).find((group) =>
            groups[group].some((keyword) => iconName.includes(keyword))
        );
        if (foundGroup) {
            categorized[foundGroup][iconName] = IconComp;
        } else {
            categorized["others"][iconName] = IconComp;
        }
    }

    return categorized;
}

//////////////////////////////////////////////////////////////////////////////////////////////
/** catalog categoryze icons */
export const icons = categorizeIcons();
/** list catalog icons */
export const iconsList: { [K in keyof typeof MdIcons]: typeof MdIcons[K] } = MdIcons;
//////////////////////////////////////////////////////////////////////////////////////////////


export default function Icons({ 
    onChange, 
    onMouseDown, 
    select,
    className
}: IconsProps) {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 50); 
        return () => clearTimeout(timer);
    }, []);


   if (loading) {
        return (
            <div className="flex items-center justify-center p-6">
                <MdAutorenew className="animate-spin text-[gray]" size={32} />
            </div>
        );
    }
    return (
        <div className={`flex flex-col flex-wrap gap-0 ${className ?? ''}`}>
            {Object.keys(icons).map((category) => { 
                if(category !== '__docgenInfo' && category !== 'displayName') return (
                    <div 
                        key={category} 
                        className='ml-3'
                    >
                        <h6 className='text-[gray]'>
                            { category }
                        </h6>
                        <div className='flex flex-wrap gap-1'>
                            { Object.keys(icons[category]).map((iconName) => {
                                const IconComponent = icons[category][iconName];

                                if(typeof IconComponent !== 'string') return (
                                    <div 
                                        key={iconName} 
                                        style={{textAlign: 'center', cursor:'pointer'}}
                                        onClick={()=> {
                                            if (!onChange) navigator.clipboard.writeText(iconName);
                                            else onChange(iconName)
                                        }}
                                        onMouseDown={(e)=> onMouseDown?.(e, iconName)}
                                    >
                                        <IconComponent 
                                            className='hover:opacity-50'
                                            style={{
                                                fontSize: 25, 
                                                color: select === iconName ? 'white' : 'orange'
                                            }} 
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}