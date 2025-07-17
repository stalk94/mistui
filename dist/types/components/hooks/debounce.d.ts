/**
 * Создаёт debounced-функцию с авто-очисткой при размонтировании компонента
 * @param callback Функция, которую нужно debounce-ить
 * @param delay Задержка в миллисекундах
 * @param deps Зависимости useMemo
 * @returns Безопасная debounced-функция
 */
export declare function useDebounced<T extends (...args: any[]) => void>(callback: T, delay: number, deps?: any[]): T;
export declare function debounce<T extends (...args: any[]) => void>(fn: T, delay?: number): T;
