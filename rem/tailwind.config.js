module.exports = {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        lg: '0 3px 5px #0009'
      },
      screens: {
        mb: '420px',
        sm: '640px',
        md: '780px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        rem: '#2178f9',
        'rem-color': '#4ce2f8',
        'rem-dark': '#252525',
        'rem-quiet-dark': '#464444',
        'rem-so-dark': '#131313',
        'rem-light': '#f8fcff'
      },
      gridTemplateColumns: {
        lg: 'repeat(minmax(160px, 1fr))'
      }
    }
  },
  plugins: []
}
