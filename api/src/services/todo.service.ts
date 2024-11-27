import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";

import { client } from "../libs/prisma";

import { todoSchema } from "../routes/todo.routes";

export const todoService = {
  async index(request: FastifyRequest, reply: FastifyReply) {
    const todos = await client.todo.findMany();

    return reply.status(200).send(todos);
  },

  async findOne(
    request: FastifyRequest<{
      Params: Pick<z.infer<typeof todoSchema>, "id">;
    }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const todo = await client.todo.findUniqueOrThrow({ where: { id } });

    return reply.status(201).send(todo);
  },

  async create(
    request: FastifyRequest<{
      Body: Pick<z.infer<typeof todoSchema>, "title">;
    }>,
    reply: FastifyReply
  ) {
    const data = request.body;
    const todo = await client.todo.create({ data });

    return reply.status(201).send(todo);
  },

  async updateStatus(
    request: FastifyRequest<{
      Params: Pick<z.infer<typeof todoSchema>, "id">;
      Body: Pick<z.infer<typeof todoSchema>, "status">;
    }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const { status } = request.body;

    const todo = await client.todo.update({
      data: {
        status,
      },
      where: {
        id,
      },
    });

    return reply.status(200).send(todo);
  },

  async update(
    request: FastifyRequest<{
      Params: Pick<z.infer<typeof todoSchema>, "id">;
      Body: Pick<z.infer<typeof todoSchema>, "title">;
    }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;
    const { title } = request.body;

    const todo = await client.todo.update({
      data: {
        title,
      },
      where: {
        id,
      },
    });

    return reply.status(200).send(todo);
  },

  async delete(
    request: FastifyRequest<{
      Params: Pick<z.infer<typeof todoSchema>, "id">;
    }>,
    reply: FastifyReply
  ) {
    const { id } = request.params;

    await client.todo.delete({
      where: {
        id,
      },
    });

    return reply.status(200).send(null);
  },
};
