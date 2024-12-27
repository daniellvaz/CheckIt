import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "../api/swagger.json",
    output: {
      clean: true,
      client: "react-query",
      baseUrl: "http://192.168.104.65:3333",
      target: "./src/http/generated/api.schemas.ts",
      mode: "tags-split",
      override: {
        mutator: {
          path: "./src/libs/axios.ts",
        },
      },
    },
  },
});
