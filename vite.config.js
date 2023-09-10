import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
// import ViteCompressionPlugin from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      template: "sunburst",
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "bundle-size.html",
    }),
    // ViteCompressionPlugin({
    //   algorithm: "brotliCompress",
    // }),
  ],
});
