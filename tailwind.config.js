/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        clay: {
          bg: "#EDF1F2",
          surface: "#F8FAFB",
          ink: "#24323A",
          muted: "#6B7A82",
          mint: {
            DEFAULT: "#5FBFAB",
            dark: "#3FA389",
            light: "#B7E8DC",
          },
          coral: "#FF9E8A",
          cream: "#FFF4E0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "system-ui",
          "PingFang SC",
          "Microsoft YaHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        clay: "0 10px 24px -8px rgba(36,50,58,0.18), inset 0 2px 4px rgba(255,255,255,0.85), inset 0 -6px 12px rgba(36,50,58,0.06)",
        "clay-lg": "0 18px 40px -12px rgba(36,50,58,0.22), inset 0 2px 4px rgba(255,255,255,0.9), inset 0 -10px 20px rgba(36,50,58,0.08)",
        "clay-sm": "0 6px 14px -6px rgba(36,50,58,0.16), inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -3px 6px rgba(36,50,58,0.05)",
        pressed: "0 3px 8px -2px rgba(36,50,58,0.2), inset 0 4px 8px rgba(36,50,58,0.18), inset 0 -1px 2px rgba(255,255,255,0.6)",
        mint: "0 12px 28px -8px rgba(63,163,137,0.45), inset 0 2px 4px rgba(255,255,255,0.5), inset 0 -6px 12px rgba(15,118,110,0.25)",
      },
      borderRadius: {
        clay: "2rem",
        blob: "3rem",
      },
    },
  },
  plugins: [],
};
