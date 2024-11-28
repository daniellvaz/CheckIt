import { z } from "zod";
import { FastifyInstance } from "fastify";
import { todoService } from "../services/todo.service";

export const todoSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  status: z.enum(["TODO", "DONE"]),
  created_at: z.date(),
  updated_at: z.date(),
});

export default function todoRoutes(app: FastifyInstance) {
  app.get(
    "/todos",
    {
      schema: {
        tags: ["Todos"],
        response: {
          200: z.array(todoSchema),
        },
      },
    },
    todoService.index
  );
  app.get(
    "/todos/:id",
    {
      schema: {
        tags: ["Todos"],
        response: {
          200: todoSchema,
        },
      },
    },
    todoService.findOne
  );
  app.post(
    "/todos",
    {
      schema: {
        tags: ["Todos"],
        body: z.object({
          title: z.string(),
        }),
        response: {
          200: todoSchema,
        },
      },
    },
    todoService.create
  );
  app.patch(
    "/todos/:id",
    {
      schema: {
        tags: ["Todos"],
        body: z.object({ status: z.enum(["TODO", "DONE"]) }),
        response: {
          200: todoSchema,
        },
      },
    },
    todoService.updateStatus
  );
  app.put(
    "/todos/:id",
    {
      schema: {
        tags: ["Todos"],
        body: z.object({ title: z.string() }),
        response: {
          200: todoSchema,
        },
      },
    },
    todoService.update
  );
  app.delete(
    "/todos/:id",
    {
      schema: {
        tags: ["Todos"],
        response: {
          200: z.null(),
        },
      },
    },
    todoService.delete
  );
}
