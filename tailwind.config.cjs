/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "content-primary": "var(--content-primary)",
        "content-secondary": "var(--content-secondary)",
        "content-tertiary": "var(--content-tertiary)",
        "outline-border": "var(--outline-border)"
      },
      fontSize: {
        "small-title": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: 600
          }
        ],
        "body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 400
          }
        ]
      }
    }
  },
  plugins: []
};
