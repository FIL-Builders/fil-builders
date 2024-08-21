/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: `#0090FF`,
        secondaryRed: `#FA4747`,
        secondaryYellow: `#FFE05F`,
        white: "#FFFFFF",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        blur: {
          "0%": { filter: "blur(10px)" },
          "100%": { filter: "blur(0)" },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fade: "fade 1.2s forwards",
        slideDown: "slideDown 1.2s forwards",
        slideUp: "slideUp 1.2s forwards",
        slideLeft: "slideLeft 1.2s forwards",
        slideRight: "slideRight 1.2s forwards",
        blur: "blur 1.2s forwards",
        bounce: 'bounce 1s infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom-black-box': '5px 5px 5px 5px black',
      },
    },
  },
  plugins: [],
};
