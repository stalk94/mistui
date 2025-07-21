import { ReactNode, Children, isValidElement, cloneElement } from 'react';


/**
 * Рекурсивный обход дерева React элементов
 * @param node ReactNode — любой узел
 * @param callback (el, depth) => void — колбэк на каждый валидный элемент
 * @param depth глубина вложенности (для отладки/настроек)
 */
export default function walkReactTree(
    node: ReactNode,
    callback: (el: React.ReactElement, depth: number) => void,
    depth = 0
) {
    Children.forEach(node, (child) => {
        if (!isValidElement(child)) return;

        callback(child, depth); // вызываем колбэк

        // Рекурсивно обходим потомков
        if (child.props?.children) {
            walkReactTree(child.props.children, callback, depth + 1);
        }
    });
}

export function mapReactTree(
    node: ReactNode,
    callback: (el: React.ReactElement, depth: number) => React.ReactNode,
    depth = 0
): React.ReactNode {
    if (Array.isArray(node)) return node.map((child) => {
        if (!isValidElement(child)) return child;
        if (typeof child.type === 'symbol') return child;
        if (!isValidElement(child)) return child;

        let transformed = callback(child, depth);

        if (isValidElement(transformed) && transformed.props?.children) {
            const newChildren = mapReactTree(transformed.props.children, callback, depth + 1);
            return cloneElement(transformed, { children: newChildren });
        }

        return transformed;
    });
    else Children.toArray(node).map((child) => {
        if (!isValidElement(child)) return child;
        if (typeof child.type === 'symbol') return child;
        if (!isValidElement(child)) return child;

        let transformed = callback(child, depth);

        if (isValidElement(transformed) && transformed.props?.children) {
            const newChildren = mapReactTree(transformed.props.children, callback, depth + 1);
            return cloneElement(transformed, { children: newChildren });
        }
    })
}