import { cloneElement, isValidElement } from 'react';
import clsx from 'clsx';


export function cs(str: string): string {
    return str
        .replace(/\s+/g, ' ')  // все пробелы/переносы → один пробел
        .trim();               // убрать пробелы по краям
}


export function addClass(child: React.ReactNode, newClass: string) {
    if (!isValidElement(child)) return child;

    return cloneElement(child, {
        className: clsx(child.props.className, newClass),
    });
}