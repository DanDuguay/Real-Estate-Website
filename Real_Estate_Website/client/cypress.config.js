import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
