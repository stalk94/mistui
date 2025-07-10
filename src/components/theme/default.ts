import { CSSProperties } from 'react';
import { colord } from 'colord';


export default {
    enableEditorMod: true,
    styles: {
        input: <CSSProperties & {placeholderColor: string, fontColor:string}> {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            placeholderColor: 'gray',
            fontColor: 'white',
            borderColor: colord('rgb(128,128,128)').alpha(0.55).toRgbString()
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
    }
}
