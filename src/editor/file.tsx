const openBtn = document.getElementById('open');
const fileList = document.getElementById('file-list');

const dbName = 'folder-access';
const storeName = 'handles';


async function saveHandle(handle) {
    const db = await openDB();
    const tx = db.transaction(storeName, 'readwrite');
    tx.objectStore(storeName).put(handle, 'dir');
    await tx.done;
}
async function getSavedHandle() {
    const db = await openDB();
    const tx = db.transaction(storeName, 'readonly');
    const handle = await tx.objectStore(storeName).get('dir');
    await tx.done;
    return handle;
}

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = () => {
            request.result.createObjectStore(storeName);
        };
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}
async function verifyPermission(handle) {
    const options = { mode: 'readwrite' };
    if ((await handle.queryPermission(options)) === 'granted') return true;
    if ((await handle.requestPermission(options)) === 'granted') return true;
    return false;
}
async function readFiles(dirHandle) {
    fileList.innerHTML = '';
    for await (const [name, handle] of dirHandle.entries()) {
        if (handle.kind === 'file') {
            const file = await handle.getFile();
            const li = document.createElement('li');
            li.textContent = `${name}: ${await file.text()}`;
            fileList.appendChild(li);
        }
    }
}

openBtn.onclick = async () => {
    const dirHandle = await window.showDirectoryPicker();
    if (await verifyPermission(dirHandle)) {
        await saveHandle(dirHandle);
        await readFiles(dirHandle);
    }
};

// Авто-загрузка при старте
(async () => {
    const saved = await getSavedHandle();
    if (saved && await verifyPermission(saved)) {
        await readFiles(saved);
    }
})();