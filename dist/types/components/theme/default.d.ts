import { CSSProperties } from 'react';
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
declare const variantsColor: {
    neutral: string;
    primary: string;
    secondary: string;
    accent: string;
    error: string;
    success: string;
    warning: string;
    info: string;
};
declare const defaultTheme: {
    enableEditorMod: boolean;
    autosizes: {};
    colors: {
        black: string;
        white: string;
        base: string;
        input: string;
        button: string;
        selected: string;
    };
    variants: {
        neutral: string;
        primary: string;
        secondary: string;
        accent: string;
        error: string;
        success: string;
        warning: string;
        info: string;
    };
    shadows: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    styles: {
        inputLabelTop: CSSProperties;
        input: CSSProperties;
        accordeon: {
            backgroundColor: string;
        };
        tabs: {
            borderColor: string;
        };
        table: {
            body: string;
            header: string;
            thead: string;
            border: string;
            fontColor: string;
            theadFontColor: string;
        };
        appBar: {};
        leftBar: {
            backgroundColor: string;
        };
        button: {
            selectedBackground: string;
        };
        popUp: {};
        modal: {};
    };
    mixers: {
        button: {
            color: (variant?: Varinats, type?: "hover" | "selected") => string;
            background: (variant?: Varinats, type?: "hover" | "selected") => string;
            border: (variant?: Varinats, type?: "hover" | "selected") => string;
        };
    };
    plugins: {
        invert: (color: string) => string;
        contrast: (color: string) => string;
        alpha: (color: string, alpha: number) => string | false;
    };
};
export type Varinats = keyof typeof variantsColor;
export default defaultTheme;
