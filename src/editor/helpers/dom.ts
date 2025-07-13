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