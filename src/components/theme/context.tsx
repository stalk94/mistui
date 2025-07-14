import { PropsWithChildren, useContext, useRef, useState, createContext, useEffect } from 'react';
import { Theme } from './types';
import { deepMerge } from './helpers';
import defaultTheme from './default';
import SafeTailwindClasses from '../../TailwindSafeClasses';

type ThemeProviderProps = PropsWithChildren<{theme?: Theme}>;
type RegistrStylesProps = Record<string, any>;
const ThemeContext = createContext<Theme>(defaultTheme);
const RegistrStyles = createContext<RegistrStylesProps>({});

///////////////////////////////////////////////////////////////////////
export function useTheme() {
	const context = useContext(ThemeContext);
	return context;
}

export function useRegistStyle() {
	const context = useContext(RegistrStyles);
    const prev = useRef(context);
	const [state, dispatch] = useState(context);
	

	// Следим за внешним изменением контекста
	useEffect(() => {
		if (prev.current !== context) {
			prev.current = context;
			dispatch(context);
		}
	}, [context]);


	return [state, dispatch] as const;
}
export function createTheme(data: any): Theme {
	return deepMerge(defaultTheme, data);
}
///////////////////////////////////////////////////////////////////////

const Cache = () => {
    const [state, setState] = useRegistStyle();
    const { styles, colors } = useTheme();

    return (
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
                    --selected: ${colors.selected};
                } 
            `}
        </style>
    );
}

export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
    const enable = theme.enableEditorMod;

	return (
		<ThemeContext.Provider value={theme}>
			<Cache />
			{ children }
            <SafeTailwindClasses />
		</ThemeContext.Provider>
	);
}