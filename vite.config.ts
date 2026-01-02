import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPath from "vite-tsconfig-paths";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react(), tsConfigPath()],
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "client/dist",
  },
  base: "/",

  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "client/src/assets"),
      "@store": path.resolve(__dirname, "client/src/store"),
      "@slices": path.resolve(__dirname, "client/src/store/slices"),
      "@selectors": path.resolve(__dirname, "client/src/store/selectors"),
      "@helpers": path.resolve(__dirname, "client/src/helpers"),
      "@routes": path.resolve(__dirname, "client/src/routes"),
      "@footers": path.resolve(__dirname, "client/src/components/footers"),
      "@modals": path.resolve(__dirname, "client/src/components/modals"),
      "@header": path.resolve(__dirname, "client/src/components/header"),
      "@destination": path.resolve(__dirname, "client/src/components/travels/destination"),
      "@custom-ui": path.resolve(__dirname, "client/src/components/custom-ui"),
    },
  },
  publicDir: path.resolve(__dirname, "client/public"),
});
