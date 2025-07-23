import '@/style/index.css';
import '@/style/animate.css';
import "@/style/tailwind.css";
import { PropsWithChildren, useContext, useRef, useState, createContext, useEffect } from 'react';
import { Theme } from './types';
import { defaultTheme } from './default';
import { cs } from '../hooks/cs';
import SafeTailwindClasses from '../../TailwindSafeClasses';


///////////////////////////////////////////////////////////////////////
type ThemeProviderProps = PropsWithChildren<{theme?: Theme}>;
const ThemeContext = createContext<Theme>(defaultTheme);
///////////////////////////////////////////////////////////////////////

export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}

export function createTheme(data: any): Theme {
    const deepMerge = (target: any, source: any) => {
        if (typeof target !== 'object' || typeof source !== 'object') {
            return source;
        }

        const result = { ...target };

        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = deepMerge(target[key], source[key]);
            }
            else {
                result[key] = source[key];
            }
        }

        return result;
    }

	return deepMerge(defaultTheme, data);
}


///////////////////////////////////////////////////////////////////////
const Cache = () => {
    const { styles, colors } = useTheme();

    return (
        <style className='__styles__'>
            {cs(`
                input::placeholder {
                    color: ${styles?.input?.placeholderColor};
                }
                .input-focus {
                    outline-color: ${styles?.input?.borderColor};
	                transition: outline-color 0.8s ease, border-color 0.6s ease;
                }
                .input-focus:focus-within {
                    border-width: 1px;
                    outline-width: 1px;
                    outline-color: ${styles?.input?.focusOutlineColor};
                    border-color: #ffffffb1;
                }
                
                .scrolable::-webkit-scrollbar: {
                    width: "3px";
                    height: "5px";
                },
                .scrolable::-webkit-scrollbar-thumb: {
                    backgroundColor: "#7e7e7e";
                    borderRadius: '7px';
                },
                .scrolable::-webkit-scrollbar-track: {
                    background: "#2e2e2e";
                }
                [data-theme="dark"] {
                    --color-primary: rgb(25, 25, 26);
                    --color-primary-content: rgb(220, 220, 220);
                    --selected: ${colors.selected};
                } 
            `)}
        </style>
    );
}
export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
    //const enable = theme.enableEditorMod;

	return (
		<ThemeContext.Provider value={theme}>
			<Cache />
			{ children }
            <SafeTailwindClasses />
		</ThemeContext.Provider>
	);
}