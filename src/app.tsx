import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';  
import React from 'react';
import { createRoot } from 'react-dom/client';
//import { SnackbarProvider } from 'notistack';
import { AlertProvider } from './components/alert';
import SandBox from './editor';
import { ThemeProvider } from './components/theme';



const App = () => {
    return (
        <ThemeProvider>
            <AlertProvider variant='outline'>
                <SandBox />
            </AlertProvider>
        </ThemeProvider>
    );
}



//------------------------------------------------------------------------
const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);
