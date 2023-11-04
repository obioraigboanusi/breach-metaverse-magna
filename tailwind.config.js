/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8311F9',
                    700: '#6215F2',
                    600: '#8311F9',
                    400: '#A940FF',
                    200: '#CF94FF',
                },
                gray: {
                    DEFAULT: '#181818',
                    900: '#181818',
                    600: '#6A6A6A',
                    400: '#B2B2B2',
                    300: '#D6D6D6',
                    200: '#E7E7E7',
                    100: '#C7C4BC', // abstract
                },
            },
        },
    },
    plugins: [],
};
