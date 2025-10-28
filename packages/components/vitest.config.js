import { mergeConfig, defineConfig } from "vite";

import vitConfig from "./vite.config.js";

export default mergeConfig(
  vitConfig,
  defineConfig({
    test: {
      environment: "jsdom",
    },
  })
);
