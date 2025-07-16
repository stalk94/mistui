import { CSSProperties } from 'react';
import  type { Theme } from './types';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";
import namesPlugin from "colord/plugins/names";
extend([namesPlugin, a11yPlugin, mixPlugin]);
import { mixerButtonColor, generateSizes, mixerButtonBorderColor, getContrastingColor } from './helpers';


//////////////////////////////////////////////////////////////////////////
//      default settings          
//////////////////////////////////////////////////////////////////////////
export const fontFamilyVariants = {
    roboto: '--font-family-roboto',
    inter: '--font-family-inter',
    poppins: '--font-family-poppins',
    lato: '--font-family-lato',
    montserrat: '--font-family-montserrat',
    source: '--font-family-source',
    merriweather: '--font-family-merriweather',
    raleway: '--font-family-raleway'
}

const COLORS = {
    black: 'rgb(1, 1, 1)',
    white: 'rgb(255, 255, 255)',
    base: 'rgb(18, 18, 18)',                // основа, фон
    input: 'rgb(65, 65, 65)',               // !
    button: 'rgb(43, 43, 43)',
    selected: 'rgba(255, 255, 255, 0.7)'                        
}
const variantsColor = {
    neutral: 'rgba(43, 43, 43)',
    primary: 'rgba(108, 108, 108, 0.497)',
    secondary: 'rgb(244, 48, 152)',
    accent: 'rgb(0, 211, 187)',
    error: 'rgb(255, 98, 103)',
    success: 'rgb(0, 211, 144)',
    warning: 'rgb(252, 183, 0)',
    info: 'rgb(0, 186, 254)'
}
const typographyVariants = {
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
const sizes = {
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
    }
}



//////////////////////////////////////////////////////////////////////////
//            default theme object            
//////////////////////////////////////////////////////////////////////////
const defaultTheme = {
    enableEditorMod: true,
    autosizes: generateSizes(sizes),
    colors: COLORS,
    variants: variantsColor ,
    shadows: {
        xs: '0 1px 2px 1px rgba(1, 1, 1, 0.1)',
        sm: '0 2px 3px 1px rgba(1, 1, 1, 0.1)',
        md: '0 2px 3px 1px rgba(1, 1, 1, 0.2)',
        lg: '0 3px 4px 1px rgba(1, 1, 1, 0.15)',
        xl: '0 10px 15px -5px rgba(1, 1, 1, 0.2)',
        xxl: '0 10px 15px -5px rgba(1, 1, 1, 0.25)'
    },
    styles: {
        inputLabelTop: <CSSProperties> {
            color: undefined,
            fontFamily: undefined,
            marginLeft: '0%',
            borderBottomColor: undefined,
            marginRight: undefined,
            marginBottom: undefined,
            justifyContent: 'start'
        },
        input: <CSSProperties> {
            backgroundColor: colord(COLORS.base).lighten(0.08).toRgbString(),
            focusOutlineColor: colord(COLORS.base).lighten(0.6).toRgbString(),

            placeholderColor: colord(COLORS.base).lighten(0.4).toRgbString(),
            fontColor: colord(COLORS.base).lighten(0.8).toRgbString(),
            borderColor: colord(COLORS.base).lighten(0.25).toRgbString(),
            borderStyle: 'solid',
            borderWidth: 1,

            radioThumbColor: 'rgb(255, 255, 255)',

            switchBorderColor: colord(COLORS.base).lighten(0.25).toRgbString(),
            switchThumbBorderColor: colord(COLORS.base).lighten(0.25).toRgbString(),
            switchThumbBackgroundColor: colord(COLORS.base).lighten(0.25).toRgbString(),
            switchThumbIconColor: colord(COLORS.base).darken(0.05).toRgbString(),

            sliderTrackColor: 'rgb(169, 169, 169)',
            sliderTrackFillColor: 'rgb(211, 211, 211)',
            sliderTrackHeight: 0.1,
            sliderTrackFillHeight: 0.2,
        },
        accordeon: {
            backgroundColor: colord(COLORS.base).lighten(0.1).toRgbString()
        },
        tabs: {
            borderColor: colord(COLORS.base).lighten(0.1).toRgbString()
        },
        table: {
            body: colord(COLORS.base).lighten(0.1).toRgbString(),
            header: colord(COLORS.base).lighten(0.2).toRgbString(),
            thead: colord(COLORS.base).lighten(0.3).toRgbString(),
            border: colord(COLORS.base).lighten(0.25).toRgbString(),
            fontColor: colord(COLORS.base).lighten(0.8).toRgbString(),
            theadFontColor: 'grey'
        },
        appBar: {

        },
        leftBar: {
            backgroundColor: colord(COLORS.base).lighten(0.1).toRgbString()
        },
        button: {
            selectedBackground: ''
        },
        popUp: {

        },
        modal: {

        }
    },

    mixers: {
        button: {
            color: (variant?: Varinats, type?: 'hover' | 'selected') =>
                colord(mixerButtonColor(variant, type))
                    .alpha(0.6)
                    .toRgbString(),
            background: (variant?: Varinats, type?: 'hover' | 'selected') => mixerButtonColor(variant, type),
            border: (variant?: Varinats, type?: 'hover' | 'selected') => mixerButtonBorderColor(variant, type),
        }
    },
    plugins: {
        /* inversion color */
        invert: (color: string)=> colord(color).invert().toRgbString(),
        contrast: (color: string)=> getContrastingColor(color, COLORS.black, COLORS.white),
        alpha: (color: string, alpha: number)=> colord(color).isValid() && colord(color).alpha(alpha).toRgbString(),
    }
}



export type Varinats = keyof typeof variantsColor;
export default defaultTheme;