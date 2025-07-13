import { colord, extend } from 'colord';
extend([a11yPlugin, mixPlugin]);
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";

/**
    color.lighten(0.2);        // Осветлить на 20%
    color.darken(0.2);         // Затемнить на 20%
    color.brighten(0.2);       // Увеличить яркость
    color.desaturate(0.5);     // Уменьшить насыщенность
    color.saturate(0.5);       // Увеличить насыщенность
    color.grayscale();         // Сделать серым
    color.invert();            // Инвертировать цвет
    color.rotate(90);          // Повернуть оттенок (hue)
    color.mix(color2)
*/

type ClasVariants = 'input' | 'btn' | 'text' | 'avatar';
type BreacpointsVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xs';
type Combo = {
    default: BreacpointsVariants,
    sm: BreacpointsVariants
    md: BreacpointsVariants
    lg: BreacpointsVariants
    xl: BreacpointsVariants
}


export const mixerButtonColor = (color: string, type?: 'hover' | 'selected') => {
    if (!type) return color;
    
    else {
       if (type === 'hover') return colord(color).alpha(0.1).lighten(0.1).toRgbString();
       else return colord(color).alpha(0.2).lighten(0.1).toRgbString();
    }
}
export const mixerButtonBorderColor = (color: string, type?: 'hover' | 'selected') => {
    if (!type) return color;
    
    else {
       if (type === 'hover') return colord(color).alpha(0.1).lighten(0.1).toRgbString();
       else return colord(color).alpha(0.2).lighten(0.1).toRgbString();
    }
}


export const fabrikSizeBreacpoints = (classKye: ClasVariants, config: Combo) => {
    if(classKye === 'avatar') return Object.entries(config).map(([key, value])=> {
        if (key === 'default') return `${value}`;
        else return `${key}:${value}`;
    }).join(' ');

    return Object.entries(config).map(([key, value])=> {
        if (key === 'default') return `${classKye}-${value}`;
        else return `${key}:${classKye}-${value}`;
    }).join(' ');
}

export const generateSizes = (sizes) => {
    const generate = {}
    Object.entries(sizes).map(([key, value])=> {
        const result = fabrikSizeBreacpoints(key, value);
        generate[key] = result;
    });

    return generate;
}

export function getContrastingColor(bgColor: string, dark: string, light: string) {
    const contrastWithBlack = colord(bgColor).contrast(dark);
    const contrastWithWhite = colord(bgColor).contrast(light);

    return contrastWithBlack > contrastWithWhite ? dark : light;
}


export function deepMerge(target: any, source: any): any {
    if (typeof target !== 'object' || typeof source !== 'object') {
        return source;
    }

    const result = { ...target };

    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = deepMerge(target[key], source[key]);
        } else {
            result[key] = source[key];
        }
    }

    return result;
}