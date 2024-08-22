import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  define: {
    "process.env": process.env,
=======
  base: "/",
  build: {
    outDir: "client/dist",
>>>>>>> 06b5f8c724f27e6ff28a8a53428c732af972d40a
  },
  base: "/",
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "client/src/data"),
      "@assets": path.resolve(__dirname, "client/src/assets"),
      "@redux": path.resolve(__dirname, "client/src/components/redux"),
      "@slices": path.resolve(__dirname, "client/src/components/redux/slices"),
      "@selectors": path.resolve(
        __dirname,
        "client/src/components/redux/selectors"
      ),
      "@helpers": path.resolve(__dirname, "client/src/helpers"),
      "@routes": path.resolve(__dirname, "client/src/routes"),
      "@footers": path.resolve(__dirname, "client/src/components/footers"),
      "@modals": path.resolve(__dirname, "client/src/components/modals"),
      "@header": path.resolve(__dirname, "client/src/components/header"),
      "@destination": path.resolve(
        __dirname,
        "client/src/components/travels/destination"
      ),
      "@custom-ui": path.resolve(__dirname, "client/src/components/custom-ui"),
    },
  },
  publicDir: path.resolve(__dirname, "client/public"),
});
