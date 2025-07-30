import ShikiHighlighter from "react-shiki";
import { store } from './config-props';
import { formatCodeForShiki, toJSXProps } from './helpers/dom';



const patterns = {
    // Texts
    Typography: (props) => (`
        <Typography
            ${toJSXProps(props)}
        >
            tests and improvements
        </Typography>
    `),
    MarqueText: (props) => (`
        <MarqueText ${toJSXProps(props)} />
    `),
    Link: (props) => (`
        <Link ${toJSXProps(props)} />
    `),

    // Buttons
    Button: (props) => (`
        <Button ${toJSXProps(props)}>
            button
        </Button>
    `),
    IconButton: (props) => (`
        <>
            <IconButton
                ${toJSXProps(props)}
            >
                <TrashIcon />
            </IconButton>
        </>
    `),
    GroupButtons: (props)=> (`
        <GroupButton
            items={['test', 'test2']}
            ${toJSXProps(props)}
        />
    `),
    GroupButtonFiltre: (props)=> (`
        <GroupButtonFiltre
            items={['test', 'test2']}
            ${toJSXProps(props)}
        />
    `),

    // Inputs
    TextInput: (props) => (`
        <BaseInput ${toJSXProps(props)} />
    `),
    NumberInput: (props)=> (`
        <NumberInput${toJSXProps(props)} />
    `),
    ColorPicker: (props)=> (`
        <ColorPicker
            ${toJSXProps(props)}
        />
    `),
    Radio: (props)=> (`
        <RadioBox
            ${toJSXProps(props)}
        />
    `),
    Switch: (props)=> (`
        <SwitchBox
            ${toJSXProps(props)}
        />
    `),
    CheckBox: (props)=> (`
        <CheckBox
            ${toJSXProps(props)}
        />
    `),
    TextArea: (props)=> (`
        <TextArea
            ${toJSXProps(props)}
        />
    `),
    Slider: (props)=> (`
        <SliderInput 
            labelTop='slider'
            disableForm
            ${toJSXProps(props)}
        />
    `),
    File: (props)=> (`
        <FileInput
            ${toJSXProps(props)}
        />
    `),
    Date: (props)=> (`
        <BaseInput
            type='date'
            ${toJSXProps(props)}
        />
    `),
    Time: (props)=> (`
        <BaseInput
            type='time'
            ${toJSXProps(props)}
        />
    `),
    Select: (props)=> (`
        <Select
            placeholder='select'
            items={['test', 'test2']}
            ${toJSXProps(props)}
        />
    `),
    Autocomplete: (props)=> (`
        <AutoComplete
            placeholder='autocomplete'
            options={['test', 'test2']}
            ${toJSXProps(props)}
        />
    `),

    // Navigation
    Tabs: (props)=> (`
        <Tabs
            items={[
                {label: 'test', content:'content-1'}, 
                {label: 'test-2', content:'content-2'},
                {label: 'test-3', content:'content-3'}
            ]}
            ${toJSXProps(props)}
        />
    `),
    Breadcrumbs: (props)=> (`
        <BreadCrumbs
            pathname='home/test/catalog'
            Link={({ href, children }) =>
                <div
                    onClick={() => console.log(href)}
                >
                    {children}
                </div>
            }
            ${toJSXProps(props)}
        />
    `),
    BottomNavigation: (props)=> (`
        <BottomNavigation
            items={[
                { icon: <HomeIcon />, label: 'home' },
                { icon: <Cog8ToothIcon />, label: 'settings' }
            ]}
            ${toJSXProps(props)}
        />
    `),
    Menu: (props)=> (`
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
            ${toJSXProps(props)}
        />
    `),
    Paginator: (props) => (`
        <Paginator
            ${toJSXProps(props)}
        />
    `),

    // data-display
    Avatar: (props)=> (`
        <Avatar
            ${toJSXProps(props)}
        />
    `),
    AvatarGroup: (props)=> (`
        <AvatarGroup
            items={[
                { src: 'https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/superperson@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/gordon@192.webp'},
                { src: 'https://img.daisyui.com/images/profile/demo/batperson@192.webp'},
                { children: '+99' }
            ]}
            ${toJSXProps(props)}
        />
    `),
    Badge: (props)=> (`
        <Badge
            iconLeft={<TrashIcon />}
            ${toJSXProps(props)}
        >
            badge
        </Badge>
    `),
    Flag: (props) => (`
        <Flag
            ${toJSXProps(props)}
        />
    `),
    Indicator: (props) => (`
        <div className='m-5'>
            <Indicator
                className='badge badge-success'
                content={'new'}
                ${toJSXProps(props)}
            >
                <Avatar
                    size='lg'
                    src='https://img.daisyui.com/images/profile/demo/yellingcat@192.webp'
                />
            </Indicator>
        </div>
    `),
    List: (props)=> (`
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
            ${toJSXProps(props)}
        />
    `),
    Progress: (props) => (`
        <Progress
            ${toJSXProps(props)}
        />
    `),
    RadialProgress: (props) => (`
        <RadialProgress
            ${toJSXProps(props)}
        />
    `),
    Spinner: (props) => (`
        <Spinner
            ${toJSXProps(props)}
        />
    `),
    Skeleton: (props) => (`
        <Skeleton
            ${toJSXProps(props)}
        />
    `),

    // tables
    DataTable: (props)=> (`
        <DataTable
            ${toJSXProps(props)}
        />
    `),
    SimpleTable: (props)=> (`
        <SimpleTable
            ${toJSXProps(props)}
        />
    `),

    // feedback
    Modal: (props) => (`
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
        </>`
    ),
    Popover: (props) => (`
        <Popover
            trigger={
                <Button
                    shadow='sm'
                    size='md'
                    color='primary'
                >
                    {props?.isHover ? 'hover my' : 'click my'}
                </Button>
            }
            ${toJSXProps(props)}
        >
            content
        </Popover>
    `),
    Drawer: (props) => (`
        <Drawer
            trigger={
                <Button
                    shadow='sm'
                    size='md'
                    style={{ margin: 3 }}
                    color='primary'
                >
                    {'click my'}
                </Button>
            }
            ${toJSXProps(props)}
        >
            content
        </Drawer>
    `),
    Tooltip: (props)=> (`
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
            ${toJSXProps(props)}
        />
    `),

    // layout
    Divider: (props)=> (`
        <Divider 
            ${toJSXProps(props)}
        />
    `), 
    Splitter: (props) => (`
        <Splitter
            ${toJSXProps(props)}
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
    `),
    Accordion: (props) => (`
        <Accordion
            items={[{
                content: <div>content</div>,
                title: 'title-1'
            }, {
                content: 'content',
                title: 'title-2'
            }
            ]}
            ${toJSXProps(props)}
        />
    `),
    Collapse: (props) => (`
        <Collapse
            ${toJSXProps(props)}
        />
    `),
    Overflow: (props) => (`
        <div style={{width:300, border:'1px solid red'}}>
            <Overflow
                onOverflow={(items)=> console.log('overflow: ', items)}
            >
                <Button
                    shadow='sm'
                    size='sm'
                    style={{ margin: 3 }}
                >
                    button-1
                </Button>
                <Button
                    shadow='sm'
                    style={{ margin: 3 }}
                >
                    button-2
                </Button>
                <Button
                    shadow='sm'
                    size='md'
                    style={{ margin: 3 }}
                >
                    button-3
                </Button>
            </Overflow>
        </div>
    `),

    // media
    Card: (props)=> (`
        <Card
            ${toJSXProps(props)}
        />
    `),
    Promo: (props)=> (`
        <PromoBanner
            ${toJSXProps(props)}
        />
    `),
    VerticalCarousel: (props) => (`
        <VerticalCarousel
            items={[
                { type: 'image', src: 'https://picsum.photos/600/600' },
                { type: 'image', src: 'https://picsum.photos/400/400' },
                { type: 'image', src: 'https://picsum.photos/300/300' },
                { type: 'image', src: 'https://picsum.photos/300/300' }
            ]}
            ${toJSXProps(props)}
        />
    `),
    HorizontalCarousel: (props) => (`
        <HorizontalCarousel
            items={[
                { type: 'image', src: 'https://picsum.photos/600/600' },
                { type: 'image', src: 'https://picsum.photos/400/400' },
                { type: 'image', src: 'https://picsum.photos/300/300' },
                { type: 'image', src: 'https://picsum.photos/300/300' }
            ]}
            ${toJSXProps(props)}
        />
    `),

    // page
    Hero: (props)=> (`
        <Hero
            ${toJSXProps(props)}
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
    `),
    Footer: (props)=> (`
        <Footer
            ${toJSXProps(props)}
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
    `),
    AppBar: (props)=> (`
        <Preview
            ${toJSXProps(props)}
        />
    `),
    Chat: (props)=> (`
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
    `),
    Stat: (props) => (`
        <Stat
            ${toJSXProps(props)}
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
                    <Divider>
                        actions
                    </Divider>
                    <button className="btn btn-xs btn-info btn-outline">one button</button>
                    <button className="btn btn-xs">two button</button>
                </>
            }
        />
    `),
    Box: (props)=> (`
        <Box 
            ${toJSXProps(props)}
        />
    `),
}



export default function Code({ name }) {
    const cache = store.cache.use();
  
    
    return(
        <div className='fixed z-30 bottom-0 w-[85%]'>
            <div className="overflow-y-auto max-h-[20vh]">
                {patterns[name] &&
                    <ShikiHighlighter
                        showLanguage={true}
                        language="tsx"
                        theme="one-dark-pro"
                        className="shadow-sm"
                        delay={100}
                        style={{
                            fontSize: 12,
                            fontFamily: 'JetBrains Mono, monospace',
                        }}
                    >
                        {formatCodeForShiki(patterns[name](cache))}
                    </ShikiHighlighter>
                }
            </div>
        </div>
    );
}