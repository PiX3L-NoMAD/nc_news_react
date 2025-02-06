module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        draw: "draw 2s linear forwards",
        fade: "fade 1.5s ease-in-out infinite",
        spin: "spin 2s linear infinite",
      },
      keyframes: {
        draw: {
          "0%": { strokeDasharray: "0 100" },
          "100%": { strokeDasharray: "100 100" },
        },
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        main: '#b8cdfc',
        footer: '#2e2e46',
      },
    },
    plugins: [],
  }
}

