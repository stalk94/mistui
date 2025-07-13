import { colord } from 'colord';


export function createGradientStyle(
    baseColor: string,
    direction: 'to right' | 'to left' | 'to top' | 'to bottom' | string = 'to right'
): React.CSSProperties {
    const base = colord(baseColor);

    const lighter = base.lighten(0.65).alpha(0.4).toHex();
    const darker = base.lighten(0.5).alpha(0.4).toHex();

    return {
        backgroundImage: `linear-gradient(${direction}, ${lighter}, ${baseColor}, ${darker})`,
    };
}
