import '@/style/index.css';
import '@/style/animate.css';
import "@/style/tailwind.css";
import { PropsWithChildren, useContext, createContext } from 'react';
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


///////////////////////////////////////////////////////////////////////
const StyleCache = () => {
    const { styles, colors, variables } = useTheme();


    return (
        <style className='__styles__'>
            {cs(`
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
                    background-color: #7e7e7e;
                    borderRadius: 7px;
                },
                .scrolable::-webkit-scrollbar-track: {
                    background: #2e2e2e;
                }
                
                .selected {
                    background-color: ${colors.selected};
                    border-radius: 3px;
                }
                
                :root {
                    --color-base-100: ${variables.base100};
                    --color-base-200: ${variables.base200};
                    --color-base-300: ${variables.base300};
                    --color-base-400: ${variables.base400};
                }
            `)}
        </style>
    );
}

export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
	return (
		<ThemeContext.Provider value={theme}>
			<StyleCache />
			{ children }
            <SafeTailwindClasses />
		</ThemeContext.Provider>
	);
}