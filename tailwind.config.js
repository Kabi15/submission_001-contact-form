/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: (theme) => ({
      'pets': "url('https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }),},
  },
  plugins: [],
}
