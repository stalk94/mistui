import React from 'react';


export const safeOmitInputProps = <T extends Record<string, any>>(props: T, ignoreKeys: string[] = []) => {
    const result: Partial<T> = {};

    for (const key in props) {
        const value = props[key];

        // исключённые по ключам
        if (ignoreKeys.includes(key)) continue;

        // отфильтровать функции, элементы React и символы
        if (typeof value === 'function' || typeof value === 'symbol' || React.isValidElement(value)) continue;

        result[key] = value;
    }

    return result;
}