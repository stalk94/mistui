import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css';  
import React from 'react';
import { createRoot } from 'react-dom/client';
//import { SnackbarProvider } from 'notistack';
import { AlertProvider } from './components/alert';
import SandBox from './editor';
import SafeTailwindClasses from './TailwindSafeClasses';
import { ThemeProvider } from './components/theme';
import './style/index.css';
import './style/animate.css';
import "./style/tailwind.css";



const App = () => {
    return (
        <ThemeProvider>
            <AlertProvider variant='outline'>
                <SandBox />
                <SafeTailwindClasses />
            </AlertProvider>
        </ThemeProvider>
    );
}



//------------------------------------------------------------------------
const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);
