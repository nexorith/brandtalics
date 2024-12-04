import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       dark: "#14171a",
       primary: "#0aef10",
       secondary: "#00352f",
       seclight: "#85e6db",
       lightbg: "#808080",
       
      
      
      }
    },
  },
  plugins: [],
} satisfies Config;
