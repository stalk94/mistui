import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import writeFilePlugin from './plugins/vite-write';
import viteSource from './plugins/vite-source';
import viteSafeTw from './plugins/vite-tw-safe';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path';


export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [
        react(), 
        tailwindcss(), 
        viteSafeTw(), 
        viteSource(), 
        writeFilePlugin(), 
        tsconfigPaths(),
        cssInjectedByJsPlugin()
    ],
    server: {
        port: 3001
    },
    build: {
        outDir: '../dist',
        lib: {
            entry: 'index.ts',
            name: 'mistui',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'cjs', 'umd'], 
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                },
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
            //src: path.resolve(__dirname, 'src'),
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': '{}'
    }
});