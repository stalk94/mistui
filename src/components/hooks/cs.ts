export function cs(str: string): string {
    return str
        .replace(/\s+/g, ' ')  // все пробелы/переносы → один пробел
        .trim();               // убрать пробелы по краям
}