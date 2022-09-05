const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './common/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
