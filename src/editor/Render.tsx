import React from 'react';
import Acordeon from '../components/acordeon';
import BreadCrumbs from '../components/breadcrumbs';
import Form from '../components/form/Form';
import { TrashIcon, HomeIcon, Cog8ToothIcon, Battery50Icon, CircleStackIcon, EnvelopeIcon, FolderIcon } from '@heroicons/react/24/outline';
import { BaseInput, NumberInput, ColorPicker, TextArea, RadioBox, CheckBox, SwitchBox, SliderInput, FileInput } from '../components/inputs';
import { 
    MarqueText, Link, BottomNavigation, Badge, Splitter, Indicator, Chat, Tooltip,
    Button, GroupButton, GroupButtonFiltre, IconButton, Divider,
    Modal, Popover, Drawer, Typography, VerticalCarousel, HorizontalCarousel, PromoBanner, Card, 
    DataTable, ColumnDataTable, Flag, Collapse, SplitterPanel, Avatar, AvatarGroup,
    Hero, Footer, AppBar, Menu
} from '../index';
import List from 'src/components/list/base';
import Stat from '../components/utils/stat';
import { Schema } from '../components/form/types';
import { useAlert } from '../components/alert';
import { store } from './config-props';
import { __generate } from './helpers/generate-tw';
import Tabs from '../components/tabs';
import Preview from '../components/app-bar/Preview';


