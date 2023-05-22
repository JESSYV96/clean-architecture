/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            blue: "#2F1AC4",
            blueNavy: "#1A0B5B",
            pink: "#FB2E86",
            purple: "#7E33E0",
            pantonePurple: "#E0D3F5",
            grey: "#E5E5E5",
            white: "#FFF"
        },
        container: {
            center: true,
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
};
