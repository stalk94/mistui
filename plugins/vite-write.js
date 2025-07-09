import fs from 'fs';
import path from 'path';


export default function writeFilePlugin() {
    return {
        name: 'vite-plugin-write',
        configureServer(server) {
            server.middlewares.use('/write-file', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.end('Method Not Allowed');
                    return;
                }

                let body = '';
                req.on('data', (chunk) => (body += chunk));
                req.on('end', () => {
                    try {
                        const { folder = 'public', filename, content, settings } = JSON.parse(body);

                        if (!filename || !content) {
                            res.statusCode = 400;
                            res.end('Invalid request');
                            return;
                        }

                        const dirPath = path.join(process.cwd(), folder);
                        const filePath = path.join(dirPath, filename);

                        if (!fs.existsSync(dirPath)) {
                            fs.mkdirSync(dirPath, { recursive: true });
                        }

                        // ✅ Обработка base64 для изображений и бинарных файлов
                        if (settings?.image || settings?.binary) {
                            const base64Data = content.split(',')[1];
                            fs.writeFileSync(filePath, base64Data, 'base64');
                        } 
                        else {
                            // Текстовые файлы — обычная запись
                            fs.writeFileSync(filePath, content, 'utf8');
                        }

                        res.statusCode = 200;
                        res.end(`/${folder.replace('public/', '')}/${filename}`);
                    } 
                    catch (error) {
                        console.error('❌ Error writing file:', error);
                        res.statusCode = 500;
                        res.end('Error writing file');
                    }
                });
            });
            server.middlewares.use('/list-folders', (req, res) => {
                const basePath = path.join(process.cwd(), 'public', 'blocks');

                try {
                    const scopes = fs.readdirSync(basePath, { withFileTypes: true })
                        .filter((entry) => entry.isDirectory())
                        .map((entry) => entry.name);

                    const result = {};

                    for (const scope of scopes) {
                        const folderPath = path.join(basePath, scope);
                        const files = fs.readdirSync(folderPath)
                            .filter(file => file.endsWith('.json'));

                        result[scope] = files.map(file => {
                            const filePath = path.join(folderPath, file);
                            const content = fs.readFileSync(filePath, 'utf8');
                            return {
                                name: file.replace(/\.json$/, ''),
                                data: JSON.parse(content)
                            };
                        });
                    }

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(result));
                } 
                catch (err) {
                    console.error('❌ Ошибка при чтении:', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Ошибка при чтении папок и файлов' }));
                }
            });
            server.middlewares.use('/list-scopes', (req, res) => {
                const basePath = path.join(process.cwd(), 'public', 'blocks');

                try {
                    const scopes = fs.readdirSync(basePath, { withFileTypes: true })
                        .filter(entry => entry.isDirectory())
                        .map(entry => entry.name);

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(scopes));
                } 
                catch (err) {
                    console.error('❌ Ошибка при чтении папок в public/blocks:', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Ошибка при чтении scope' }));
                }
            });
            server.middlewares.use('/get-index', (req, res) => {
                const basePath = path.join(process.cwd(), 'public', 'export/index.tsx');

                try {
                    const file = fs.readFileSync(basePath, {encoding:'utf-8'});

                    res.setHeader('Content-Type', 'application/json');
                    res.end(file);
                } 
                catch (err) {
                    console.error('❌ Ошибка при чтении:', err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Ошибка при чтении папок и файлов' }));
                }
            });
        },
    };
}