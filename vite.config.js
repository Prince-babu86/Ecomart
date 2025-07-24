import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import {pwaPlugin} from './vite.pwa.config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    pwaPlugin,
    tailwindcss()],
  server: {
    host: true,
    // port: "0.0.0.0",
  },
});
