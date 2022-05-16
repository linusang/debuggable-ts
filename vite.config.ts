import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ...
    include: ["**/*.ts"],
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "*.config.ts",
      "**/*.d.ts",
    ],
  },
});
