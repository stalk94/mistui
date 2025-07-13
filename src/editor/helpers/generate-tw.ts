import { safeTw } from './plugins';


const allSizesClassDaisy =(namesClassDaisy)=> {
    const breakpoints = ['', 'sm', 'md', 'lg', 'xl']; // '' = без breakpoint
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    const combinations: string[] = [];

    for (const className of namesClassDaisy) {
        for (const size of sizes) {
            for (const bp of breakpoints) {
                const prefix = bp ? `${bp}:` : '';
                combinations.push(`${prefix}${className}-${size}`);
            }
        }
    }
    return combinations.join(' ');
}
export const __generate =()=> {
    const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const namesClassDaisy = ['radio', 'input', 'textarea', 'select', 'btn', 'badge', 'divider'];
    const colors = ['primary', 'secondary', 'error', 'accent', 'success', 'warning', 'info'];
    const nameBreacpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
    const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:'];

    // breacpoints
    const classesSize = namesClassDaisy.flatMap(name =>
        nameBreacpoints.map(bp => [`${name}-${bp}`])
    ).flat();
    // системные цвета
    const classesColors = namesClassDaisy.flatMap(name =>
        colors.map(color => [`${name}-${color}`])
    ).flat();
    // autosize
    const classes = breakpoints.flatMap(bp =>
        sizes.map(size => [`${bp}w-${size}`, `${bp}h-${size}`])
    ).flat();

    // any token
    classes.push(
        'top-1', 'top-2', 'top-1 sm:top-1 md:top-2 lg:top-2 xl:top-2', 
        'rotate-180', 'dropdown-hover', 
        'btn-soft', 'btn-info', 'btn-gnost', 'btn-outline btn-dash btn-link btn-circle btn-square',
        'badge-soft', 'badge-gnost badge-outline badge-dash badge-link',
        'divider-start divider-end divider-horizontal divider-vertical'

    );
    const allDaisySizeClass = allSizesClassDaisy(namesClassDaisy);

    safeTw([...classes, ...classesSize, ...classesColors, allDaisySizeClass]);
}

