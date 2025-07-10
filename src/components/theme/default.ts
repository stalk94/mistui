import { CSSProperties } from 'react';
import  type { Theme } from './types';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";
extend([a11yPlugin, mixPlugin]);
import { mixerButtonColor, fabrikSizeBreacpoints, mixerButtonBorderColor } from './helpers';


//////////////////////////////////////////////////////////////////////////
//      default settings          
//////////////////////////////////////////////////////////////////////////
const variantsColor = {
    neutral: 'rgba(255, 255, 255, 0.05)',
    primary: 'rgb(79, 217, 233)',
    secondary: '',
    error: '',
    success: '',
    warning: '',
    info: ''
}
const mixins = {
    baseConetentColor: 'rgba(255, 255, 255, 0.05)',
    buttonColor: 'rgb(255, 255, 255)',
    inputBorderColor: colord('rgb(128,128,128)').alpha(0.55).toRgbString(),
    thumbs: colord('rgb(128,128,128)').alpha(0.8).toRgbString()
}
const sizes = {
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
    sizes: sizes,
    styles: {
        input: <CSSProperties> {
            focusOutlineColor: colord(mixins.inputBorderColor).lighten(1).toRgbString(),

            backgroundColor: mixins.baseConetentColor,
            placeholderColor: 'gray',
            fontColor: 'white',
            borderColor: mixins.inputBorderColor,
            borderStyle: 'solid',
            borderWidth: 1,

            checkBoxBackground: 'inherit',

            radioThumbColor: 'rgb(255, 255, 255)',

            switchBorderColor: mixins.inputBorderColor,
            switchThumbBorderColor: mixins.inputBorderColor,
            switchThumbBackgroundColor: mixins.thumbs,
            switchThumbIconColor: 'rgba(27, 18, 18, 1)',

            sliderTrackColor: 'darkgrey',
            sliderTrackHeight: 0.1,
            sliderTrackFillColor: 'lightgray',
            sliderTrackFillHeight: 0.2,
        },
        button: variantsColor,
        inputLabelTop: <CSSProperties> {
            color: undefined,
            fontFamily: undefined,
            marginLeft: '0%',
            borderBottomColor: undefined,
            marginRight: undefined,
            marginBottom: undefined,
            justifyContent: 'start'
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