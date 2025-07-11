import React from 'react';
import Form from '../components/form/Form';
import { createStore} from 'statekit-lite';
import { typographyVariants } from '../components/text/types';

const daisyThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset"
];

const CONFIG = {
    Typography: {
        variants: {
            type: 'select',
            items: Object.keys(typographyVariants) as Array<keyof typeof typographyVariants>
        },
        fontStyle: {
            type: 'groupButton',
            items: ["normal", "italic"]
        },
        style: {
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
                items: ["left", "center" ,"right", "justify", "start", "end"]
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
                        id:'1px 1px 2px rgba(0,0,0,0.5)', label: 'x1'
                    },{
                        id:'1px 1px 2px rgba(0,0,0,0.5)', label: 'x2'
                    },{
                        id:'1px 1px 3px rgba(0,0,0,0.5)', label: 'x3'
                    },{
                        id:'1px 1px 4px rgba(0,0,0,0.5)', label: 'x4'
                    }
                ]
            }
        }
    }
}



export default function({ preview, onEdit }) {
    const [scheme, setScheme] = React.useState<any[]>();

    const create = (config: Record<string, any>) => {
        return Object.entries(config).map(([key, value])=> {
            if (key !== 'style') {
                return({
                    ...value,
                    id: key,
                    label: key,
                    position: 'top',
                    size: 'sm'
                });
            }
        }).filter((e)=> e!==undefined);
    }
    React.useEffect(()=> {
        if (CONFIG[preview]) setScheme(create(CONFIG[preview]));
    }, [preview]);

    
    return(
        <>
            {scheme &&
                <Form
                    scheme={scheme}
                    onChange={onEdit}
                />
            }
        </>
    );
}