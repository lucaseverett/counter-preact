import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  base: "./",
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 1 })],
    },
  },
  plugins: [preact()],
  test: {
    coverage: {
      provider: "istanbul",
    },
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests/setup.js",
  },
});
