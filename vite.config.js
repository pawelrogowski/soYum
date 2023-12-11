import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import { VitePWA } from "vite-plugin-pwa";

const manifest = JSON.parse(fs.readFileSync("./public/site.webmanifest", "utf8"));
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    imagetools(),

    VitePWA({
      manifest: manifest,
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{css,html,avif,svg}"],
      },
    }),
  ],
});
