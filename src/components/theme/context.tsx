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
	return (
		<ThemeContext.Provider value={theme}>
			{ children }
		</ThemeContext.Provider>
	);
}