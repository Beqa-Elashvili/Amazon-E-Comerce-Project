import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendors": ["react", "react-dom"],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
});
