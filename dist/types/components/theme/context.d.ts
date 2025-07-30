import '@/style/index.css';
import '@/style/animate.css';
import "@/style/tailwind.css";
import { PropsWithChildren } from 'react';
import { Theme } from './types';
type ThemeProviderProps = PropsWithChildren<{
    theme?: Theme;
}>;
export declare function useTheme(): Theme;
export declare function ThemeProvider({ theme, children }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
