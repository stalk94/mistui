import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Introduction from './editor/page/introduction';
import Install from './editor/page/install';
import { AlertProvider } from './components/alert';
import SandBoxRoot from './editor';
import SandBox from './editor/Render';
import { ThemeProvider } from './components/theme';
import { AppBar, Collapse, Divider, IconButton, Select, Typography, OrgChart } from './index';
import { createStore } from 'statekit-lite';
import ComponentsRoot from './editor/page/root-components';
import Home from './editor/page';
import NotFound from './editor/page/error';
import Present from './presentation';


const IconComponent = () => (
    <svg 
        className="mt-[1px] mr-1" 
        width="16" 
        height="16" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M20 29H6V43H20V29Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path><path d="M24 4L34 21H14L24 4Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path>
        <path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="bevel"></path>
    </svg>
);
const CheckBox = ({onChange}) => (
    <IconButton variant='ghost' size='sm' className='mr-3'>
        <label className="swap swap-rotate">
            <input type="checkbox" onChange={(e)=> onChange(e.target.checked ? 'light' : 'dark')} />

            <svg
                className="swap-on h-4 mt-[2px] fill-yellow-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
                className="swap-off h-4 mt-[1px] fill-[silver]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
        </label>
    </IconButton>
);
globalThis.globalStore = createStore({
    lang: 'en',
    select: undefined
}, {
    persist: { key: 'global' }
});



const App = () => {
    const [theme, setTheme] = React.useState('dark');


    return (
        <ThemeProvider>
            <AlertProvider variant='outline'>
                <BrowserRouter>
                    <div
                        //data-theme={theme}
                        className="w-screen"
                        style={{fontFamily: 'JetBrains Mono'}}
                    >
        
                        <Routes>
                            <Route path="/" key={location.pathname} element={<SandBoxRoot />} >
                                <Route index element={<Home />} />
                                <Route path="install" element={<Install />} />
                                <Route path="introduction" element={<Introduction />} />
                            </Route>
                            <Route path="present" element={<Present />} />

                            <Route path="/components" key={location.pathname} element={<SandBoxRoot />} >
                                <Route index element={<ComponentsRoot/>} />
                                <Route path=":componentName" element={<SandBox />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        
                    </div>
                </BrowserRouter>
            </AlertProvider>
        </ThemeProvider>
    );
}
const Test = () => {

    return (
        <ThemeProvider>
            <AlertProvider variant='outline'>
                <div
                    //data-theme={theme}
                    className="w-screen"
                    style={{ fontFamily: 'JetBrains Mono' }}
                >
                    <OrgChart

                    />
                </div>
            </AlertProvider>
        </ThemeProvider>
    );
}

//------------------------------------------------------------------------
const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);
