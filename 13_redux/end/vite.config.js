import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // プラグイン React, Dynamic Importは不使用なため削除
  plugins: [react()],
  server: {
    // 使用するポート番号の指定 default 5137
    port: 3001,
  },
});
