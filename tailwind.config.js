/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        fontFamily: {
            main: ["Karla", "sans-serif"],
        },
        screens: {
            mobile: "375px",
            desktop: "1440px",
        },
    },
    plugins: [],
};
