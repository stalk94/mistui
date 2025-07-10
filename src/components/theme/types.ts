export interface Theme {
    enableEditorMod?: boolean
    styles: {
        input?: React.CSSProperties & {
            focusOutlineColor?: React.CSSProperties['color']
            fontColor?: React.CSSProperties['color']
            placeholderColor?: React.CSSProperties['color']
            checkBoxBackground?: React.CSSProperties['backgroundColor']
            radioThumbColor?: React.CSSProperties['background']
            switchBorderColor?: React.CSSProperties['borderColor']

            switchThumbBorderColor?: React.CSSProperties['borderColor']
            switchThumbBackgroundColor?: React.CSSProperties['backgroundColor']
            switchThumbIconColor?: React.CSSProperties['color']

            sliderTrackColor?: React.CSSProperties['backgroundColor']
            sliderTrackHeight?: number
            sliderTrackFillHeight?: number
            sliderTrackFillColor?: React.CSSProperties['backgroundColor']
            sliderThumbBorderColor?: React.CSSProperties['borderColor']
            sliderThumbBackgroundColor?: React.CSSProperties['backgroundColor']
            sliderThumbHeight?: number
            sliderThumbWidth?: number
        }
        button: {
            color:(variant?: Varinats, type?: 'hover' | 'selected')=> React.CSSProperties['color']
            background:(variant?: Varinats, type?: 'hover' | 'selected')=> React.CSSProperties['backgroundColor']
        }
    }
}
