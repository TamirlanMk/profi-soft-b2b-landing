/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/*.{html,js}", "./src/pages/*.{html,js}"],
    theme: {
        colors: {
            transparent: "transparent",
            accent: "#0065F6",
            white: "#FFFFFF",
            black: "#000000",
            'gray-dark': "#5F5F5F",
            'gray-light': "#f5f5f5",
            'gray-lighter': "#F9F9F9",
            'gray-bg': "#f3f3f3",
            'black-dark': "#050505",
        },
        fontFamily: {
            'primary-text': ['"SF UI Text"', 'sans-serif'],
            'primary-display': ['"SF UI Display"', 'sans-serif'],
            'secondary': ['"Lato"', 'sans-serif'],
        },
        container: {
            // you can configure the container to be centered
            center: true,
            // or have default horizontal padding
            padding: '20px',
            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '980px',
                xl: '1200px',
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1240px',
            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [],
};
