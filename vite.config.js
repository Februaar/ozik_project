import react from "@vitejs/plugin-react";
// import ViteSassPlugin from "vite-plugin-sass";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
});
