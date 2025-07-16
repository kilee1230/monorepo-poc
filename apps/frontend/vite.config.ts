import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/frontend',
  plugins: [react()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/frontend',
      provider: 'v8' as const,
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        'src/**/*.spec.{ts,tsx,js,jsx}',
        'src/**/*.test.{ts,tsx,js,jsx}',
        'src/**/index.ts',
        'src/main.tsx',
      ],
      reporter: ['html', 'lcov', 'text-summary', 'clover'],
      thresholds: {
        branches: 0,
        functions: 80,
        lines: 8,
        statements: 8,
      },
    },
  },
}));
