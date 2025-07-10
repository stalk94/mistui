export interface Theme {
    enableEditorMod?: boolean
    styles: {
        input?: React.CSSProperties & {
            fontColor?: string
            placeholderColor?: string
        }
    }
}
