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
    default: BreacpointsVariants;
    sm: BreacpointsVariants;
    md: BreacpointsVariants;
    lg: BreacpointsVariants;
    xl: BreacpointsVariants;
};
export declare const mixerButtonColor: (color: string, type?: "hover" | "selected") => string;
export declare const mixerButtonBorderColor: (color: string, type?: "hover" | "selected") => string;
export declare const fabrikSizeBreacpoints: (classKye: ClasVariants, config: Combo) => string;
export declare const generateSizes: (sizes: any) => {};
export declare function getContrastingColor(bgColor: string, dark: string, light: string): string;
export declare function deepMerge(target: any, source: any): any;
export {};
