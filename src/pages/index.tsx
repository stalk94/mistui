import InfoButton from './buttons/button';
import Typography from './text/typography';
import MarqueText from './text/marque';
import Link from './text/link';
import InfoButtons from './buttons/icon-buttons';
import InfoGroupButton from './buttons/group';
import InfoGroupButtonFiltre from './buttons/f-group';
import Avatar from './data-display/avatar';
import AvatarGrop from './data-display/avatar-group';
import Indicator from './data-display/indicator';
import Badges from './data-display/badge';
import List from './data-display/list';
import DataTable from './tables/data';
import Table from './tables/simple';
import InputBase from './inputs/inputs';
import Number from './inputs/number';
import Color from './inputs/color';
import Radio from './inputs/radio';
import Switch from './inputs/switch';
import Chek from './inputs/check';
import Slider from './inputs/slider';
import Autocomplete from './inputs/autocomplete';
import Select from './inputs/select';
import TextArea from './inputs/textarea';
import File from './inputs/file';
import Date from './inputs/date';
import Time from './inputs/time';
import Tabs from './navigation/tabs';
import Menu from './navigation/menu';
import Breadcrumbs from './navigation/breadcrumbs';
import BottomNav from './navigation/bottom-nav';
import Divider from './layout/divider';
import Spliter from './layout/splitter';
import Collapse from './layout/collapse';
import Accordion from './layout/accordion';
import Overflow from './layout/overflow';
import Footer from './page/footer';
import Hero from './page/hero';
import Chat from './page/chat';
import AppBar from './page/app-bar';
import Stat from './page/stat';
import Card from './media/card';
import Promo from './media/promo';
import Alert from './base/alert';
import Theme from './base/theme';
import Drawer from './feedback/drawer';
import Modal from './feedback/modal';
import Popover from './feedback/popover';
import Tooltip from './feedback/tooltip';
import HorizontalCarousel from './media/horizontal-carousel';
import VerticalCarousel from './media/vertical-carousel';
import Flag from './data-display/flag';
import { useMemo } from 'react';
import { TypeTable } from './helpers';
import Head from './head';
import Radial from './data-display/radial-progress';
import Progress from './data-display/progress';
import Paginator from './navigation/paginator';
import Spinner from './data-display/spiner';
import Skeleton from './data-display/skeleton';
import Box from './page/box';


const category = {
    base: {
        ThemeProvider: Theme,
        AlertProvider: Alert,
    },
    text: {
        Typography: Typography,
        Link: Link, 
        MarqueText: MarqueText, 
    },
    buttons: {
        Button: InfoButton, 
        IconButton: InfoButtons, 
        GroupButtons: InfoGroupButton, 
        GroupButtonFiltre: InfoGroupButtonFiltre
    },
    inputs: {
        BaseInput: InputBase,
        NumberInput: Number, 
        ColorPicker: Color, 
        Radio: Radio, 
        Switch: Switch,  
        CheckBox: Chek, 
        Slider: Slider, 
        TextArea: TextArea,  
        Date: Date, 
        Time: Time, 
        File: File, 
        Autocomplete: Autocomplete, 
        Select: Select, 
    },
    navigation: {
        Tabs: Tabs, 
        Breadcrumbs: Breadcrumbs, 
        BottomNavigation: BottomNav, 
        Menu: Menu,
        Paginator: Paginator
    },
    'data-display': {
        Avatar: Avatar,
        AvatarGroup: AvatarGrop,
        Indicator: Indicator,
        Badge: Badges,
        List: List,
        Flag: Flag,
        Progress: Progress,
        RadialProgress: Radial,
        Spinner: Spinner,
        Skeleton: Skeleton
    },
    layout: {
        Divider: Divider,
        Splitter: Spliter,
        Collapse: Collapse,
        Accordion: Accordion,
        Overflow: Overflow,
    },
    tables: {
        DataTable: DataTable,
        SimpleTable: Table
    },
    page: {
        Box: Box,
        Footer: Footer,
        Hero: Hero,
        AppBar: AppBar,
        Chat: Chat,
        Stat: Stat,
    },
    media: {
        Card: Card,
        Promo: Promo,
        VerticalCarousel: VerticalCarousel,
        HorizontalCarousel: HorizontalCarousel,
    },
    feedback: {
        Tooltip: Tooltip,
        Modal: Modal,
        Popover: Popover,
        Drawer: Drawer,
    },
    form: {},
}


export default function Base({ preview }) {
    const catalog = useMemo(()=> {
        let res = {};

        Object.entries(category)
            .map(([key, value])=> value)
            .map((cats)=> res = {...res, ...cats});
        return res;
    }, []);
    const renderTable = (preview) => {
        if (catalog?.[preview]?.meta) return (
            <>
                <TypeTable
                    preview={preview}
                    meta={catalog[preview].meta}
                />
                <Head
                    preview={preview}
                />
            </>
        );
    }
    

    return (
        <main 
            className="flex flex-col h-full w-full"
            style={{fontFamily: '"Inter", sans-serif'}}
        >
            { catalog[preview] &&
                catalog[preview](renderTable(preview))
            }
        </main>
    );
}