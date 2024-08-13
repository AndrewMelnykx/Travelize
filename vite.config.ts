import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
      "@routs": path.resolve(__dirname, "client/src/routs"),
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
