import { Buffer } from 'buffer';

/**
 * вызов vite plugin записи файлов 
 * @param folder путь к дерриктории относительно корня проекта
 * @param filename имя файла с разрешением к примеру `test.js`
 * @param content данные
 */
export async function writeFile(folder: string, filename: string, content: string, settings?: {}) {
    const route = window.next ? '/api/write-file' : '/write-file';
    const response = await fetch(route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ folder, filename, content, settings }),
    });

    return response.text();
}

export async function uploadFile(blob: Blob, filename?: string): Promise<string> {
	const route = window.next ? '/api/write-file' : '/write-file';
	const mime = blob.type;
	const ext = mime.split('/')[1] || 'bin';
	const name = filename ?? `file-${Date.now()}.${ext}`;

	const reader = new FileReader();

	return new Promise((resolve, reject) => {
		reader.onload = async (e) => {
			try {
				const base64 = e.target?.result as string; // data:<mime>;base64,...
				const folder = 'public/uploads';

				// ✅ Если Electron доступен
				if (window.electronAPI?.writeFile) {
					// Вырезаем base64 без префикса
					const base64Data = base64.split(',')[1];
					const buffer = Buffer.from(base64Data, 'base64');
					const absPath = await window.electronAPI.writeFile(`public/uploads/${name}`, buffer);
					console.log(absPath)
					if (typeof absPath === 'string') resolve(absPath);			// ! `/uploads/${name}`
					return;
				}

				// 🌐 Fallback на fetch
				const body = JSON.stringify({
					folder,
					filename: name,
					content: base64,
					settings: { image: mime.startsWith('image/'), binary: true },
				});

				const res = await fetch(route, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body,
				});

				if (!res.ok) return reject('Write file failed');
				resolve(`/uploads/${name}`);
			} 
			catch (err) {
				reject(err);
			}
		};

		reader.readAsDataURL(blob); // читаем blob как base64
	});
}

export async function safeTw(classes: string[]) {
	fetch('http://localhost:3001/tailwind-safe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			classGroups: classes,
			outputFile: 'src/generated/TailwindSafeClasses.tsx',
			componentName: 'TailwindSafeClasses'
		})
	});
}