module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                custompurple: '#441C55', // Define your custom color
                customsemipurple: '#743282', // Define another custom color
                customlightpurple: '#B668A1',
                custompink: '#E2A4C6',
                customblue: '#408EC6'
            },
            fontFamily: {
                Poppins: "Poppins",
            },
        },
    },
    plugins: [],
};
