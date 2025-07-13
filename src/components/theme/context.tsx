import React, { PropsWithChildren } from 'react';
import { Theme } from './types';
import { deepMerge } from './helpers';
import defaultTheme from './default';

type ThemeProviderProps = PropsWithChildren<{theme?: Theme}>;
const ThemeContext = React.createContext<Theme>(defaultTheme);


export function useTheme() {
	const context = React.useContext(ThemeContext);
	return context;
}
export function createTheme(data: any): Theme {
	return deepMerge(defaultTheme, data);
}


export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
	const styles = theme.styles;
    const enable = theme.enableEditorMod;

	return (
		<ThemeContext.Provider value={theme}>
			{/* inject базовых стили */}
			 <style className='__styles__'>
                {`
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
                        --selected: #ffffff47;
                    } 
                `}
            </style>

			{ children }
		</ThemeContext.Provider>
	);
}