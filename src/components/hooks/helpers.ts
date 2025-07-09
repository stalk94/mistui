import type {  RgbaColor } from 'react-colorful';



export const stringToRgba = (rgbaString: string): RgbaColor => {
    if (typeof rgbaString !== 'string') return { r: 255, g: 0, b: 0, a: 1 };
    const match = rgbaString.match(/rgba?\((\d+), (\d+), (\d+),? ([0-9.]+)?\)/);
    if (!match) return { r: 255, g: 0, b: 0, a: 1 };

    return {
        r: +match[1],
        g: +match[2],
        b: +match[3],
        a: parseFloat(match[4]) || 1,
    };
}
export const rgbaToString = ({ r, g, b, a }: RgbaColor): string => {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
