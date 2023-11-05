import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, './src/')}`,
            '@assets': `${path.resolve(__dirname, './src/assets/')}`,
            '@pages': `${path.resolve(__dirname, './src/pages/')}`,
            '@components': `${path.resolve(__dirname, './src/components/')}`,
            '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
            '@services': `${path.resolve(__dirname, './src/services/')}`,
            '@routes': `${path.resolve(__dirname, './src/routes/')}`,
            '@config': `${path.resolve(__dirname, './src/config/')}`,
        },
    },
});
