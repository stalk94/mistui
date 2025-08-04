export interface Theme {
    theme: 'dark' | 'light';
    autosizes: {
        text: string;
        dock: string;
        input: string;
        btn: string;
        textarea: string;
        avatar: string;
        badge: string;
        table: string;
        divider: string;
        thumb: string;
        radio: string;
        progress: string;
    };
    sizes: {
        [key: string]: {
            default: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    shadows: {
        [key: string]: React.CSSProperties['boxShadow'];
        xs: React.CSSProperties['boxShadow'];
        sm: React.CSSProperties['boxShadow'];
        md: React.CSSProperties['boxShadow'];
        lg: React.CSSProperties['boxShadow'];
        xl: React.CSSProperties['boxShadow'];
        xxl: React.CSSProperties['boxShadow'];
    };
    typography: {
        [key: string]: string;
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
        subtitle1: string;
        subtitle2: string;
        body1: string;
        body2: string;
        caption: string;
        overline: string;
        button: string;
    };
    variants: {
        [key: string]: string;
        neutral: string;
        primary: string;
        secondary: string;
        error: string;
        success: string;
        warning: string;
        info: string;
    };
    colors: {
        base: string;
        selected: string;
    };
    styles: {
        input?: React.CSSProperties & {
            focusOutlineColor?: React.CSSProperties['color'];
            fontColor?: React.CSSProperties['color'];
            placeholderColor?: React.CSSProperties['color'];
            sliderTrackColor?: React.CSSProperties['backgroundColor'];
            sliderTrackHeight?: number;
            sliderTrackFillHeight?: number;
            sliderTrackFillColor?: React.CSSProperties['backgroundColor'];
        };
        button?: {};
        table?: {
            body: string;
            header: string;
            thead: string;
            border: string;
            fontColor: string;
            theadFontColor: string;
        };
        tabs?: {
            borderColor: React.CSSProperties['color'];
        };
        appBar?: {
            backgroundColor: React.CSSProperties['color'];
            borderColor: React.CSSProperties['color'];
        };
        modal?: {
            backgroundColor: React.CSSProperties['color'];
            borderColor: React.CSSProperties['color'];
            borderWidth: number;
        };
        drawer?: {
            backgroundColor: React.CSSProperties['color'];
            borderColor: React.CSSProperties['color'];
        };
        popover?: {
            minWidth: React.CSSProperties['minWidth'];
        };
    };
    plugins: {
        invert: (color: string) => string;
        isBright: (color: string, cof?: number) => boolean;
        contrast: (color: string, dark?: string, light?: string) => string;
        alpha: (color: string, alpha: number) => string;
        lighten: (color: string, cof: number) => string;
        darken: (color: string, cof: number) => string;
        mixers: {
            color: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['color'];
            background: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['backgroundColor'];
        };
    };
    variables: {
        [key: string]: string;
    };
}
export declare const clasesDaisy: {
    colors: string[];
    utilities: string[];
    animate: string[];
    gradient: string[];
    radius: string[];
    shadows: string[];
    outline: string[];
    divider: string[];
    list: string[];
    button: string[];
    input: string[];
    steps: string[];
    card: string[];
    menu: string[];
    modal: string[];
    components: string[];
};
type VariantSize = 'sm' | 'xs' | 'md' | 'lg' | 'xl';
type VariantCoficientSize = number | string;
type SizeElement = {
    default: VariantSize;
    xs: VariantSize;
    sm: VariantSize;
    md: VariantSize;
    lg: VariantSize;
    xl: VariantSize;
};
export type CreateThemeOptions = {
    themeSchema: 'dark' | 'light';
    colors: {
        base: string;
        selected?: string;
    };
    sizes?: {
        text: SizeElement;
        dock: SizeElement;
        input: SizeElement;
        btn: SizeElement;
        textarea: SizeElement;
        badge: SizeElement;
        table: SizeElement;
        /** special */
        avatar: {
            default: VariantCoficientSize;
            xs: VariantCoficientSize;
            sm: VariantCoficientSize;
            md: VariantCoficientSize;
            lg: VariantCoficientSize;
            xl: VariantCoficientSize;
        };
        /** special */
        divider: {
            xs: VariantCoficientSize;
            sm: VariantCoficientSize;
            md: VariantCoficientSize;
            lg: VariantCoficientSize;
            xl: VariantCoficientSize;
        };
    };
    colorVariants?: {
        primary?: string;
        secondary?: string;
        accent?: string;
        success?: string;
        warning?: string;
        error?: string;
        info?: string;
        neutral?: string;
    };
    typographyVariants?: {
        h1?: string;
        h2?: string;
        h3?: string;
        h4?: string;
        h5?: string;
        h6?: string;
        subtitle1?: string;
        subtitle2?: string;
        body1?: string;
        body2?: string;
        caption?: string;
        overline?: string;
        button?: string;
    };
    shadows?: {
        xs?: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
        xxl?: string;
    };
};
export {};
