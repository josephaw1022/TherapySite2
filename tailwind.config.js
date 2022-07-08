module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: { 
    themes: ['dark', 'light'],
  }, 
  safelist: [
    {
      pattern: /./
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}