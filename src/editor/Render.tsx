import React from 'react';
import Acordeon from '../components/acordeon';
import Typography from '../components/text/Typography';
import BreadCrumbs from '../components/breadcrumbs';
import Form from '../components/form/Form';
import { TrashIcon, HomeIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { BaseInput, ColorPicker, TextArea, RadioBox, CheckBox, SwitchBox, SliderInput, FileInput } from '../components/inputs';
import { Button, GroupButton, GroupButtonFiltre, IconButton } from '../components/buttons';
import { MarqueText, Link, BottomNavigation, Badge, Splitter, Indicator, Chat, Tooltip } from '../index';
import List from 'src/components/list/base';
import Stat from '../components/utils/stat';
import Avatar from '../components/avatar';
import Promo from '../components/carousel/promo';
import Table from '../components/tables/data-table';
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
    // Texts
    Typography: (props) => (
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
    MarqueText: (props) => (
        <MarqueText
            {...props}
        />
    ),
    Link: (props) => (
        <Link
            {...props}
        />
    ),

    // Buttons
    Button: (props) => (
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
    IconButton: (props) => (
        <>
            <IconButton
                style={{ margin: 3 }}
                {...props}
            >
                <TrashIcon />
            </IconButton>
        </>
    ),
    GroupButtons: (props)=> (
        <GroupButton
            items={['test', 'test2']}
            {...props}
        />
    ),
    GroupButtonFiltre: (props)=> (
        <GroupButtonFiltre
            items={['test', 'test2']}
            {...props}
        />
    ),

    // Inputs
    TextInput: (props)=> (
        <BaseInput
            labelTop='text'
            placeholder='test'
            type='text'
            {...props}
        />
    ),
    Radio: (props)=> (
        <RadioBox
            labelTop='radio'
            value={true}
            {...props}
        />
    ),
    Switch: (props)=> (
        <SwitchBox
            labelTop='switch'
            {...props}
        />
    ),
    CheckBox: (props)=> (
        <CheckBox
            labelTop='checkbox'
            {...props}
        />
    ),
    TextArea: (props)=> (
        <TextArea
            placeholder='text-area'
            labelTop='textarea'
            {...props}
        />
    ),
    Slider: (props)=> (
        <SliderInput 
            labelTop='slider'
            disableForm
            {...props}
        />
    ),
    File: (props)=> (
        <FileInput
            {...props}
        />
    ),
    Color: (props)=> (
        <ColorPicker
            {...props}
        />
    ),
    Date: (props)=> (
        <BaseInput
            labelTop='date'
            placeholder='date'
            type='date'
            {...props}
        />
    ),
    Time: (props)=> (
        <BaseInput
            labelTop='time'
            placeholder='time'
            type='time'
            {...props}
        />
    ),

    // Navigation
    Tabs: (props)=> (
        <Tabs
            items={[
                {label: 'test', content:'content-1'}, 
                {label: 'test-2', content:'content-2'},
                {label: 'test-3', content:'content-3'}
            ]}
            {...props}
        />
    ),
    Breadcrumbs: (props) => (
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
    BottomNavigation: (props) => (
        <BottomNavigation
            items={[
                { icon: <HomeIcon />, label: 'home' },
                { icon: <Cog8ToothIcon />, label: 'settings' }
            ]}
            {...props}
        />
    ),

    // data-display
    Avatar: (props)=> (
        <Avatar
            {...props}
            
            children={'xro'}
        />
    ),
    Badge: (props)=> (
        <>
            <Badge
                iconLeft={<TrashIcon />}
                {...props}
            >
                badge
            </Badge>
        </>
    ),
    Indicator: (props) => (
        <Indicator
            { ...props }
        />
    ),
    List: (props)=> (
        <List
            items={[
                <>
                    <div>left</div>
                    <div>center</div>
                    <div>right</div>
                </>
            ]}
            {...props}
        />
    ),

    // layout
    Divider: (props)=> (
        <Divider 
            color='primary' 
            style={{ borderStyle: 'dashed', color: 'silver' }}
            {...props}
        >
            divider
        </Divider>
    ), 
    Stat: (props) => (
        <Stat
            value='value'
            desccription='description'
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
    Splitter: (props) => (
        <Splitter
            { ...props }
        />
    ),
    Chat: (props)=> (
        <>
            <Chat
                avatarSrc='https://img.daisyui.com/images/profile/demo/kenobee@192.webp'
                header={
                    <>
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </>
                }
                footer='footer'
                children='Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes can be restored. Define a stateKey'
                { ...props }
                direction='start'
            />
            <Chat
                avatarSrc='https://img.daisyui.com/images/profile/demo/kenobee@192.webp'
                header={
                    <>
                        Obi-Wan Kenobi
                        <time className="text-xs opacity-50">12:45</time>
                    </>
                }
                footer='footer'
                children='Splitters can be configured as stateful so that when the user visits the page again, the adjusts sizes can be restored. Define a stateKey'
                { ...props }
                direction='end'
            />
        </>
    ),
    Tooltip: (props)=> (
        <Tooltip
            children={
                <button className="btn">Hover me</button>
            }
            content='tooltip content'
            { ...props }
        />
    ),
    Accordion: (props) => (
        <Acordeon
            items={[{
                content: <div>content</div>,
                title: 'title-1'
            }, {
                content: 'content',
                title: 'title-2'
            }
            ]}
            {...props}
        />
    ),

    Table: (props)=> (
        <Table
            { ...props }
        />
    ),
    form: (props) => (
        <Form
            scheme={testSchema}
        />
    ),
    card: (props)=> (
        <Card
            imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            {...props}
        />
    ),
    promo: (props)=> (
        <Promo
            { ...props }
        />
    ),
}



export default function SandBox() {
    const ctxAlert = useAlert();
    const cache = store.cache.use();
    const preview = store.preview.use();
    const emmiter = store.emmiterProps.use();
    
    
    React.useEffect(()=> {
        //__generate()
        store.variants.set(Object.keys(patterns));
    
        if (emmiter) {
            //console.log(emmiter);
            store.cache.set((old)=> {
                if (!emmiter.colorCustom) return ({...old, ...emmiter});
                else return ({...old, color: emmiter.colorCustom});
            });
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