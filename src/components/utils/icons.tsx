import React, { FC } from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Alert, Snackbar } from "@mui/material";
import {
    Add, Delete, Edit, Save, Visibility, VisibilityOff, Check, Clear,
    UploadFile, Download, AddBox, Remove, Done, Cancel, Settings
} from '@mui/icons-material';


export type IconsProps = {
    color?: string
    onChange?: (iconName: string)=> void
    test: string
}
export const icons = {
    navigation: {
      Home: HomeIcon,
      Search: SearchIcon,
      Menu: MenuIcon,
      Close: CloseIcon,
      ArrowBack: ArrowBackIcon,
      ArrowForward: ArrowForwardIcon,
      ExpandMore: ExpandMoreIcon,
      ExpandLess: ExpandLessIcon,
      ChevronLeft: ChevronLeftIcon,
      ChevronRight: ChevronRightIcon,
    },
    social: {
      Favorite: FavoriteIcon,
      FavoriteBorder: FavoriteBorderIcon,
      ThumbUp: ThumbUpIcon,
      ThumbDown: ThumbDownIcon,
      Share: ShareIcon,
      Comment: CommentIcon,
      Notifications: NotificationsIcon,
      NotificationsOff: NotificationsOffIcon,
      Person: PersonIcon,
      Group: GroupIcon,
      Chat: ChatIcon,
      Forum: ForumIcon,
    },
    ecommerce: {
      ShoppingCart: ShoppingCartIcon,
      AddShoppingCart: AddShoppingCartIcon,
      Payment: PaymentIcon,
      CreditCard: CreditCardIcon,
      LocalOffer: LocalOfferIcon,
    },
    media: {
      PlayArrow: PlayArrowIcon,
      Pause: PauseIcon,
      Stop: StopIcon,
      SkipNext: SkipNextIcon,
      SkipPrevious: SkipPreviousIcon,
      VolumeUp: VolumeUpIcon,
      VolumeOff: VolumeOffIcon,
      Photo: PhotoIcon,
      VideoLibrary: VideoLibraryIcon,
      Slideshow: SlideshowIcon,
    },
    storage: {
      UploadFile,
      Download,
      AttachFile: AttachFileIcon,
      InsertDriveFile: InsertDriveFileIcon,
      CloudUpload: CloudUploadIcon,
      CloudDownload: CloudDownloadIcon,
      Folder: FolderIcon,
      FolderOpen: FolderOpenIcon,
    },
    action: {
      Add,
      Delete,
      Edit,
      Save,
      Cancel,
      Done,
      Remove,
      Check,
      Clear,
    },
    visibility: {
      Visibility,
      VisibilityOff,
    },
    ui: {
      Settings: SettingsIcon,
      AddBox,
      MoreVert: MoreVertIcon,
      MoreHoriz: MoreHorizIcon,
    }
}
/**
 * Список иконок
 */
export const iconsList = ((()=> {
    const result = {};

    Object.keys(icons).forEach((category) => {
        const cat = icons[category];

        Object.keys(cat).forEach((iconName) => {
            result[iconName] = icons[category][iconName];
        });
    });

    return result;
})());



//todo: snack bar вынести в глобальный контекст
const Icons: FC<IconsProps> =({ onChange, color })=> {
    const [open, setOpen] = React.useState<string>();

    const handleClose = (event: React.SyntheticEvent | Event, reason) => {
        if (reason === "clickaway") return;
        setOpen(undefined);
    };
    
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', flexDirection:'column', gap: 0}}>
            {Object.keys(icons).map((category) => { 
                
                if(category !== '__docgenInfo' && category !== 'displayName') return (
                    <div key={category} style={{margin: '3px 0'}}>
                        <h3 style={{color: '#d1adeb'}}>
                            { category }
                        </h3>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: 10}}>
                            { Object.keys(icons[category]).map((iconName) => {
                                const IconComponent = icons[category][iconName];

                                if(typeof IconComponent !== 'string') return (
                                    <div key={iconName} 
                                        style={{textAlign: 'center', cursor:'pointer'}}
                                        onClick={()=> {
                                            navigator.clipboard.writeText(iconName);
                                            setOpen(iconName);
                                            onChange && onChange(iconName)
                                        }}
                                    >
                                        <IconComponent style={{fontSize: 30, color: color??'orange'}} />
                                        <p style={{color: 'gray', fontSize: 12}}>
                                            { iconName }
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={Boolean(open)}
                onClose={handleClose}
                autoHideDuration={3000}
                message={`'${open}' copied to clipboard`}
                key={Date.now()}
            >
                <Alert
                    icon={
                        <></>
                    }
                    severity="info"
                    variant="outlined"
                    sx={{ width: '100%' }}
                >
                    {`'${open}' copied to clipboard`}
                </Alert>
            </Snackbar>
        </div>
    );
}


export default Icons;