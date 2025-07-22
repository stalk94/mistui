const DB_NAME = 'translate-cache';
const STORE_NAME = 'translations';

// Инициализация базы данных
function openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
// Получение из кэша
async function getFromCache(key: string): Promise<string | undefined> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const request = store.get(key);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
// Сохранение в кэш
async function saveToCache(key: string, value: string): Promise<void> {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const request = store.put(value, key);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

// Основная функция перевода
export async function translateText(text: string, targetLang = 'ru'): Promise<string> {
    if (targetLang === 'CN') targetLang = 'zh-CN';
    const cacheKey = `${targetLang}:${text}`;

    // Попытка взять из кэша
    const cached = await getFromCache(cacheKey);
    if (cached) return cached;
    

    // Перевод через Google API
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    const result = await response.json();
    const translated = result[0][0][0];

    // Кладём в кэш
    await saveToCache(cacheKey, translated);

    return translated;
}