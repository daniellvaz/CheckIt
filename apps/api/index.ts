import path from "node:path";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { writeFile } from "node:fs/promises";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";

import todoRoutes from "./src/routes/todo.routes";
import { env } from "./src/env";

const app = fastify();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Todo list",
      version: "1.0.0",
    },
  },
  transform: jsonSchemaTransform,
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

/**
 * Routes
 */
app.register(todoRoutes);

app
  .listen({ port: env.PORT, host: "0.0.0.0" })
  .then(() => console.log("Server is running"))
  .catch((e) => console.log(e));

app.ready().then(() => {
  const spec = app.swagger();

  writeFile(path.resolve(__dirname, "swagger.json"), JSON.stringify(spec));
});
