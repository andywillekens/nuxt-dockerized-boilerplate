/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        sm: '1.2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem'
      }
    },
    fontFamily: {
      body: ['Mukta', 'sans-serif'],
      head: ['Poppins', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '1xl': '1.625',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
      '5xl': '3.5rem',
      '7xl': '4.375rem'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      gray: {
        DEFAULT: '#969BA7',
        50: '#f6f6f7',
        100: '#eef0f1',
        200: '#dfe4e6',
        300: '#ccd1d5',
        400: '#b6bcc3',
        500: '#9da4ae',
        600: '#8c929f',
        700: '#797e89',
        800: '#636770',
        900: '#53575c',
        950: '#303136'
      },
      purple: {
        50: '#eeeeff',
        100: '#e0e1ff',
        200: '#c7c8fe',
        300: '#a5a7fc',
        400: '#8184f8',
        500: '#6366f1',
        600: '#4649e5',
        700: '#383bca',
        800: '#3032a3',
        900: '#2e3081',
        950: '#1b1c4b'
      },
      mirage: {
        50: '#f5f7fa',
        100: '#e9edf5',
        200: '#ced9e9',
        300: '#a3b8d6',
        400: '#7294be',
        500: '#5076a7',
        600: '#3e5d8b',
        700: '#334b71',
        800: '#2d415f',
        900: '#2a3850',
        950: '#1c2536'
      },
      green: {
        50: '#edfff9',
        100: '#d5fff4',
        200: '#aeffe8',
        300: '#70ffd8',
        400: '#2bfdc1',
        500: '#00ffb7',
        600: '#00c085',
        700: '#00966b',
        800: '#067557',
        900: '#076049',
        950: '#003728'
      },
      red: {
        DEFAULT: '#ff6161',
        50: '#fff1f1',
        100: '#ffe1e1',
        200: '#ffc7c7',
        300: '#ffa0a0',
        400: '#ff6161',
        500: '#f83b3b',
        600: '#e51d1d',
        700: '#c11414',
        800: '#a01414',
        900: '#841818',
        950: '#480707'
      },
      blue: {
        DEFAULT: '#4a90e2',
        50: '#f1f7fd',
        100: '#dfedfa',
        200: '#c6e0f7',
        300: '#9ecdf2',
        400: '#70b1ea',
        500: '#4a90e2',
        600: '#3978d7',
        700: '#3063c5',
        800: '#2d51a0',
        900: '#29467f',
        950: '#1d2c4e'
      },
      mango: {
        DEFAULT: '#e1801f',
        50: '#fdf8ed',
        100: '#f9eacc',
        200: '#f3d494',
        300: '#edb95e',
        400: '#e8a037',
        500: '#e1801f',
        600: '#c75f18',
        700: '#a54318',
        800: '#873519',
        900: '#6f2d18',
        950: '#3f1509'
      }
    }
  },
  content: [
    'srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    'srcDir/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    'srcDir/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    'srcDir/plugins/**/*.{js,ts,mjs}',
    'srcDir/composables/**/*.{js,ts,mjs}',
    'srcDir/utils/**/*.{js,ts,mjs}',
    'srcDir/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
    'srcDir/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
    'srcDir/app.config.{js,ts,mjs}',
    'srcDir/app/spa-loading-template.html'
  ],
  plugins: []
}
