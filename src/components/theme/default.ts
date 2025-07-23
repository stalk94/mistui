import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin, a11yPlugin, mixPlugin]);
import { mixerButtonColor, generateSizes, mixerButtonBorderColor, getContrastingColor, isBright } from './helpers';


//////////////////////////////////////////////////////////////////////////
//      default settings constant         
//////////////////////////////////////////////////////////////////////////
export const fontFamilyVariants = {
    'JetBrains Mono': '',
    Ubuntu: '',
    Roboto: '--font-family-roboto',
    Inter: '--font-family-inter',
    Poppins: '--font-family-poppins',
    Lato: '--font-family-lato',
    Montserrat: '--font-family-montserrat',
    Source: '--font-family-source',
    Merriweather: '--font-family-merriweather',
    Raleway: '--font-family-raleway'
}
const TYPOGRAPHY = {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-bold',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-semibold',
    h3: 'text-2xl sm:text-3xl md:text-4xl font-semibold',
    h4: 'text-xl sm:text-2xl md:text-3xl font-medium',
    h5: 'text-lg sm:text-xl md:text-2xl font-medium',
    h6: 'text-base sm:text-lg md:text-xl font-medium',

    subtitle1: 'text-base sm:text-lg text-gray-400',
    subtitle2: 'text-sm sm:text-base text-gray-500',

    body1: 'text-base sm:text-base text-neutral-500',
    body2: 'text-sm sm:text-sm text-neutral-500',

    caption: 'text-xs sm:text-xs text-neutral-600 tracking-normal',
    overline: 'text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 leading-tight',

    button: 'text-sm sm:text-base font-bold uppercase',
}
const COLORS = {
    base: 'rgb(18, 18, 18)',
    selected: 'rgba(255, 255, 255, 0.7)'                        
}
const SIZES = {
    text: {
        default: 'sm',
        sm: 'md',
        md: 'md',
        lg: 'lg',
        xl: 'lg'
    },
    dock: {
        default: 'sm',
        sm:' md',
        md: 'md',
        lg: 'lg', 
        xl: 'lg'
    },
    input: {
        default: 'sm',
        sm:' md',
        md: 'md',
        lg: 'lg', 
        xl: 'lg'
    },
    btn: {
        default: 'sm',
        sm:' md',
        md: 'md',
        lg: 'lg', 
        xl: 'lg'
    },
    textarea: {
        default: 'sm',
        sm:' md',
        md: 'md',
        lg: 'lg', 
        xl: 'lg'
    },
    avatar: {
        default: 'w-12',
        xs: 'w-10',
        sm: 'w-16',
        md: 'w-20',
        lg: 'w-24',
        xl: 'w-32'
    },
    badge: {
        default: 'sm',
        xs: 'sm',
        sm: 'md',
        md: 'md',
        lg: 'lg',
        xl: 'lg'
    },
    table: {
        default: 'sm',
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl'
    },
    divider: {
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3
    }
}
const VARIANTS = {
    primary: 'rgb(255, 255, 255)',                  // rgba(108, 108, 108, 0.497)
    secondary: 'rgb(108, 108, 108)',                 // rgb(244, 48, 152)
    accent: 'rgb(244, 48, 152)',                     // rgb(0, 211, 187)
    success: 'rgb(0, 211, 144)',
    warning: 'rgb(252, 183, 0)',
    error: 'rgb(255, 98, 103)',
    info: 'rgb(0, 186, 254)',
    neutral: 'rgb(60, 60, 60)'                      // rgba(43, 43, 43)
}
const SHADOWS = {
    xs: '0 1px 2px 1px rgba(1, 1, 1, 0.1)',
    sm: '0 2px 3px 1px rgba(1, 1, 1, 0.1)',
    md: '0 2px 3px 1px rgba(1, 1, 1, 0.2)',
    lg: '0 3px 4px 1px rgba(1, 1, 1, 0.15)',
    xl: '0 10px 15px -5px rgba(1, 1, 1, 0.2)',
    xxl: '0 10px 15px -5px rgba(1, 1, 1, 0.25)'
}


//////////////////////////////////////////////////////////////////////////
//            default theme object            
//////////////////////////////////////////////////////////////////////////
export function createTheme({
    colors,
    sizes,
    colorVariants,
    typographyVariants,
    shadows
}) {
    const theme = {
        /** black/white */
        theme: 'dark',
        sizes: sizes,
        autosizes: generateSizes(sizes),
        colors: colors,
        variants: colorVariants,
        shadows: shadows,
        typography: typographyVariants,
        styles: {} as any, // временно
        plugins: {} as any // временно
    };

    theme.styles = {
        input: {
            focusOutlineColor: colord(theme.colors.base).lighten(0.6).toRgbString(),
            fontColor: colord(theme.colors.base).lighten(0.8).toRgbString(),

            sliderTrackColor: 'rgb(169, 169, 169)',
            sliderTrackFillColor: 'rgb(211, 211, 211)',
            sliderTrackHeight: 0.1,
            sliderTrackFillHeight: 0.2,
        },
        tabs: {
            borderColor: colord(theme.colors.base).lighten(0.1).toRgbString()
        },
        table: {
            body: colord(theme.colors.base).lighten(0.1).toRgbString(),
            header: colord(theme.colors.base).lighten(0.2).toRgbString(),
            thead: colord(theme.colors.base).lighten(0.3).toRgbString(),
            border: colord(theme.colors.base).lighten(0.25).toRgbString(),
            fontColor: colord(theme.colors.base).lighten(0.8).toRgbString(),
            theadFontColor: 'grey',
        },
        appBar: {
            backgroundColor: colord(theme.colors.base).lighten(0.15).toRgbString()
        },
        leftBar: {
            backgroundColor: colord(theme.colors.base).lighten(0.1).toRgbString()
        },
        popUp: {},
        modal: {}
    };

    theme.plugins = {
        invert: (color: string) => colord(color).invert().toRgbString(),
        isBright: (color: string, cof?: number)=> isBright(color, cof),
        contrast: (color: string, dark?: string, light?: string) => {
            const defaultDark = theme.theme === 'dark' ? 'black' : 'white';
            const defaultLight = theme.theme === 'dark' ? 'white' : 'black';

            return getContrastingColor(color, (dark ?? defaultDark), (light ?? defaultLight))
        },
        alpha: (color: string, alpha: number) =>
            colord(color).isValid() && colord(color).alpha(alpha).toRgbString(),
        lighten: (color: string, cof: number) =>
            colord(color).lighten(cof).toRgbString(),
        mixers: {
            color: (color, type?: 'hover' | 'selected') =>
                colord(mixerButtonColor(color, type)).alpha(0.6).toRgbString(),
            background: (color, type?: 'hover' | 'selected') =>
                mixerButtonColor(color, type),
            border: (color, type?: 'hover' | 'selected') =>
                mixerButtonBorderColor(color, type),
        }
    };


    return theme;
}


export const defaultTheme = createTheme({
    colors: COLORS, 
    sizes: SIZES, 
    colorVariants: VARIANTS, 
    typographyVariants: TYPOGRAPHY,
    shadows: SHADOWS
});
export type Variants = keyof typeof VARIANTS;