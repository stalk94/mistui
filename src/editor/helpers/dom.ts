export function bruteForceGetCssVariables(): Record<string, string> {
    const testEl = document.createElement('div');
    testEl.style.all = 'initial'; // сбрасываем
    testEl.style.display = 'none';
    document.body.appendChild(testEl);

    const computed = getComputedStyle(testEl);
    const result: Record<string, string> = {};

    for (let i = 0; i < computed.length; i++) {
        const prop = computed[i];
        if (prop.startsWith('--')) {
            result[prop] = computed.getPropertyValue(prop).trim();
        }
    }

    document.body.removeChild(testEl);
    return result;
}

/////////////////////////////////////////////////////////////////////
export function toJSXProps(obj: Record<string, any>): string {
    return Object.entries(obj || {})
        .map(([key, value]) => {
            if (typeof value === 'string') {
                return `${key}="${value}"`; // строки — в кавычки
            } 
            else if (typeof value === 'boolean') {
                return value ? key : ''; // disabled={false} → пропуск
            } 
            else {
                return `${key}={${JSON.stringify(value)}}`; // всё остальное — через {}
            }
        })
        .filter(Boolean)
        .join(' ');
}
export const toLiteral = (value: any): string => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';

    if (typeof value === 'object' && value !== null && '__raw' in value) {
        return value.__raw;
    }
    if (typeof value === 'string') {
        //return '`' + value.replace(/`/g, '\\`') + '`';
        return(JSON.stringify(value))
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
    }

    if (Array.isArray(value)) {
        return `[${value.map(v => toLiteral(v)).join(', ')}]`;
    }

    if (typeof value === 'object') {
        return `{ ${toObjectLiteral(value)} }`;
    }

    return 'undefined'; // fallback
}
export const toObjectLiteral = (obj: any): string => {
    if (typeof obj !== 'object' || obj === null) return '{}';

    return Object.entries(obj)
        .map(([key, value]) => {
            const validKey = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
            return `${validKey}: ${toLiteral(value)}`;
        })
        .join(', ');
}

/////////////////////////////////////////////////////////////////////

export function formatCodeForShikiOld(code: string): string {
    const lines = code
        .replace(/\r\n/g, '\n') // normalize line endings
        .split('\n')
        .map(line => line.trim()) // удалим крайние пробелы
        .filter(line => line !== ''); // уберем пустые строки

    const formatted: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // если это одиночный JSX с пропсами
        const match = line.match(/^<(\w+)\s+([^>]+)>$/);
        if (match) {
            const [, tag, props] = match;

            const propLines = props
                .split(/\s+(?=\w+=)/)
                .map(prop => `  ${prop.trim()}`);

            formatted.push(`<${tag}`);
            formatted.push(...propLines);
            formatted.push(`>`);

            // если следующая строка — children
            if (lines[i + 1] && !lines[i + 1].startsWith('</')) {
                formatted.push(`  ${lines[i + 1].trim()}`);
                i++; // пропускаем обработанную строку
            }

            // закрывающий тег, если есть
            if (lines[i + 1] && lines[i + 1].startsWith('</')) {
                formatted.push(`</${tag}>`);
                i++;
            }

            continue;
        }

        formatted.push(line); // fallback
    }

    return formatted.join('\n');
}
export function formatCodeForShiki(code: string): string {
    const rawLines = code
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(line => line.trim())
        .filter(line => line !== '');

    const result: string[] = [];

    const formatTag = (tagLine: string, indent: string): string[] => {
        const match = tagLine.match(/^<(\w+)([^>]*)(\/?)>$/);
        if (!match) return [indent + tagLine];

        const [, tag, propsRaw, selfClose] = match;
        const props = propsRaw
            .trim()
            .split(/\s+(?=\w+=)/)
            .filter(Boolean)
            .map(p => `${indent}  ${p.trim()}`);

        const lines = [`${indent}<${tag}`];
        lines.push(...props);
        lines.push(`${indent}${selfClose ? '/>' : '>'}`);
        return lines;
    };

    const processBlock = (lines: string[], indentLevel = 0): string[] => {
        const formatted: string[] = [];
        const indent = '  '.repeat(indentLevel);

        while (lines.length) {
            const line = lines.shift()!;
            const openTagMatch = line.match(/^<(\w+)([^>]*)>$/);
            const selfClosingMatch = line.match(/^<(\w+)([^>]*)\/>$/);
            const closeTagMatch = line.match(/^<\/(\w+)>$/);

            if (selfClosingMatch) {
                formatted.push(...formatTag(line, indent));
                continue;
            }

            if (openTagMatch) {
                const [, tag] = openTagMatch;
                const children: string[] = [];

                // Собираем children до </tag>
                while (lines.length && !lines[0].startsWith(`</${tag}`)) {
                    children.push(lines.shift()!);
                }

                formatted.push(...formatTag(line, indent));

                if (children.length) {
                    formatted.push(...processBlock(children, indentLevel + 1));
                }

                // Закрывающий тег
                if (lines[0]?.startsWith(`</${tag}`)) {
                    formatted.push(`${indent}</${tag}>`);
                    lines.shift();
                }

                continue;
            }

            if (closeTagMatch) {
                formatted.push(`${indent}${line}`);
                continue;
            }

            // обычная строка (children текст)
            formatted.push(`${indent}${line}`);
        }

        return formatted;
    };

    return processBlock([...rawLines]).join('\n');
}