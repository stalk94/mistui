export interface Theme {
    enableEditorMod?: boolean;
    shadows: {};
    autosizes: {
        text: string;
        input: string;
        btn: string;
        textarea: string;
        avatar: string;
        badge: string;
    };
    variants: {
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
        input: string;
        button: string;
    };
    styles: {
        input?: React.CSSProperties & {
            focusOutlineColor?: React.CSSProperties['color'];
            fontColor?: React.CSSProperties['color'];
            placeholderColor?: React.CSSProperties['color'];
            checkBoxBackground?: React.CSSProperties['backgroundColor'];
            radioThumbColor?: React.CSSProperties['background'];
            switchBorderColor?: React.CSSProperties['borderColor'];
            switchThumbBorderColor?: React.CSSProperties['borderColor'];
            switchThumbBackgroundColor?: React.CSSProperties['backgroundColor'];
            switchThumbIconColor?: React.CSSProperties['color'];
            sliderTrackColor?: React.CSSProperties['backgroundColor'];
            sliderTrackHeight?: number;
            sliderTrackFillHeight?: number;
            sliderTrackFillColor?: React.CSSProperties['backgroundColor'];
            sliderThumbBorderColor?: React.CSSProperties['borderColor'];
            sliderThumbBackgroundColor?: React.CSSProperties['backgroundColor'];
            sliderThumbHeight?: number;
            sliderThumbWidth?: number;
        };
        button: {
            color: React.CSSProperties['color'];
            background: React.CSSProperties['backgroundColor'];
        };
        table: {
            body: string;
            header: string;
            thead: string;
            border: string;
            fontColor: string;
            theadFontColor: string;
        };
        accordeon: {
            backgroundColor: React.CSSProperties['backgroundColor'];
        };
    };
    mixers: {
        button: {
            color: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['color'];
            background: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['backgroundColor'];
        };
    };
    plugins: {
        invert: (color: string) => string;
        contrast: (color: string) => string;
        alpha: (color: string, alpha: number) => string;
        lighten: (color: string, cof: number) => string;
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
