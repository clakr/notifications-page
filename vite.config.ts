import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"
import unoCSS from "unocss/vite

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unoCSS()],
  resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
});