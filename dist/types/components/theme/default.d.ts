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
export declare function createTheme({ themeSchema, colors, sizes, colorVariants, typographyVariants, shadows }: {
    themeSchema: any;
    colors: any;
    sizes: any;
    colorVariants: any;
    typographyVariants: any;
    shadows: any;
}): {
    theme: any;
    colors: any;
    sizes: any;
    autosizes: {};
    variants: any;
    shadows: any;
    typography: any;
    styles: any;
    plugins: any;
};
export declare const defaultTheme: {
    theme: any;
    colors: any;
    sizes: any;
    autosizes: {};
    variants: any;
    shadows: any;
    typography: any;
    styles: any;
    plugins: any;
};
export type Variants = keyof typeof VARIANTS;
export {};
