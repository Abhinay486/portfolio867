/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        },
      },
      animation: {
        typing: 'typing 3s steps(7, end) forwards, blink 0.75s step-end infinite',
      },
    },
  },
  plugins: [],
};

