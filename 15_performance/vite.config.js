import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  // プラグイン React, Dynamic Import
  plugins: [react(), dynamicImport()],
  server: {
    // 使用するポート番号の指定 default 5137
    port: 3001,
  },
});
