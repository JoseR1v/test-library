/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "primary": "#febe16",
        "secondary": "#052d24",
        "secondary-100": "#052d241A",
        "red": "#e62e1b",
        "red-100": "#e62e1b1A",
        "gray-light": "#f3f3f3"
      },
    },
  },
  plugins: [],
};
