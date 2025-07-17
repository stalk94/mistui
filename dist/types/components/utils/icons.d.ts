import { FC } from "react";
export type IconsProps = {
    color?: string;
    onChange?: (iconName: string) => void;
    test: string;
};
export declare const icons: {
    navigation: {
        Home: any;
        Search: any;
        Menu: any;
        Close: any;
        ArrowBack: any;
        ArrowForward: any;
        ExpandMore: any;
        ExpandLess: any;
        ChevronLeft: any;
        ChevronRight: any;
    };
    social: {
        Favorite: any;
        FavoriteBorder: any;
        ThumbUp: any;
        ThumbDown: any;
        Share: any;
        Comment: any;
        Notifications: any;
        NotificationsOff: any;
        Person: any;
        Group: any;
        Chat: any;
        Forum: any;
    };
    ecommerce: {
        ShoppingCart: any;
        AddShoppingCart: any;
        Payment: any;
        CreditCard: any;
        LocalOffer: any;
    };
    media: {
        PlayArrow: any;
        Pause: any;
        Stop: any;
        SkipNext: any;
        SkipPrevious: any;
        VolumeUp: any;
        VolumeOff: any;
        Photo: any;
        VideoLibrary: any;
        Slideshow: any;
    };
    storage: {
        UploadFile: any;
        Download: any;
        AttachFile: any;
        InsertDriveFile: any;
        CloudUpload: any;
        CloudDownload: any;
        Folder: any;
        FolderOpen: any;
    };
    action: {
        Add: any;
        Delete: any;
        Edit: any;
        Save: any;
        Cancel: any;
        Done: any;
        Remove: any;
        Check: any;
        Clear: any;
    };
    visibility: {
        Visibility: any;
        VisibilityOff: any;
    };
    ui: {
        Settings: any;
        AddBox: any;
        MoreVert: any;
        MoreHoriz: any;
    };
};
/**
 * Список иконок
 */
export declare const iconsList: {};
declare const Icons: FC<IconsProps>;
export default Icons;