const AlertRender = (props) => {
    const { addAlert } = useAlert();

    const useTextAllert = (type: 'error' | 'warning' | 'success' | 'info') => {
        const words = [
            "Ошибка", "Успешно", "Действие", "Обновлено", "Предупреждение", "Критическая",
            "Операция", "Выполнена", "Проблема", "Запущено", "Анализ", "Внимание", "Процесс",
            "Ожидание", "Прервано", "Система", "Доступ", "Разрешено", "Ограничено", "Завершено",
            "Неудача", "Обнаружено", "Требуется", "Проверка", "Перезапуск", "Результат",
            "Конфигурация", "Сбой", "Инициализация", "Запрос", "Режим", "Соединение"
        ];

        const length = Math.floor(Math.random() * (14 - 6 + 1)) + 6;
        const randomText = Array.from({ length }, () =>
            words[Math.floor(Math.random() * words.length)]
        ).join(" ");


        addAlert(type, randomText);
    }

    return (
        <>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='success'
                onClick={() => useTextAllert('success')}
            >
                success
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='info'
                onClick={() => useTextAllert('info')}
            >
                info
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='error'
                onClick={() => useTextAllert('error')}
            >
                error
            </Button>
            <Button
                shadow='sm'
                variant='outline'
                size='md'
                style={{ margin: 3 }}
                color='warning'
                onClick={() => useTextAllert('warning')}
            >
                warning
            </Button>
        </>
    );
}
const TableRender = (props) => {
    const testData = [
        { name: "Amy Elsner", country: 'RU', rating: 4, data: '03-11-2025', image: 'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg' },
        { name: "John Doe", country: 'US', rating: 5, data: '12-05-2024', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: "Emma Smith", country: 'UK', rating: 3, data: '07-19-2023', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: "Carlos Rodríguez", country: 'ES', rating: 4, data: '11-22-2022', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: "Sofia Müller", country: 'DE', rating: 2, data: '05-14-2021', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: "Luca Moretti", country: 'IT', rating: 5, data: '09-30-2020', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { name: "Isabelle Dubois", country: 'FR', rating: 3, data: '04-10-2019', image: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { name: "Hiroshi Tanaka", country: 'JP', rating: 4, data: '08-27-2025', image: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { name: "Chen Wei", country: 'CN', rating: 5, data: '06-13-2024', image: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { name: "Olga Ivanova", country: 'RU', rating: 2, data: '03-03-2023', image: 'https://randomuser.me/api/portraits/women/9.jpg' },
        { name: "Pedro Gomez", country: 'MX', rating: 3, data: '01-29-2022', image: 'https://randomuser.me/api/portraits/men/10.jpg' },
        { name: "Fatima Al-Farsi", country: 'AE', rating: 4, data: '11-05-2021', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
        { name: "William Johnson", country: 'CA', rating: 5, data: '07-21-2020', image: 'https://randomuser.me/api/portraits/men/12.jpg' },
        { name: "Elena Petrova", country: 'RU', rating: 3, data: '02-14-2019', image: 'https://randomuser.me/api/portraits/women/13.jpg' },
        { name: "Mohammed Hassan", country: 'EG', rating: 2, data: '12-09-2025', image: 'https://randomuser.me/api/portraits/men/14.jpg' },
        { name: "Aisha Khan", country: 'PK', rating: 4, data: '05-18-2024', image: 'https://randomuser.me/api/portraits/women/15.jpg' },
        { name: "Benjamin Andersson", country: 'SE', rating: 5, data: '08-26-2023', image: 'https://randomuser.me/api/portraits/men/16.jpg' },
        { name: "Laura García", country: 'AR', rating: 3, data: '10-31-2022', image: 'https://randomuser.me/api/portraits/women/17.jpg' },
        { name: "Nathan Brown", country: 'AU', rating: 4, data: '06-20-2021', image: 'https://randomuser.me/api/portraits/men/18.jpg' },
        { name: "Mia Nilsson", country: 'NO', rating: 2, data: '03-25-2020', image: 'https://randomuser.me/api/portraits/women/19.jpg' }
    ];

    return (
        <>
            <DataTable
                value={testData}
                header={
                    <div>
                        header
                    </div>
                }
                footer={
                    <div>
                        footer
                    </div>
                }
            >
                <ColumnDataTable header="Image" field='image' 
                    body={(data)=> 
                        <Avatar src={data?.image}/>
                    }
                />
                <ColumnDataTable header="Name" filter filterPlaceholder="По именам" sortable field='name' />
                <ColumnDataTable header="Rating" sortable field='rating' 
                    body={(data)=> 
                        <div className="rating rating-sm">
                            {[1,2,3,4,5].slice(0, data.rating-1).map((elem, i)=>
                                <div 
                                    className="mask mask-star bg-amber-300" 
                                    aria-label="1 star"
                                    aria-current={true}
                                />
                            )}
                        </div>
                    }
                />
                <ColumnDataTable header="Data" sortable field='data' />
                <ColumnDataTable header="Country" sortable field='country' 
                    body={(data)=> 
                        <Flag code={data?.country} />
                    }
                />
            </DataTable>
        </>
    );
}
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
            color='white'
            {...props}
        />
    ),
    Link: (props) => (
        <Link
            variant='subtitle1'
            color='white'
            children='link'
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
    NumberInput: (props)=> (
        <NumberInput
            labelTop='number'
            iconEnable
            placeholder='test'
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
    Breadcrumbs: (props)=> (
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
    BottomNavigation: (props)=> (
        <BottomNavigation
            items={[
                { icon: <HomeIcon />, label: 'home' },
                { icon: <Cog8ToothIcon />, label: 'settings' }
            ]}
            {...props}
        />
    ),
    Menu: (props)=> (
        <Menu
            onSelect={console.log}
            size='xs'
            items={[
                { id: '1', label: 'test', icon: <HomeIcon className='h-4' /> },
                { id: '2', label: 'test', icon: <Cog8ToothIcon className='h-4' /> },
                {
                    id: '3',
                    label: 'test', 
                    icon: <FolderIcon className='h-4' />, 
                    title: 'nested main',
                    open: true,
                    style: {fontSize: 12},
                    children: [
                        { id: '3', label: 'test', icon: <Battery50Icon className='h-4' />},
                        {
                            id: '4', label: 'test', icon: <EnvelopeIcon className='h-4' />, open: true,
                            children: [
                                { id: '3', label: 'test', icon: <CircleStackIcon className='h-4' /> },
                                { id: '4', label: 'test', icon: <TrashIcon className='h-4' /> }
                            ]
                        }
                    ]
                }
            ]}
            { ...props }
        />
    ),

    // data-display
    Avatar: (props)=> (
        <Avatar
            size='md'
            {...props}
            
            children={'xro'}
        />
    ),
    AvatarGroup: (props)=> (
        <AvatarGroup
            size='md'
            items={[
                { src: 'https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/superperson@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/gordon@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp'},
                { children: '+99'}
            ]}
            {...props}
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
            className='badge badge-success'
            { ...props }
            content={'new'}
        >
            <Avatar
                size='lg'
                src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
            />
        </Indicator>
    ),
    List: (props)=> (
        <List
            items={[
                <>
                    <div>
                        <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/>
                    </div>
                    <div>
                        <div>Ellie Beilish</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
                    </div>
                    <div>
                        <IconButton
                            variant='ghost'
                        >
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </IconButton>
                        <IconButton
                            variant='ghost'
                        >
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </IconButton>
                    </div>
                </>,
                <>
                    <div>
                        <img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/>
                    </div>
                    <div>
                        <div>Dio Lupa</div>
                        <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                    </div>
                    <div>
                        <IconButton
                            variant='ghost'
                        >
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </IconButton>
                        <IconButton
                            variant='ghost'
                        >
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                        </IconButton>
                    </div>
                </>
            ]}
            {...props}
        />
    ),
    Table: (props)=> (
        <div className='w-200' style={{marginLeft: '-80%'}}>
            <TableRender
                { ...props }
            />
        </div>
    ),

    // feedback
    Modal: (props) => (
        <>
            <Button
                shadow='sm'
                size='md'
                style={{ margin: 3 }}
                color='primary'
                onClick={()=> document.querySelector('[data-modal-root]').showModal()}
            >
                open modal
            </Button>
            <Modal
                children={
                    <>
                        <Typography variant='h6'>
                            Hello
                        </Typography>
                        <Typography className="py-4" variant='subtitle2'>
                            Press ESC key or click outside to close
                        </Typography>
                    </>
                }
                {...props}
            />
        </>
    ),
    Popover: (props) => (
        <Popover
            {...props}
            content={
                <>
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </>
            }
        >
            <Button
                shadow='sm'
                size='md'
                style={{ margin: 3 }}
                color='primary'
            >
                {props?.isHover ? 'hover my' : 'click my'}
            </Button>
        </Popover>
    ),
    Drawer: (props) => (
        <Drawer
            {...props}
            content={
                <>
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </>
            }
        >
            <Button
                shadow='sm'
                size='md'
                style={{ margin: 3 }}
                color='primary'
            >
                {'click my'}
            </Button>
        </Drawer>
    ),
    Alert: (props)=> (
        <AlertRender {...props} />
    ),
    Tooltip: (props)=> (
        <Tooltip
            children={
                <Button
                    shadow='sm'
                    size='md'
                    style={{ margin: 3 }}
                    className='w-full'
                    color='primary'
                >
                    hover my
                </Button>
            }
            content='tooltip content'
            { ...props }
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
            style={{height: 400, width: 500, marginLeft: '-50%'}}
            { ...props }
        >
            <SplitterPanel className="flex justify-center items-center" size={20} minSize={10}>
                Panel 1
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter orientation="vertical">
                    <SplitterPanel className="flex justify-center items-center" size={15}>
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex justify-center items-center" size={20}>
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel className="flex justify-center items-center" size={80}>
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
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
    Collapse: (props) => (
        <Collapse
            title='title-1'
            content='content'
            {...props}
        />
    ),

    // media
    Card: (props)=> (
        <Card
            imageSrc='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            title='Card Title'
            description='A card component has a figure, a body part, and inside body there are title and actions parts'
            actions={
                <Button
                    size='sm'
                    color='success'
                    shadow='lg'
                >
                    go to
                </Button>
            }
            {...props}
        />
    ),
    Promo: (props)=> (
        <PromoBanner
            { ...props }
        />
    ),
    VerticalCarousel: (props)=> (
        <div className='h-150'>
            <VerticalCarousel
                items={[
                    {type: 'image', src: 'https://picsum.photos/600/600'},
                    {type: 'image', src: 'https://picsum.photos/400/400'},
                    {type: 'image', src: 'https://picsum.photos/300/300'},
                    {type: 'image', src: 'https://picsum.photos/300/300'}
                ]}
                { ...props }
            />
        </div>
    ),
    HorizontalCarousel: (props)=> (
        <div style={{height: 200, width: 500}}>
            <HorizontalCarousel
                height={200}
                items={[
                    {type: 'image', src: 'https://picsum.photos/600/600'},
                    {type: 'image', src: 'https://picsum.photos/400/400'},
                    {type: 'image', src: 'https://picsum.photos/300/300'},
                    {type: 'image', src: 'https://picsum.photos/300/300'}
                ]}
                { ...props }
            />
        </div>
    ),

    // page
    Hero: (props)=> (
        <Hero
            className='min-h-150 min-w-170'
            fontImageOverlaySrc='https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp'
            {...props}
        >
            <div className="max-w-md">
                <Typography
                    variant='h2'
                >
                    Hello there
                </Typography>
                <Typography 
                    variant='caption'
                    className="mb-10 mt-2"
                    style={{color: '#c0c0c0'}}
                >
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </Typography>
                <Button 
                    size='md'
                    color='success'
                    shadow='lg'
                >
                    Get Started
                </Button>
            </div>
        </Hero>
    ),
    Footer: (props)=> (
        <Footer
            className='bg-[#00000049] p-10'
            style={{marginLeft: '-80%', width: 800}}
            {...props}
        >
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Info</h6>
                <a className="link link-hover">Galery</a>
                <a className="link link-hover">FAQ</a>
            </nav>

            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                    <a>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </Footer>
    ),
    AppBar: (props)=> (
        <Preview
        >
            
        </Preview>
    ),

    // any
    form: (props) => (
        <Form
            scheme={testSchema}
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