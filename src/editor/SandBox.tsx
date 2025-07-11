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
const testSchema: Schema[] = [{
    type: 'text',
    placeholder: 'text',
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
    placeholder: 'xro',
    label: 'text area',
    size: 'sm'
},{
    type: 'color',
    value: 'red',
    id: 'color',
    label: 'color picker',
    size: 'sm',
},{
    type: 'number',
    value: 3,
    id: 'number',
    label: 'number',
    size: 'sm',
    iconEnable: true
},{
    type: 'groupButton',
    value: 'test2',
    id: 'groupButton',
    label: 'group-button',
    size: 'sm',
    items: ['test', 'test2']
},{
    type: 'groupButtonFiltre',
    value: 'test2',
    id: 'groupButtonFiltre',
    label: 'group-button-colapsed',
    size: 'sm',
    items: ['test', 'test2']
},{
    type: 'autocomplete',
    placeholder: 'text',
    value: 'test2',
    id: 'autocomplete',
    label: 'autocomplete',
    size: 'sm',
    options: ['test', 'test2']
},{
    type: 'select',
    placeholder: 'test',
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
},{
    type: 'file',
    value: 3,
    id: 'file',
    label: 'file loader',
    size: 'sm'
},{
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
    style: { marginTop: 5, backgroundColor: 'inherit' },
    size: 'sm'
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
    form: (props)=> (
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
    typography: (props) => (
        <div className="space-y-1">
            {variants.map((variant) => (
                <div key={variant}>
                    <Typography 
                        as='p' 
                        variant={variant} 
                        fontFamily='roboto'
                        { ...props }
                    >
                        { variant }
                    </Typography>
                </div>
            ))}
        </div>
    ),
    acordeon: (props)=> (
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


export default function SandBox({ setMode}) {
    

    return (
        <main className="flex flex-col h-full w-full">
            <div className="flex flex-col m-auto w-90">
                { patterns.form() }
                <Acordeon
                    size='sm'
                    items={[{
                        content: <div>content</div>,
                        title: 'title-1'
                    }, {
                        content: 'content',
                        title: 'title-2'
                    }
                    ]}
                />
            </div>
        </main>
    );
}