/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:           '#1B3A6B',
        'navy-dark':    '#122848',
        'navy-mid':     '#24508a',
        'navy-light':   '#3468b0',
        'gray-cc-50':   '#f7f8fa',
        'gray-cc-100':  '#eef0f4',
        'gray-cc-200':  '#dde1e8',
        'gray-cc-400':  '#8d97a8',
        'gray-cc-500':  '#636e7e',
        'gray-cc-700':  '#2e3a4e',
        'gray-cc-800':  '#1a2332',
        'green-cc':     '#16a34a',
        'green-cc-bg':  '#e8f7ee',
        'orange-cc':    '#d97706',
        'orange-cc-bg': '#fef3e2',
        'blue-cc-bg':   '#eef3ff',
        'blue-cc-sel':  '#dbeafe',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
