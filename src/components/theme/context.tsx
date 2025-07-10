import React, { PropsWithChildren } from 'react';
import { Theme, UseThemeOptions } from './types';
import defaultTheme from './default';

type ThemeProviderProps = PropsWithChildren<{theme?: Theme}>;
const ThemeContext = React.createContext<Theme>(defaultTheme);


export function useTheme(options?: UseThemeOptions) {
	const context = React.useContext(ThemeContext);
	if (context.enableEditorMod) {
		
	}

	return context;
}
export function createTheme(data: object): Theme {
	// ! merge theme
	return data;
}


export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
	const styles = theme.styles;

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
                `}
            </style>

			{ children }
		</ThemeContext.Provider>
	);
}