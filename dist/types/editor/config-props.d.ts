import { typographyVariants } from '../components/text/types';
export declare const store: {
    get: (clone?: boolean) => {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    };
    set: (value: {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    } | ((prev: {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    }) => {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    })) => void;
    update: (fn: (prev: {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    }) => {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    }) => void;
    use: () => {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    };
    watch: (fn: (val: {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    }, unsub: () => void) => void) => () => void;
    export: () => {
        preview: undefined;
        propses: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        scheme: never[];
        cache: {};
        emmiterProps: undefined;
    };
} & {
    preview: {
        get: (clone?: boolean) => undefined;
        set: (value: ((prev: undefined) => undefined) | undefined) => void;
        update: (fn: (prev: undefined) => undefined) => void;
        use: () => undefined;
        watch: (fn: (val: undefined, unsub: () => void) => void) => () => void;
        export: () => undefined;
    };
    propses: {
        get: (clone?: boolean) => {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        set: (value: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        } | ((prev: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        }) => {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        })) => void;
        update: (fn: (prev: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        }) => {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        }) => void;
        use: () => {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
        watch: (fn: (val: {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        }, unsub: () => void) => void) => () => void;
        export: () => {
            Typography: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Link: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            MarqueText: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            Button: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            IconButton: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtons: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            GroupButtonFiltre: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            TextInput: {};
            NumberInput: {};
            Color: {};
            Date: {};
            Time: {};
            TextArea: {};
            File: {};
            Radio: {};
            Switch: {};
            CheckBox: {};
            Slider: {};
            Tabs: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            BottomNavigation: {};
            Breadcrumbs: {};
            Menu: {};
            Badge: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Avatar: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Indicator: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            List: {};
            Table: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Tooltip: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Alert: {};
            Modal: {};
            Popover: {};
            Drawer: {};
            Divider: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Splitter: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Chat: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Accordion: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Collapse: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            Stat: {};
            Card: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            Promo: {};
        };
    } & {
        Typography: {
            get: (clone?: boolean) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            set: (value: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } | ((prev: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            })) => void;
            update: (fn: (prev: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => void;
            use: () => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            watch: (fn: (val: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
        } & {
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                set: (value: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                } | ((prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => void;
                use: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                watch: (fn: (val: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    set: (value: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[] | ((prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[])) => void;
                    update: (fn: (prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => void;
                    use: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    watch: (fn: (val: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[], unsub: () => void) => void) => () => void;
                    export: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                } & {
                    get: (clone?: boolean) => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    set: (value: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | ((prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")) => void;
                    update: (fn: (prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => void;
                    use: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    watch: (fn: (val: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2", unsub: () => void) => void) => () => void;
                    export: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                }[];
            };
            fontStyle: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            style: {
                get: (clone?: boolean) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                set: (value: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } | ((prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                })) => void;
                update: (fn: (prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => void;
                use: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                watch: (fn: (val: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } & {
                fontWeight: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                fontSize: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                letterSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                wordSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                textAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textOverflow: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textTransform: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecoration: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationStyle: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationColor: {
                    get: (clone?: boolean) => {
                        type: string;
                    };
                    set: (value: {
                        type: string;
                    } | ((prev: {
                        type: string;
                    }) => {
                        type: string;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                    }) => {
                        type: string;
                    }) => void;
                    use: () => {
                        type: string;
                    };
                    watch: (fn: (val: {
                        type: string;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                };
                overflowWrap: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                whiteSpace: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                verticalAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                wordBreak: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textShadow: {
                    get: (clone?: boolean) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    set: (value: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    } | ((prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => void;
                    use: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    options: {
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        }[];
                        set: (value: {
                            id: string;
                            label: string;
                        }[] | ((prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[])) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[]) => void;
                        use: () => {
                            id: string;
                            label: string;
                        }[];
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }[], unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        }[];
                    } & ({
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        };
                        set: (value: {
                            id: string;
                            label: string;
                        } | ((prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        })) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        }) => void;
                        use: () => {
                            id: string;
                            label: string;
                        };
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }, unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        };
                    } & {
                        id: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                        label: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                    })[];
                };
            };
        };
        Link: {
            get: (clone?: boolean) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            set: (value: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } | ((prev: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            })) => void;
            update: (fn: (prev: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => void;
            use: () => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            watch: (fn: (val: {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
        } & {
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                set: (value: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                } | ((prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => void;
                use: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                watch: (fn: (val: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    set: (value: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[] | ((prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[])) => void;
                    update: (fn: (prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => void;
                    use: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    watch: (fn: (val: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[], unsub: () => void) => void) => () => void;
                    export: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                } & {
                    get: (clone?: boolean) => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    set: (value: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | ((prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")) => void;
                    update: (fn: (prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => void;
                    use: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    watch: (fn: (val: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2", unsub: () => void) => void) => () => void;
                    export: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                }[];
            };
            fontStyle: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            style: {
                get: (clone?: boolean) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                set: (value: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } | ((prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                })) => void;
                update: (fn: (prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => void;
                use: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                watch: (fn: (val: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } & {
                fontWeight: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                fontSize: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                letterSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                wordSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                textAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textOverflow: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textTransform: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecoration: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationStyle: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationColor: {
                    get: (clone?: boolean) => {
                        type: string;
                    };
                    set: (value: {
                        type: string;
                    } | ((prev: {
                        type: string;
                    }) => {
                        type: string;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                    }) => {
                        type: string;
                    }) => void;
                    use: () => {
                        type: string;
                    };
                    watch: (fn: (val: {
                        type: string;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                };
                overflowWrap: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                whiteSpace: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                verticalAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                wordBreak: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textShadow: {
                    get: (clone?: boolean) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    set: (value: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    } | ((prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => void;
                    use: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    options: {
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        }[];
                        set: (value: {
                            id: string;
                            label: string;
                        }[] | ((prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[])) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[]) => void;
                        use: () => {
                            id: string;
                            label: string;
                        }[];
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }[], unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        }[];
                    } & ({
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        };
                        set: (value: {
                            id: string;
                            label: string;
                        } | ((prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        })) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        }) => void;
                        use: () => {
                            id: string;
                            label: string;
                        };
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }, unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        };
                    } & {
                        id: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                        label: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                    })[];
                };
            };
        };
        MarqueText: {
            get: (clone?: boolean) => {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            set: (value: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } | ((prev: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            })) => void;
            update: (fn: (prev: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }) => void;
            use: () => {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
            watch: (fn: (val: {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                direction: {
                    type: string;
                    value: string;
                    items: string[];
                };
                speed: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                variant: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                fontStyle: {
                    type: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                style: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            };
        } & {
            direction: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            speed: {
                get: (clone?: boolean) => {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                set: (value: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                } | ((prev: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                }) => {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                }) => {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                }) => void;
                use: () => {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
                watch: (fn: (val: {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    iconEnable: boolean;
                    value: number;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                iconEnable: {
                    get: (clone?: boolean) => boolean;
                    set: (value: boolean | ((prev: boolean) => boolean)) => void;
                    update: (fn: (prev: boolean) => boolean) => void;
                    use: () => boolean;
                    watch: (fn: (val: boolean, unsub: () => void) => void) => () => void;
                    export: () => boolean;
                };
                value: {
                    get: (clone?: boolean) => number;
                    set: (value: number | ((prev: number) => number)) => void;
                    update: (fn: (prev: number) => number) => void;
                    use: () => number;
                    watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                    export: () => number;
                };
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                set: (value: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                } | ((prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }) => void;
                use: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
                watch: (fn: (val: {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: Array<keyof typeof typographyVariants>;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    set: (value: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[] | ((prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[])) => void;
                    update: (fn: (prev: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[]) => void;
                    use: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                    watch: (fn: (val: ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[], unsub: () => void) => void) => () => void;
                    export: () => ("button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")[];
                } & {
                    get: (clone?: boolean) => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    set: (value: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2" | ((prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2")) => void;
                    update: (fn: (prev: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2") => void;
                    use: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                    watch: (fn: (val: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2", unsub: () => void) => void) => () => void;
                    export: () => "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2";
                }[];
            };
            fontStyle: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            style: {
                get: (clone?: boolean) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                set: (value: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } | ((prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                })) => void;
                update: (fn: (prev: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }) => void;
                use: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
                watch: (fn: (val: {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    fontWeight: {
                        type: string;
                        items: string[];
                    };
                    fontSize: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    letterSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    wordSpacing: {
                        type: string;
                        min: number;
                        max: number;
                    };
                    textAlign: {
                        type: string;
                        items: string[];
                    };
                    textOverflow: {
                        type: string;
                        items: string[];
                    };
                    textTransform: {
                        type: string;
                        items: string[];
                    };
                    textDecoration: {
                        type: string;
                        items: string[];
                    };
                    textDecorationStyle: {
                        type: string;
                        items: string[];
                    };
                    textDecorationColor: {
                        type: string;
                    };
                    overflowWrap: {
                        type: string;
                        items: string[];
                    };
                    whiteSpace: {
                        type: string;
                        items: string[];
                    };
                    verticalAlign: {
                        type: string;
                        items: string[];
                    };
                    wordBreak: {
                        type: string;
                        items: string[];
                    };
                    textShadow: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                };
            } & {
                fontWeight: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                fontSize: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                letterSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                wordSpacing: {
                    get: (clone?: boolean) => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    set: (value: {
                        type: string;
                        min: number;
                        max: number;
                    } | ((prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        min: number;
                        max: number;
                    }) => {
                        type: string;
                        min: number;
                        max: number;
                    }) => void;
                    use: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                    watch: (fn: (val: {
                        type: string;
                        min: number;
                        max: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        min: number;
                        max: number;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    min: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                    max: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
                textAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textOverflow: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textTransform: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecoration: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationStyle: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textDecorationColor: {
                    get: (clone?: boolean) => {
                        type: string;
                    };
                    set: (value: {
                        type: string;
                    } | ((prev: {
                        type: string;
                    }) => {
                        type: string;
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                    }) => {
                        type: string;
                    }) => void;
                    use: () => {
                        type: string;
                    };
                    watch: (fn: (val: {
                        type: string;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                };
                overflowWrap: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                whiteSpace: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                verticalAlign: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                wordBreak: {
                    get: (clone?: boolean) => {
                        type: string;
                        items: string[];
                    };
                    set: (value: {
                        type: string;
                        items: string[];
                    } | ((prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        items: string[];
                    }) => {
                        type: string;
                        items: string[];
                    }) => void;
                    use: () => {
                        type: string;
                        items: string[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        items: string[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        items: string[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    items: {
                        get: (clone?: boolean) => string[];
                        set: (value: string[] | ((prev: string[]) => string[])) => void;
                        update: (fn: (prev: string[]) => string[]) => void;
                        use: () => string[];
                        watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                        export: () => string[];
                    } & {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    }[];
                };
                textShadow: {
                    get: (clone?: boolean) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    set: (value: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    } | ((prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    })) => void;
                    update: (fn: (prev: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }) => void;
                    use: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                    watch: (fn: (val: {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        type: string;
                        options: {
                            id: string;
                            label: string;
                        }[];
                    };
                } & {
                    type: {
                        get: (clone?: boolean) => string;
                        set: (value: string | ((prev: string) => string)) => void;
                        update: (fn: (prev: string) => string) => void;
                        use: () => string;
                        watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                        export: () => string;
                    };
                    options: {
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        }[];
                        set: (value: {
                            id: string;
                            label: string;
                        }[] | ((prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[])) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }[]) => {
                            id: string;
                            label: string;
                        }[]) => void;
                        use: () => {
                            id: string;
                            label: string;
                        }[];
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }[], unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        }[];
                    } & ({
                        get: (clone?: boolean) => {
                            id: string;
                            label: string;
                        };
                        set: (value: {
                            id: string;
                            label: string;
                        } | ((prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        })) => void;
                        update: (fn: (prev: {
                            id: string;
                            label: string;
                        }) => {
                            id: string;
                            label: string;
                        }) => void;
                        use: () => {
                            id: string;
                            label: string;
                        };
                        watch: (fn: (val: {
                            id: string;
                            label: string;
                        }, unsub: () => void) => void) => () => void;
                        export: () => {
                            id: string;
                            label: string;
                        };
                    } & {
                        id: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                        label: {
                            get: (clone?: boolean) => string;
                            set: (value: string | ((prev: string) => string)) => void;
                            update: (fn: (prev: string) => string) => void;
                            use: () => string;
                            watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                            export: () => string;
                        };
                    })[];
                };
            };
        };
        Button: {
            get: (clone?: boolean) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            isGradient: {
                get: (clone?: boolean) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                set: (value: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                } | ((prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => void;
                use: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                watch: (fn: (val: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                size: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                style: {
                    get: (clone?: boolean) => {
                        marginTop: number;
                    };
                    set: (value: {
                        marginTop: number;
                    } | ((prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    })) => void;
                    update: (fn: (prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    }) => void;
                    use: () => {
                        marginTop: number;
                    };
                    watch: (fn: (val: {
                        marginTop: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        marginTop: number;
                    };
                } & {
                    marginTop: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        IconButton: {
            get: (clone?: boolean) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                isRounded: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            isGradient: {
                get: (clone?: boolean) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                set: (value: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                } | ((prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => void;
                use: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                watch: (fn: (val: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                size: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                style: {
                    get: (clone?: boolean) => {
                        marginTop: number;
                    };
                    set: (value: {
                        marginTop: number;
                    } | ((prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    })) => void;
                    update: (fn: (prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    }) => void;
                    use: () => {
                        marginTop: number;
                    };
                    watch: (fn: (val: {
                        marginTop: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        marginTop: number;
                    };
                } & {
                    marginTop: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
            };
            isRounded: {
                get: (clone?: boolean) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                set: (value: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                } | ((prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => void;
                use: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                watch: (fn: (val: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                size: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                style: {
                    get: (clone?: boolean) => {
                        marginTop: number;
                    };
                    set: (value: {
                        marginTop: number;
                    } | ((prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    })) => void;
                    update: (fn: (prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    }) => void;
                    use: () => {
                        marginTop: number;
                    };
                    watch: (fn: (val: {
                        marginTop: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        marginTop: number;
                    };
                } & {
                    marginTop: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        GroupButtons: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        GroupButtonFiltre: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        TextInput: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        NumberInput: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Color: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Date: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Time: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        TextArea: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        File: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Radio: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Switch: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        CheckBox: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Slider: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Tabs: {
            get: (clone?: boolean) => {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        BottomNavigation: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Breadcrumbs: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Menu: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Badge: {
            get: (clone?: boolean) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                isGradient: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            isGradient: {
                get: (clone?: boolean) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                set: (value: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                } | ((prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }) => void;
                use: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
                watch: (fn: (val: {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    size: string;
                    color: string;
                    style: {
                        marginTop: number;
                    };
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                size: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                style: {
                    get: (clone?: boolean) => {
                        marginTop: number;
                    };
                    set: (value: {
                        marginTop: number;
                    } | ((prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    })) => void;
                    update: (fn: (prev: {
                        marginTop: number;
                    }) => {
                        marginTop: number;
                    }) => void;
                    use: () => {
                        marginTop: number;
                    };
                    watch: (fn: (val: {
                        marginTop: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        marginTop: number;
                    };
                } & {
                    marginTop: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Avatar: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Indicator: {
            get: (clone?: boolean) => {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            set: (value: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            } | ((prev: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            }) => {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            }) => {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                position: {
                    type: string;
                    value: string;
                    items: string[];
                };
                align: {
                    type: string;
                    value: string;
                    items: string[];
                };
            };
        } & {
            position: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            align: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        List: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Table: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Tooltip: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Alert: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Modal: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Popover: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Drawer: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Divider: {
            get: (clone?: boolean) => {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                variant: {
                    type: string;
                    items: string[];
                };
                position: {
                    type: string;
                    items: string[];
                };
                orientation: {
                    type: string;
                    value: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            position: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            orientation: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Splitter: {
            get: (clone?: boolean) => {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                orientation: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            orientation: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Chat: {
            get: (clone?: boolean) => {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                direction: {
                    type: string;
                    items: string[];
                };
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            direction: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Accordion: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Collapse: {
            get: (clone?: boolean) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            set: (value: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            } | ((prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            })) => void;
            update: (fn: (prev: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }) => void;
            use: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
            watch: (fn: (val: {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                size: {
                    type: string;
                    value: string;
                    items: string[];
                };
                variant: {
                    type: string;
                    value: string;
                    items: string[];
                };
                color: {
                    type: string;
                    items: string[];
                };
                colorCustom: {
                    type: string;
                };
                shadow: {
                    type: string;
                    items: string[];
                };
            };
        } & {
            size: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            variant: {
                get: (clone?: boolean) => {
                    type: string;
                    value: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    value: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    value: string;
                    items: string[];
                }) => {
                    type: string;
                    value: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    value: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    value: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                value: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            color: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
            colorCustom: {
                get: (clone?: boolean) => {
                    type: string;
                };
                set: (value: {
                    type: string;
                } | ((prev: {
                    type: string;
                }) => {
                    type: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                }) => {
                    type: string;
                }) => void;
                use: () => {
                    type: string;
                };
                watch: (fn: (val: {
                    type: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
            shadow: {
                get: (clone?: boolean) => {
                    type: string;
                    items: string[];
                };
                set: (value: {
                    type: string;
                    items: string[];
                } | ((prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    items: string[];
                }) => {
                    type: string;
                    items: string[];
                }) => void;
                use: () => {
                    type: string;
                    items: string[];
                };
                watch: (fn: (val: {
                    type: string;
                    items: string[];
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    items: string[];
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                items: {
                    get: (clone?: boolean) => string[];
                    set: (value: string[] | ((prev: string[]) => string[])) => void;
                    update: (fn: (prev: string[]) => string[]) => void;
                    use: () => string[];
                    watch: (fn: (val: string[], unsub: () => void) => void) => () => void;
                    export: () => string[];
                } & {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                }[];
            };
        };
        Stat: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
        Card: {
            get: (clone?: boolean) => {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            set: (value: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            } | ((prev: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            }) => {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            })) => void;
            update: (fn: (prev: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            }) => {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            }) => void;
            use: () => {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
            watch: (fn: (val: {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            }, unsub: () => void) => void) => () => void;
            export: () => {
                imageIsSide: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                imageIsFull: {
                    type: string;
                    color: string;
                };
            };
        } & {
            imageIsSide: {
                get: (clone?: boolean) => {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                set: (value: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                } | ((prev: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                }) => {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                }) => {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                }) => void;
                use: () => {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
                watch: (fn: (val: {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    color: string;
                    style: {
                        marginBottom: number;
                    };
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                style: {
                    get: (clone?: boolean) => {
                        marginBottom: number;
                    };
                    set: (value: {
                        marginBottom: number;
                    } | ((prev: {
                        marginBottom: number;
                    }) => {
                        marginBottom: number;
                    })) => void;
                    update: (fn: (prev: {
                        marginBottom: number;
                    }) => {
                        marginBottom: number;
                    }) => void;
                    use: () => {
                        marginBottom: number;
                    };
                    watch: (fn: (val: {
                        marginBottom: number;
                    }, unsub: () => void) => void) => () => void;
                    export: () => {
                        marginBottom: number;
                    };
                } & {
                    marginBottom: {
                        get: (clone?: boolean) => number;
                        set: (value: number | ((prev: number) => number)) => void;
                        update: (fn: (prev: number) => number) => void;
                        use: () => number;
                        watch: (fn: (val: number, unsub: () => void) => void) => () => void;
                        export: () => number;
                    };
                };
            };
            imageIsFull: {
                get: (clone?: boolean) => {
                    type: string;
                    color: string;
                };
                set: (value: {
                    type: string;
                    color: string;
                } | ((prev: {
                    type: string;
                    color: string;
                }) => {
                    type: string;
                    color: string;
                })) => void;
                update: (fn: (prev: {
                    type: string;
                    color: string;
                }) => {
                    type: string;
                    color: string;
                }) => void;
                use: () => {
                    type: string;
                    color: string;
                };
                watch: (fn: (val: {
                    type: string;
                    color: string;
                }, unsub: () => void) => void) => () => void;
                export: () => {
                    type: string;
                    color: string;
                };
            } & {
                type: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
                color: {
                    get: (clone?: boolean) => string;
                    set: (value: string | ((prev: string) => string)) => void;
                    update: (fn: (prev: string) => string) => void;
                    use: () => string;
                    watch: (fn: (val: string, unsub: () => void) => void) => () => void;
                    export: () => string;
                };
            };
        };
        Promo: {
            get: (clone?: boolean) => {};
            set: (value: {} | ((prev: {}) => {})) => void;
            update: (fn: (prev: {}) => {}) => void;
            use: () => {};
            watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
            export: () => {};
        } & {};
    };
    scheme: {
        get: (clone?: boolean) => never[];
        set: (value: never[] | ((prev: never[]) => never[])) => void;
        update: (fn: (prev: never[]) => never[]) => void;
        use: () => never[];
        watch: (fn: (val: never[], unsub: () => void) => void) => () => void;
        export: () => never[];
    } & never[];
    cache: {
        get: (clone?: boolean) => {};
        set: (value: {} | ((prev: {}) => {})) => void;
        update: (fn: (prev: {}) => {}) => void;
        use: () => {};
        watch: (fn: (val: {}, unsub: () => void) => void) => () => void;
        export: () => {};
    } & {};
    emmiterProps: {
        get: (clone?: boolean) => undefined;
        set: (value: ((prev: undefined) => undefined) | undefined) => void;
        update: (fn: (prev: undefined) => undefined) => void;
        use: () => undefined;
        watch: (fn: (val: undefined, unsub: () => void) => void) => () => void;
        export: () => undefined;
    };
};
export default function (): import("react/jsx-runtime").JSX.Element;
