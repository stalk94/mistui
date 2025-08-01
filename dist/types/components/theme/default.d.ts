import type { CreateThemeOptions } from './types';
export declare const fontFamilyVariants: {
    'JetBrains Mono': string;
    Ubuntu: string;
    Roboto: string;
    Inter: string;
    Poppins: string;
    Lato: string;
    Montserrat: string;
    Source: string;
    Merriweather: string;
    Raleway: string;
};
declare const VARIANTS: {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    neutral: string;
};
export declare function createTheme({ themeSchema, colors, sizes, colorVariants, typographyVariants, shadows }: CreateThemeOptions): {
    theme: "dark" | "light";
    colors: {
        base: string;
        selected: string;
    };
    sizes: {};
    autosizes: {};
    variants: any;
    shadows: any;
    typography: any;
    styles: any;
    plugins: any;
    variables: any;
};
export declare const defaultTheme: {
    theme: "dark" | "light";
    colors: {
        base: string;
        selected: string;
    };
    sizes: {};
    autosizes: {};
    variants: any;
    shadows: any;
    typography: any;
    styles: any;
    plugins: any;
    variables: any;
};
export type Variants = keyof typeof VARIANTS;
export {};
