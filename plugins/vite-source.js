export default function injectSourceVar() {
  return {
    name: 'vite:inject-source-var',
    enforce: 'pre',

    transform(code, id) {
      if (!id.endsWith('.tsx') && !id.endsWith('.ts') && !id.endsWith('.jsx') && !id.endsWith('.js')) return;

      // Пропускаем файлы внутри node_modules
      if (id.includes('/node_modules/')) return;

      // Вставим строку __source = "..."
      const sourceComment = `\nconst __source = ${JSON.stringify(id.replace(process.cwd(), ''))};\n`;

      return {
        code: sourceComment + code,
        map: null,
      };
    },
  };
}