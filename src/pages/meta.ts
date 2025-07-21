export const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
export const variants = ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'];
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'auto'];
export const shadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const textShadows = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantsText = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button']


export const baseMeta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Контент внутри компонента. Может быть текстом или React-элементом.'
    },
    className: {
        values: ['string'],
        type: 'string',
        description: 'Дополнительные CSS классы для компонента.',
    },
    style: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Инлайн-стили, применяемые к компоненту.',
    },
    size: {
        values: sizes,
        default: 'auto',
        type: 'enum',
        description: 'Размер компонента.'
    },
    shadow: {
        values: shadows,
        type: 'enum',
        description: 'Размер тени компонента.'
    },
    color: {
        values: [...colors, 'string'],
        default: 'neutral',
        type: 'enum',
        description: 'Цветовая тема компонента.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Описание для screen reader (доступность).'
    }
}

export const variantMeta = {
    variant: {
        values: variants,
        type: 'enum',
        description: 'Вариант текста, определяющий стиль и размер.',
    }
}
export const orientationMeta = {
    orienattion: {
        values: ["horizontal", "vertical"],
        default: 'horizontal',
        type: 'enum',
        description: ''
    }
}