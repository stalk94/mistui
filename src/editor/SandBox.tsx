import React from 'react';
import Acordeon from '../components/acordeon';
import Typography from '../components/text/Typography';
import { typographyVariants } from '../components/text/types';
import BreadCrumbs from '../components/breadcrumbs';
import Form from '../components/form/Form';
import { Schema } from '../components/form/types';
import { __generate } from './helpers/generate-tw';


function bruteForceGetCssVariables(): Record<string, string> {
    const testEl = document.createElement('div');
    testEl.style.all = 'initial'; // сбрасываем
    testEl.style.display = 'none';
    document.body.appendChild(testEl);

    const computed = getComputedStyle(testEl);
    const result: Record<string, string> = {};

    for (let i = 0; i < computed.length; i++) {
        const prop = computed[i];
        if (prop.startsWith('--')) {
            result[prop] = computed.getPropertyValue(prop).trim();
        }
    }

    document.body.removeChild(testEl);
    return result;
}
const variants = Object.keys(typographyVariants) as Array<keyof typeof typographyVariants>;
const daisyThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset"
];
const testSchema: Schema[] = [{
    type: 'text',
    value: 'xro',
    id: 'text',
    label: 'text',
    labelLeft: 't',
    size: 'sm',
    required: true
},{
    type: 'textArea',
    value: 'text',
    id: 'textArea',
    label: 'text area',
    size: 'sm'
},
{
    type: 'color',
    value: 'red',
    id: 'color',
    label: 'color picker',
    size: 'sm',
},{
    type: 'groupButton',
    value: 'test2',
    id: 'groupButton',
    label: 'group-button',
    size: 'sm',
    items: ['test', 'test2']
},{
    type: 'autocomplete',
    value: 'test2',
    id: 'autocomplete',
    label: 'autocomplete',
    size: 'sm',
    options: ['test', 'test2']
},{
    type: 'select',
    value: 'test2',
    id: 'select',
    label: 'select',
    size: 'sm',
    items: ['test', 'test2']
},{
    type: 'time',
    value: 'test2',
    id: 'time',
    label: 'time',
    size: 'sm',
},{
    type: 'date',
    value: 'test2',
    id: 'date',
    label: 'date',
    size: 'sm'
},
{
    type: 'number',
    value: 3,
    id: 'number',
    label: 'number',
    size: 'sm',
    iconEnable: true
},
{
    type: 'slider',
    value: 40,
    labelLeft: 'test',
    id: 'slider',
    label: 'slider',
    size: 'sm',
},{
    type: 'switch',
    value: false,
    id: 'switch',
    labelRight: 'switch',
    size: 'sm',
    style: { marginTop: 10 }
},{
    type: 'checkbox',
    value: false,
    id: 'checkbox',
    labelRight: 'checkbox',
    style: { marginTop: 5 },
    size: 'sm',
},{
    type: 'radio',
    value: true,
    id: 'radio',
    labelRight: 'radio',
    style: { marginTop: 5 },
    size: 'sm',
}
];
const patterns = {
    form: ()=> (
        <>
            <BreadCrumbs
                pathname='test/xro'
                Link={({ href, children }) =>
                    <div
                        onClick={() => console.log(href)}
                    >
                        {children}
                    </div>
                }
            />
            <Form
                scheme={testSchema}
            />
        </>
    ),
    typography: () => (
        <div className="space-y-1">
            {variants.map((variant) => (
                <div key={variant}>
                    <Typography variant={variant}>
                        { variant }
                    </Typography>
                </div>
            ))}
        </div>
    ),
    acordeon: ()=> (
        <Acordeon
            items={[{
                content: <div>content</div>,
                title: 'title-1'
            }, {
                content: 'content',
                title: 'title-2'
            }
            ]}
        />
    )
}



export default function SandBox({ setMode }) {
    const [props, setProps] = React.useState({});
    console.log(bruteForceGetCssVariables())

    return (
        <main className="flex flex-col h-full w-full">
            <div className="flex flex-col m-auto w-90">
                { patterns.form() }
            </div>
        </main>
    );
}