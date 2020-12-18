module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  important: false,
  purge: [],
  theme: {
    screens: {
      xsm: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      body: ['Mulish'],
      title: ['Montserrat'],
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },

    extend: {
      colors: {
        primary: '#EB5757',
        second: '#f6f9fc',
        variants: '#783A3A',
        fontT: '#333333',
        fontB: '#4F4F4F',
      },
      fontSize: {
        '9xl': '9rem',
      },
      maxWidth: {
        10: '7rem',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '2days': 'repeat(2, minmax(0, 120px))',
        '3days': 'repeat(3, minmax(0, 120px))',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        2: 'repeat(2, minmax(0, 160px))',
      },
      gridAutoRows: {
        min: 'minmax(0, 160px)',
      },
    },
  },
  variants: {},
  plugins: [],
};
