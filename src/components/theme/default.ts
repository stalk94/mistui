import { CSSProperties } from 'react';
import  type { Theme } from './types';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";
extend([a11yPlugin, mixPlugin]);
import { mixerButtonColor, generateSizes, mixerButtonBorderColor } from './helpers';


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
    base: 'rgb(45, 45, 45)',                // основа, фон
    input: 'rgb(65, 65, 65)',               // !
    button: 'rgb(43, 43, 43)',                             
}
const variantsColor = {
    neutral: 'rgba(43, 43, 43)',
    primary: 'rgb(79, 217, 233)',
    secondary: '',
    error: '',
    success: '',
    warning: '',
    info: ''
}
const sizes = {
    text: {
        default: 'sm',
        sm: 'base',
        md: 'base',
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
    }
}



//////////////////////////////////////////////////////////////////////////
//            default theme object            
//////////////////////////////////////////////////////////////////////////
const defaultTheme = {
    enableEditorMod: true,
    autosizes: generateSizes(sizes),
    colors: COLORS,
    shadows: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
        'xxl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
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

            checkBoxBackground: 'inherit',
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
        leftBar: {
            backgroundColor: colord(COLORS.base).lighten(0.1).toRgbString()
        },
        button: {
            neutral: 'rgb(43, 43, 43)',
            primary: 'rgb(79, 217, 233)',
            secondary: '',
            error: '',
            success: '',
            warning: '',
            info: ''
        }
    },

    mixers: {
        button: {
            color: (variant?: Varinats, type?: 'hover' | 'selected') =>
                colord(mixerButtonColor(variant, type))
                    .grayscale()
                    .toRgbString(),
            background: (variant?: Varinats, type?: 'hover' | 'selected') => mixerButtonColor(variant, type),
            border: (variant?: Varinats, type?: 'hover' | 'selected') => mixerButtonBorderColor(variant, type),
        }
    },
    colorPlugins: {
        /* inversion color */
        invert: (color: string)=> colord(color).invert().toRgbString()
    }
}



export type Varinats = keyof typeof variantsColor;
export default defaultTheme;