export const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'];
export const variants = ['contained', 'outline', 'dash', 'soft', 'ghost', 'link'];
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'auto'];
export const shadows = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const textShadows = ['xs', 'sm', 'md', 'lg', 'xl'];
export const variantsText = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline', 'button']
export const spinerVariants = ['spinner', 'dots' , 'ring', 'ball', 'bars', 'infinity'];
export const variantsSkeleton = ['text', 'circular', 'rectangular', 'rounded']; 


export const baseMeta = {
    children: {
        values: ['string', 'React.ReactNode'],
        type: 'enum',
        description: 'Content inside the component. Can be text or a React element.'
    },
    className: {
        values: ['string'],
        type: 'string',
        description: 'Additional CSS/Tailwind classes for the component.',
    },
    style: {
        values: ['React.CSSProperties'],
        type: 'object',
        description: 'Inline styles applied to the component.',
    },
    size: {
        values: sizes,
        default: 'auto',
        type: 'enum',
        description: 'Specifies the overall size of the component.',
    },
    shadow: {
        values: shadows,
        type: 'enum',
        description: 'Applies a shadow style to the component.',
    },
    color: {
        values: [...colors, 'string'],
        default: 'neutral',
        type: 'enum',
        description: 'The current color theme of the component. Defined through the theme context settings.'
    },
    'aria-label': {
        values: ['string'],
        type: 'string',
        description: 'Description for screen reader (accessibility)'
    }
}

const { children, ...rest } = baseMeta;
export const inputsMeta = {
   ...rest,
    value: {
        values: ['number', 'string'],
        type: 'enum',
        description: 'The current value of the input field.'
    },
    onChange: {
        values: ['function'],
        type: 'func',
        description: 'A function called when a value changes.'
    },
    placeholder: {
        values: ['string'],
        type: 'string',
        description: 'Hint text inside the field.'
    },
    required: {
        values: ['boolean'],
        type: 'boolean',
        description: 'Whether the field is required.'
    }
}


export const variantMeta = {
    variant: {
        values: variants,
        type: 'enum',
        description: 'Controls the visual style like filled, outlined, or link component.',
    }
}
export const orientationMeta = {
    orienattion: {
        values: ["horizontal", "vertical"],
        default: 'horizontal',
        type: 'enum',
        description: 'Component direction: horizontal or vertical.'
    }
}