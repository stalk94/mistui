export interface Theme {
    enableEditorMod?: boolean
    shadows: {
        
    }
    autosizes: {
        text: string
        input: string
        btn: string
        textarea: string
        avatar: string
        badge: string
    }
    variants: {
        neutral: string
        primary: string
        secondary: string
        error: string
        success: string
        warning: string
        info: string
    }
    colors: {
        base: string
        input: string
        button: string
    } 
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
            color: React.CSSProperties['color']
            background: React.CSSProperties['backgroundColor']
        }
        table: {
            body: string
            header: string
            thead: string
            border: string
            fontColor: string
            theadFontColor: string
        }
        accordeon: {
            backgroundColor: React.CSSProperties['backgroundColor']
        }
    }
    mixers: {
        button: {
            color: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['color']
            background: (variant?: string, type?: 'hover' | 'selected') => React.CSSProperties['backgroundColor']
        }
    }
    plugins: {
        invert: (color: string)=> string 
        contrast: (color: string)=> string 
        alpha: (color: string, alpha: number)=> string 
    }
}


export const clasesDaisy = {
    colors: ["primary", "secondary", "accent", "neutral", "info", "success", "warning", "error", "base-100", "base-content"],
    utilities: [
        "bg-<color>", 
        "text-<color>", 
        "border-<color>", 
        "ring-<color>", 
        "ring-offset-<color>", 
        "fill-<color>", 
        "stroke-<color>", 
        "placeholder-<color>", 
        "accent-<color>", 
        "divide-<color>", 
        "shadow-<color>", 
        "outline-<color>", 
        "decoration-<color>", 
        "caret-<color>"
    ],
    animate: [
        'animate-none', 
        'animate-spin',     //🔁 Вращение по кругу
        'animate-ping',     //💥 "вспышка" от центра
        'animate-pulse',    //	💓 Пульсирующее затемнение/осветление
        'animate-bounce',   // 🕴 Прыгающий элемент
        'animate-fadeIn'    // ⬛ → ⬜ Плавное появление
    ],
    gradient: [ "from-<color>", "via-<color>", "to-<color>" ],
    radius: [ "rounded-box", "rounded-field", "rounded-selector" ],
    shadows: ["shadow-<color>"],
    outline: ["outline-<color>", "ring-<color>", "ring-offset-<color>"],
    divider: ["divider"],
    list: ["list", "list-row", "list-col-grow", "list-col-wrap"],
    button: [
        "btn", "btn-primary", "btn-secondary", "btn-accent", "btn-info", "btn-success", "btn-warning", 
        "btn-error", "btn-outline", "btn-dash", "btn-soft", "btn-ghost", "btn-neutral"
    ],
    input: [
        "input", "input-ghost", "input-neutral", "input-primary", "input-secondary", 
        "input-accent", "input-info", "input-success", "input-warning", "input-error", "input-xs", "input-sm", 
        "input-md", "input-lg", "input-xl"
    ],
    steps: [
        "steps", "step", "step-icon", "step-neutral", "step-primary", "step-secondary", 
        "step-accent", "step-info", "step-success", "step-warning", "step-error"
    ],
    card: ['card-title', 'card-body', 'card-actions', 'card-border', 'card-dash', 'card-side', 'image-full'],
    menu: ["menu", "menu-title", "menu-dropdown", "menu-dropdown-toggle", "menu-disabled", "menu-active", "menu-focus"],
    modal: ["modal", "modal-box", "modal-action", "modal-backdrop", "modal-toggle", "modal-open", "modal-top"],
    components: [
        "accordion", "alert", "avatar", "badge", "breadcrumbs", "card",
        "calendar", "carousel", "chat", "collapse", "countdown", "diff", "dock", "footer",
        "hero", "indicator", "mask", "pagination", "progress", "radial-progress", "radio", "range",
        "rating", "select", "skeleton", "stack", "stat", "status", "swap", "table", "textarea",
        "timeline", "toast", "toggle", "tooltip", "validator"
    ]
}