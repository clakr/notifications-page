import { defineConfig, presetWebFonts, presetWind } from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetClark from "./presetClark";

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Plus Jakarta Sans:500,700,800",
      },
    }),
    presetClark(),
  ],
  transformers: [transformerVariantGroup()],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () =>
        ":root { font-size: 62.5%; font-family: 'Plus Jakarta Sans'; }",
    },
  ],
  theme: {},
  shortcuts: {},
  rules: [],
  safelist: ["sr-only"],
});
