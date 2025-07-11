import React from 'react';
import { Select } from 'src/components/inputs';
import SandBox from './SandBox';
import PropsVariator from './config-props';


const daisyThemes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave",
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua",
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk",
  "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim",
  "nord", "sunset"
];




export default function Sand ({  }) {
    const [preview, setPrevew] =  React.useState('Typography');
    const [theme, setTheme] = React.useState('dark');


    return(
        <div 
            data-theme={theme} 
            data-font="roboto"
            className="flex h-screen w-screen main" 
        >
            <aside 
                className="w-[20%] text-white flex flex-col p-4"
                style={{background: 'rgb(58, 58, 58)',boxShadow: "4px 0 5px rgba(0, 0, 0, 0.1)"}}
            >
                <PropsVariator
                    preview={preview}

                />
            </aside>

            <section className='flex flex-col w-[80%]'>
                <nav 
                    className="flex gap-2 w-full"
                    style={{background: 'rgb(54, 54, 54)',boxShadow: "3px 0 4px rgba(0, 0, 0, 0.3)"}}
                >
                    <Select
                        size='sm'
                        value={theme}
                        items={daisyThemes}
                        onChange={setTheme}
                    />
                </nav>

                <SandBox
                    setMode={console.log}
                />
                </section>
        </div>
    );
}