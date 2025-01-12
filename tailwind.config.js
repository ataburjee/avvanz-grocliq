module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Add other paths where your components are located
  ],
  theme: {
    extend: {
      spacing: {
        "pagination-bottom": "-90px", // Add your custom spacing here
      },
    },
  },
  plugins: [],
};
