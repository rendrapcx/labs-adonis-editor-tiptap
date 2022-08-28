/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.{html, edge, js, ts, vue, jsx, tsx}"
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['responsive', 'hover']
  }
}
