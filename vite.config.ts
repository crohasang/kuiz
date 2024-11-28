import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
//svgr 플러그인 관련 내용 추가(2024/11/24)

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }), svgr(),
  ],
});