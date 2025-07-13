import React from 'react';
import Acordeon from '../components/acordeon';
import Typography from '../components/text/Typography';
import BreadCrumbs from '../components/breadcrumbs';
import Form from '../components/form/Form';
import { TrashIcon } from '@heroicons/react/24/outline';
import { BaseInput, ColorPicker, TextArea, RadioBox, CheckBox, SwitchBox, SliderInput, FileInput } from '../components/inputs';
import { Button, GroupButton, GroupButtonFiltre, IconButton } from '../components/buttons';
import List from 'src/components/list/base';
import Badge from '../components/utils/badge';
import Stat from '../components/utils/stat';
import Avatar from '../components/avatar';
import { Schema } from '../components/form/types';
import { useAlert } from '../components/alert';
import { store } from './config-props';
import { __generate } from './helpers/generate-tw';
import Divider from 'src/components/utils/divider';
import Card from 'src/components/cards/base';
import Tabs from '../components/tabs';


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
    type: 'number',
    value: 3,
    id: 'number',
    label: 'number',
    size: 'sm',
    iconEnable: true
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
    breadcrumbs: (props)=> (
        <BreadCrumbs
            pathname='test/xro'
            Link={({ href, children }) =>
                <div
                    onClick={() => console.log(href)}
                >
                    {children}
                </div>
            }
            {...props}
        />
    ),
    form: (props)=> (
        <Form
            scheme={testSchema}
        />
    ),
    typography: (props) => (
        <div className="space-y-1">
            <Typography
                as='p'
                variant='h1'
                {...props}
            >
                tests and improvements
            </Typography>
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
    ),
    button: (props) => (
        <>
            <Button
               
                shadow='lg'
                style={{ margin: 3 }}
                {...props}
            >
                button
            </Button>
            <Button
                size='sm'
                isGradient
                shadow='lg'
                style={{ backgroundColor: '#193fa7', margin: 3 }}
                {...props}
            >
                custom color
            </Button>
        </>
    ),
    iconbutton: (props) => (
        <>
            <IconButton
                style={{ margin: 3 }}
                {...props}
            >
                <TrashIcon />
            </IconButton>
        </>
    ),
    badge: (props) => (
        <>
            <Badge
                iconLeft={<TrashIcon />}
                {...props}
            >
                badge
            </Badge>
        </>
    ),
    stat: (props) => (
        <Stat
            value='value'
            desc='description'
            title='title'
            figure={
                <div 
                    className="radial-progress" 
                    style={{ "--value": 70 }}
                    aria-valuenow={70} 
                    role="progressbar"
                >
                    70%
                </div>
            }
            actions={
                <>
                    <Divider color='primary' style={{borderStyle:'dashed',color:'silver'}}>
                        actions
                    </Divider>
                    <button className="btn btn-xs btn-info btn-outline">one button</button>
                    <button className="btn btn-xs">two button</button>
                </>
            }
        />
    ),
    groupbuttons: (props)=> (
        <>
        </>
    ),
    text: (props)=> (
        <BaseInput
            labelTop='text'
            placeholder='test'
            type='text'
            {...props}
        />
    ),
    radio: (props)=> (
        <RadioBox
            labelTop='radio'
            {...props}
        />
    ),
    switch: (props)=> (
        <SwitchBox
            labelTop='switch'
            {...props}
        />
    ),
    checkbox: (props)=> (
        <CheckBox
            labelTop='checkbox'
            {...props}
        />
    ),
    textarea: (props)=> (
        <TextArea
            labelTop='textarea'
            {...props}
        />
    ),
    slider: (props)=> (
        <SliderInput 
            labelTop='slider'
            disableForm
            {...props}
        />
    ),
    file: (props)=> (
        <FileInput
            {...props}
        />
    ),
    color: (props)=> (
        <ColorPicker
            {...props}
        />
    ),
    avatar: (props)=> (
        <Avatar
            {...props}
            
            children={'xro'}
        />
    ),
    list: (props)=> (
        <List
            items={[1,2]}
            {...props}
        />
    ),
    card: (props)=> (
        <Card
            imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            {...props}
        />
    ),
    tabs: (props)=> (
        <Tabs
            items={[{label: 'test', content:'content-1'}]}
        />
    )
}



export default function SandBox() {
    const ctxAlert = useAlert();
    const cache = store.cache.use();
    const preview = store.preview.use();
    const emmiter = store.emmiterProps.use();
    
    
    React.useEffect(()=> {
        store.variants.set(Object.keys(patterns));
    
        if (emmiter) {
            //console.log(emmiter);
            store.cache.set((old)=> (
                {...old, ...emmiter}
            ));
        }
    }, [emmiter]);
    

    return (
       <>
            {preview && patterns[preview] &&
                patterns[preview](cache)
            }
       </>
    );
}