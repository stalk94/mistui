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
    const namesClassDaisy = ['radio', 'input', 'textarea', 'select', 'btn'];
    const nameBreacpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
    const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:'];

    //
    const classesSize = namesClassDaisy.flatMap(name =>
        nameBreacpoints.map(bp => [`${name}-${bp}`])
    ).flat();
    //
    const classes = breakpoints.flatMap(bp =>
        sizes.map(size => [`${bp}w-${size}`, `${bp}h-${size}`])
    ).flat();
    //
    classes.push('top-1', 'top-2', 'top-1 sm:top-1 md:top-2 lg:top-2 xl:top-2', 'rotate-180', 'dropdown-hover');
    const allDaisySizeClass = allSizesClassDaisy(namesClassDaisy);

    safeTw([...classes, ...classesSize, allDaisySizeClass]);
}

