import '@/style/index.css';
import '@/style/animate.css';
import "@/style/tailwind.css";
import { PropsWithChildren } from 'react';
import { Theme } from './types';
type ThemeProviderProps = PropsWithChildren<{
    theme?: Theme;
}>;
type RegistrStylesProps = Record<string, any>;
export declare function useTheme(): Theme;
export declare function useRegistStyle(): readonly [RegistrStylesProps, import("react").Dispatch<import("react").SetStateAction<RegistrStylesProps>>];
export declare function createTheme(data: any): Theme;
export declare function ThemeProvider({ theme, children }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
