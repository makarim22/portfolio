/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#ffffff",
        "tertiary-container": "#e1e4d2",
        "tertiary-fixed-dim": "#c5c8b7",
        "on-tertiary-fixed": "#191d12",
        "inverse-on-surface": "#2f312b",
        "on-surface-variant": "#c5c9ac",
        "surface-dim": "#12140f",
        "inverse-primary": "#526600",
        "outline": "#8f9378",
        "surface-container-lowest": "#0d0f0a",
        "on-error-container": "#ffdad6",
        "on-primary-container": "#586c00",
        "on-secondary-fixed": "#1a1c1c",
        "surface-bright": "#383a34",
        "on-tertiary": "#2e3226",
        "background": "#12140f",
        "secondary-fixed-dim": "#c6c6c7",
        "error-container": "#93000a",
        "surface-container-high": "#292b25",
        "on-error": "#690005",
        "outline-variant": "#444933",
        "inverse-surface": "#e3e3da",
        "surface": "#12140f",
        "secondary-fixed": "#e2e2e2",
        "primary-container": "#c8f300",
        "tertiary": "#ffffff",
        "surface-tint": "#afd500",
        "on-surface": "#e3e3da",
        "on-tertiary-container": "#626658",
        "error": "#ffb4ab",
        "secondary": "#c6c6c7",
        "primary-fixed": "#c8f300",
        "on-secondary-fixed-variant": "#454747",
        "surface-container-highest": "#343530",
        "on-primary-fixed-variant": "#3d4c00",
        "on-background": "#e3e3da",
        "secondary-container": "#454747",
        "on-secondary": "#2f3131",
        "on-primary-fixed": "#171e00",
        "tertiary-fixed": "#e1e4d2",
        "surface-variant": "#343530",
        "on-primary": "#2a3500",
        "surface-container": "#1e201b",
        "on-secondary-container": "#b4b5b5",
        "on-tertiary-fixed-variant": "#44483b",
        "surface-container-low": "#1a1c17",
        "primary-fixed-dim": "#afd500"
      },
      borderRadius: {
        "DEFAULT": "0rem",
        "lg": "0rem",
        "xl": "0rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "24px",
        "section-gap": "128px",
        "margin-desktop": "64px",
        "base": "8px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-md": ["hankenGrotesk", "sans-serif"],
        "label-caps": ["hankenGrotesk", "sans-serif"],
        "headline-sm": ["anton", "sans-serif"],
        "headline-md": ["anton", "sans-serif"],
        "headline-lg": ["anton", "sans-serif"],
        "display-lg-mobile": ["anton", "sans-serif"],
        "headline-xl": ["anton", "sans-serif"],
        "display-lg": ["anton", "sans-serif"],
        "body-lg": ["hankenGrotesk", "sans-serif"]
      },
      fontSize: {
        "body-md": ["18px", { "lineHeight": "150%", "fontWeight": "400" }],
        "label-caps": ["14px", { "lineHeight": "100%", "letterSpacing": "0.1em", "fontWeight": "700" }],
        "headline-sm": ["24px", { "lineHeight": "110%", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "110%", "fontWeight": "400" }],
        "headline-lg": ["40px", { "lineHeight": "110%", "fontWeight": "400" }],
        "display-lg-mobile": ["64px", { "lineHeight": "95%", "letterSpacing": "-0.02em", "fontWeight": "400" }],
        "headline-xl": ["64px", { "lineHeight": "100%", "letterSpacing": "-0.01em", "fontWeight": "400" }],
        "display-lg": ["120px", { "lineHeight": "90%", "letterSpacing": "-0.04em", "fontWeight": "400" }],
        "body-lg": ["20px", { "lineHeight": "160%", "fontWeight": "400" }]
      }


    },
  },
  plugins: [],
}
