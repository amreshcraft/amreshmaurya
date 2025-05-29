/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // important!
  content: [
    './src/**/*.{html,js,svelte,ts}' // include all SvelteKit routes/components
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          system1: 'var(--system-gray1)',
          system2: 'var(--system-gray2)',
          system3: 'var(--system-gray3)',
          system4: 'var(--system-gray4)',
          system5: 'var(--system-gray5)',
          system6: 'var(--system-gray6)'
        }
      }
    }
  },
  plugins: [import('@tailwindcss/typography')]
}
