/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        "primary": "#f62500",
        "btn" : "#ff6347",
        "input" : "#7E322520",
        "placeholder" : "#7E322550"
      },
      backgroundImage : {
"breadcrumb" : "url(./assets/img/breadcrumb.png)"
      }
    },
  },
  plugins: [],
}

