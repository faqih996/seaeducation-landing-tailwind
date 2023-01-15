/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
  ["./src/**/*.{html,js}",
    "./public/pages/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        base: 'Poppins, sans-serif',
        label: 'Montserrat, sans-serif',
      },
      fontSize: {
        'heading-1': '48px',
        'heading-2': '36px',
        'heading-3': '24px',
        'heading-4': '18px',
        'heading-5': '14px',
        'heading-6': '12px',
      },
      colors: {
        primary: {
          blue: '#1053B7',
          darkblue: '#1a3475',
          white: '#FFFFFF',
          dark: '#121F3E',
        },
        secondary: {
          orange: '#ff9900',
          yellow: '#EBA41F',
          red: '#EB1F2B',
          green: '#2ED16C',
        },
        white: '#FFFFFF',
        black: '#000000',
        facebook: '#4267B2',
        green: {
          10: '#BFF5C5',
          30: '#ABF5B4',
          50: '#8CF59C',
          70: '#6FF581',
          100: '#2ED16C',
        },
        yellow: {
          10: '#FDF5E8',
          30: '#F9E3BB',
          50: '#F5D18F',
          70: '#F1BF62',
          100: '#EBA41F',
        },
        red: {
          10: '#FDE8E9',
          30: '#F9BBBF',
          50: '#F58F95',
          70: '#F1626A',
          100: '#EB1F2B',
        },
        blue: {
          10: '#E7EDF7',
          30: '#B7CBE9',
          50: '#87A9DB',
          70: '#5786CC',
          100: '#1053B7',
        },
        gray: {
          10: '#E6E6E7',
          30: '#B4B6B9',
          50: '#82868B',
          70: '#50555D',
          100: '#050D18',
        },
      },
    },
  },
  plugins: [
  ],
}
