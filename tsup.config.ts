import { defineConfig } from 'tsup';
import fs from 'node:fs';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  onSuccess: async () => {
    fs.copyFileSync('src/theme.css', 'dist/theme.css');
    fs.copyFileSync('src/brands.css', 'dist/brands.css');
  },
});
