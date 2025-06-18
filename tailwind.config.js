/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 4px 6px rgba(100,100,0,0.5)', // NativeWind will try to parse this
      },
    },
  },
  plugins: [],
};
