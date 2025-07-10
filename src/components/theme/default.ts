import { CSSProperties } from 'react';
import  type { Theme } from './types';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
extend([a11yPlugin]);

export type Varinats = keyof typeof variantsColor;


const colorPlugins = {
    /* inversion color */
    invert: (color: string)=> colord(color).invert().toRgbString()
}
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


const mixerButtonColor = (variant?: Varinats, type?: 'hover' | 'selected') => {
    const color = variantsColor[variant] ?? (variant ?? variantsColor.neutral);

    if (!type) return color;
    else {
       if (type === 'hover') return colord(color).alpha(0.1).lighten(0.1).toRgbString();
       else return colord(color).alpha(0.2).lighten(0.1).toRgbString();
    }
}


export default {
    enableEditorMod: true,
    sizes: {

    },
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
        button: {
            color:(variant?: Varinats, type?: 'hover' | 'selected')=> 
                colord(mixerButtonColor(variant, type))
                    .grayscale()
                    .toRgbString(),
            background:(variant?: Varinats, type?: 'hover' | 'selected')=> mixerButtonColor(variant, type)
        },
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
    colorPlugins
}