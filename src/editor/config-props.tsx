import React from 'react';
import Form from '../components/form/Form';
import { createStore } from 'statekit-lite';
import { typographyVariants } from '../components/text/types';


const styleText = {
    fontWeight: {
        type: 'groupButton',
        items: ['normal', 'bold', '600', '800'],
    },
    fontSize: {
        type: 'slider',
        min: 6,
        max: 32
    },
    letterSpacing: {
        type: 'slider',
        min: 0,
        max: 32
    },
    wordSpacing: {
        type: 'slider',
        min: 0,
        max: 32
    },

    textAlign: {
        type: 'groupButton',
        items: ["left", "center", "right", "justify", "start", "end"]
    },
    textOverflow: {
        type: 'groupButton',
        items: ["clip", "ellipsis"]
    },
    textTransform: {
        type: 'groupButton',
        items: ["lowercase", "capitalize", "none", "uppercase"]
    },
    textDecoration: {
        type: 'groupButton',
        items: ["line-through", "none", "overline", "underline"]
    },
    textDecorationStyle: {
        type: 'groupButton',
        items: ["solid", "double", "dotted", "dashed", "wavy"]
    },
    textDecorationColor: {
        type: 'color'
    },

    overflowWrap: {
        type: 'groupButton',
        items: ["normal", "break-word"]
    },
    whiteSpace: {
        type: 'groupButton',
        items: ["normal", "pre", "nowrap", "pre-wrap", "pre-line"]
    },
    verticalAlign: {
        type: 'groupButton',
        items: ["baseline", "top", "bottom", "middle", "sub", "super", "text-top", "text-bottom"]
    },
    wordBreak: {
        type: 'groupButton',
        items: ["normal", "break-all", "keep-all", "break-word"]
    },

    textShadow: {
        type: 'select',
        options: [{
            id: '1px 1px 2px rgba(0,0,0,0.5)', label: 'x1'
        }, {
            id: '1px 1px 2px rgba(0,0,0,0.5)', label: 'x2'
        }, {
            id: '1px 1px 3px rgba(0,0,0,0.5)', label: 'x3'
        }, {
            id: '1px 1px 4px rgba(0,0,0,0.5)', label: 'x4'
        }
        ]
    }
}

const base = {
    size: {
        type: 'groupButton',
        value: 'auto',
        items: ['auto', 'xs', 'sm', 'md', 'lg', 'xl']
    },
    variant: {
        type: 'groupButton',
        value: 'contained',
        items: ['contained', 'outline', 'dash', 'soft', 'ghost', 'link']
    },
    color: {
        type: 'groupButton',
        items: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
    },
    colorCustom: {
        type: 'color'
    },
    shadow: {
        type: 'groupButton',
        items: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']
    },
}
const typography = {
    variant: {
        type: 'select',
        items: Object.keys(typographyVariants) as Array<keyof typeof typographyVariants>
    },
    fontStyle: {
        type: 'groupButton',
        items: ["normal", "italic"]
    },
    color: {
        type: 'groupButton',
        items: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
    },
    style: styleText
}


const CONFIG = {
    // text
    Typography: {
        ...typography
    },
    Link: {
        ...typography
    },
    MarqueText: {
        ...typography,
        direction: {
            type: 'groupButton',
            value: "left",
            items: ["left", "right"]
        },
        speed: {
            type: 'number',
            iconEnable: true,
            value: 6,
        }
    },

    // buttons
    Button: {
        ...base,
        isGradient: {
            type: 'switch',
            size: 'sm',
            color: 'white',
            style:{marginTop: 5}
        }
    },
    IconButton: {
        ...base,
        isGradient: {
            type: 'switch',
            size: 'sm',
            color: 'white',
            style:{marginTop: 5}
        },
        isRounded: {
            type: 'switch',
            size: 'sm',
            color: 'white',
            style:{marginTop: 5}
        }
    },
    GroupButtons: {
        ...base
    },
    GroupButtonFiltre: {
        ...base
    },

    // inputs
    TextInput: {

    },
    NumberInput: {

    },
    Color: {

    },
    Date: {

    },
    Time: {

    },
    TextArea: {

    },
    File: {

    },
    Radio: {

    },
    Switch: {

    },
    CheckBox: {

    },
    Slider: {

    },

    // navigations
    Tabs: {
        ...base,
        variant: {
            type: 'groupButton',
            value: "lift",
            items: ["border", "lift", "box"]
        }
    },
    BottomNavigation: {

    },
    Breadcrumbs : {

    },
    Menu: {

    },

    // data-display
    Badge: {
        ...base,
        isGradient: {
            type: 'switch',
            size: 'sm',
            color: 'white',
            style:{marginTop: 5}
        }
    },
    Avatar: {
        ...base,
    },
    Indicator: {
        position: {
            type: 'groupButton',
            value: 'top',
            items: ["top", "middle", "bottom"]
        },
        align: {
            type: 'groupButton',
            value: 'end',
            items: ["start", "center", "end"]
        },
    },
    List: {

    },
    Table: {
        ...base,
    },

    // feedback
    Tooltip: {
        ...base,
    },
    Alert: {

    },
    Modal: {

    },
    Popover: {
        
    },
    Drawer: {

    },

    // layout
    Divider: {
        ...base,
        variant: {
            type: 'groupButton',
            items: ["dotted", "dashed"]
        },
        position: {
            type: 'groupButton',
            items: ['start', 'end']
        },
        orientation: {
            type: 'groupButton',
            value: 'horizontal',
            items: ["horizontal", "vertical"]
        }
    },
    Splitter: {
        ...base,
        orientation: {
            type: 'groupButton',
            items: ["horizontal", "vertical"]
        },
    },
    Chat: {
        ...base,
        direction: {
            type: 'groupButton',
            items: ["start", "end"]
        }
    },
    Accordion: {
        ...base,
    },
    Collapse: {
        ...base,
    },
    Stat: {

    },

    // media 
    Card: {
        imageIsSide: {
            type: 'switch',
            color: 'white',
            style:{marginBottom: 5}
        }, 
        imageIsFull: {
            type: 'switch',
            color: 'white'
        }
    },
    Promo: {

    }
}

export const store = createStore({
    preview: undefined,
    propses: {
        ...CONFIG
    },
    scheme: [],
    cache: {},
    emmiterProps: undefined
});



export default function() {
    const preview = store.preview.use();
    const propses = store.propses.use();
    const scheme = store.scheme.use();

    const create = (config: Record<string, any>) => {
        return Object.entries(config).map(([key, value])=> {
            if (key !== 'style') {
                return({
                    size: 'xs',
                    ...value,
                    id: key,
                    label: key,
                    position: 'top',
                });
            }
        }).filter((e)=> e!==undefined);
    }
    const handleChangeForm = (id: string | number, value: any) => {
        store.emmiterProps.set({ [id]: value });
    }
    React.useEffect(()=> {
        store.cache.set({});

        if (CONFIG[preview]) {
            store.scheme.set(create(propses[preview]));
            store.emmiterProps.set(undefined);
        }
    }, [preview, propses]);

    
    return(
        <div 
            className='w-70 p-2 absolute right-0 top-10'
            style={{ 
                zIndex: 999,
                background: 'rgb(58, 58, 58)', 
                boxShadow: "3px 0px 3px rgba(1, 1, 1, 0.1)",
                visibility: preview ? 'visible' : 'hidden'
            }}
        >
            {scheme &&
                <Form
                    scheme={scheme}
                    onChange={handleChangeForm}
                />
            }
        </div>
    );
}