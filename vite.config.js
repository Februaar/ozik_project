import react from "@vitejs/plugin-react";
import ViteSassPlugin from "vite-plugin-sass";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSassPlugin()],
  server: {
    port: 4000,
  },
});
