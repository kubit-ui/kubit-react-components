import react from '@vitejs/plugin-react';

import fs from 'fs';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import { defineConfig } from 'vite';

const copyRecursiveCSS = (srcDir: string, destDir: string) => {
  fs.mkdirSync(destDir, { recursive: true });

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyRecursiveCSS(srcPath, destPath);
    } else if (entry.name.endsWith('.css')) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: format => `kubit-react-components.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
      name: 'KubitReactComponents',
    },
    minify: 'terser',
    outDir: 'dist',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
        },
        plugins: [
          terser({
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          }),
        ],
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
