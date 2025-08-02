import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Form from '../components/form/Form';
import { createStore } from 'statekit-lite';
import { Button, IconButton } from '../components/buttons';
import Drn from './helpers/drn';
import { COUNTRY_CODES } from '@/components/utils/flag';
import { spinerVariants, variantsText } from '@/pages/meta';



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
        items: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        value: 'none'
    },
    disabled: {
        type: 'switch',
        size: 'sm',
        color: 'white',
        style: { marginTop: 5 }
    },
}
const typography = {
    variant: {
        type: 'select',
        items: variantsText,
        value: 'body2'
    },
    shadow: {
        type: 'groupButton',
        items: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        value: 'none'
    },
    fontStyle: {
        type: 'groupButton',
        items: ['none', "normal", "italic"],
        value: 'none'
    },
    color: {
        type: 'groupButton',
        items: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
    },
    colorCustom: {
        type: 'color'
    },
    style: styleText
}

/** components props variant list */
const CONFIG = {
    AlertProvider: {
        
    },
    ThemeProvider: {

    },

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
    BaseInput: {
        ...base
    },
    NumberInput: {
        ...base
    },
    Color: {
        ...base
    },
    Date: {
        ...base
    },
    ColorPicker: {
        ...base
    },
    Time: {
        ...base
    },
    TextArea: {
        ...base
    },
    File: {
        ...base
    },
    Radio: {
        ...base
    },
    Switch: {
        ...base
    },
    CheckBox: {
        ...base
    },
    Slider: {
        ...base
    },
    Select: {
        ...base
    },
    Autocomplete: {
        ...base
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
    Flag: {
        code: {
            type: 'select',
            value: 'UA',
            items: COUNTRY_CODES
        }
    },
    List: {

    },
    Table: {
        ...base,
    },
    Spinner: {
        ...base,
        variant: {
            type: 'groupButton',
            value: 'spinner',
            items: spinerVariants
        }
    },
    Progress: {
        ...base,
        value: {
            type: 'slider',
            min: 0,
            max: 100
        }
    },
    RadialProgress: {
        ...base,
        value: {
            type: 'slider',
            min: 0,
            max: 100
        }
    },

    // feedback
    Tooltip: {
        ...base,
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
            items: ["solid", "dotted", "dashed"],
            variant: 'solid'
        },
        position: {
            type: 'groupButton',
            items: ['center', 'start', 'end'],
            value: 'center'
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
    Box: {
        shadowSize: {
            type: 'slider',
            value: 1,
            min: -25,
            max: 25
        },
        elevation: {
            type: 'slider',
            value: 0.6,
            min: 0,
            max: 1,
            step: 0.01
        },
        variant: {
            type: 'groupButton',
            value: 'contained',
            items: ['contained', 'outline', 'dash', 'neumorph', 'glass']
        },
        color: {
            type: 'groupButton',
            items: ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']
        },
        colorCustom: {
            type: 'color'
        }
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
    propses: {
        ...CONFIG
    },
    scheme: [],
    cache: {},
    emmiterProps: undefined
});



export default function() {
    const [colapse, setColapse] = useState(false);
    const { componentName } = useParams();
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

        if (CONFIG[componentName]) {
            store.scheme.set(create(propses[componentName]));
            store.emmiterProps.set(undefined);
        }
    }, [componentName, propses]);
    
    
    return(
        <>
            <div
                className='flex flex-col w-70 absolute right-0 top-14'
                style={{ 
                    zIndex: 999,
                    background: 'rgb(58, 58, 58)', 
                    boxShadow: "-3px 2px 2px rgba(1, 1, 1, 0.1), 3px 2px 2px rgba(1, 1, 1, 0.1)",
                    visibility: componentName ? 'visible' : 'hidden',
                    width: colapse ? 40 : undefined,
                    height: colapse ? 20 : undefined,
                }}
            >
                <div className='flex bg-[#2f2f2f]'>
                    <Button
                        size='xs'
                        variant='ghost'
                        className='ml-auto'
                    >
                        x
                    </Button>
                </div>
                <span className='p-2' style={{visibility: colapse?'hidden':'visible'}}>
                    {scheme &&
                        <Form
                            scheme={scheme}
                            onChange={handleChangeForm}
                        />
                    }
                </span>
            </div>
        </>
    );
}