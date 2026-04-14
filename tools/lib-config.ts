import { resolve } from 'path'

import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'

export const createLibConfig = (packageRoot: string) =>
  defineConfig({
    plugins: [dts({ bundleTypes: true })],
    resolve: {
      alias: {
        '@': resolve(packageRoot, 'src'),
      },
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        fileName: 'index',
        entry: resolve(packageRoot, 'src/main.ts'),
      },
    },
  })
