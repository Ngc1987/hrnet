module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 0 1px 1px #fff, 0 0 3px 3px #fff, 0 0 5px 5px #fff',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 0 5px 5px #fff, 0 0 15px 15px #fff, 0 0 25px 25px #fff',
        '2xl': '0 0 3px 3px #6d840e, 0 0 6px 6px #6d840e, 0 0 9px 9px #6d840e',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 0 3px 3px #6d840e, 0 0 6px 6px #6d840e, 0 0 9px 9px #6d840e',
        none: 'none',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '750px',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '700px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        green: {
          light: '#93ad18',
          DEFAULT: '#6d840e',
          dark: '#5d7125',
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1',
        },
        gray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        }
      },
      fontFamily: {
        Rampart: ["EB Garamond", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
