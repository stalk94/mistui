import { colord, extend } from 'colord';
extend([a11yPlugin, mixPlugin]);
import a11yPlugin from 'colord/plugins/a11y';
import mixPlugin from "colord/plugins/mix";
console.log(colord('rgb(79, 217, 233)'))
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

type ClasVariants = 'input' | 'btn' | 'text';
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
    return Object.entries(config).map(([key, value])=> {
        if (key === 'default') return `${classKye}-${value}`;
        else return `${key}:${classKye}-${value}`;
    }).join(' ');
}