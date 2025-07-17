/**
 * вызов vite plugin записи файлов
 * @param folder путь к дерриктории относительно корня проекта
 * @param filename имя файла с разрешением к примеру `test.js`
 * @param content данные
 */
export declare function writeFile(folder: string, filename: string, content: string, settings?: {}): Promise<string>;
export declare function uploadFile(blob: Blob, filename?: string): Promise<string>;
export declare function safeTw(classes: string[]): Promise<void>;
