import { faker } from "@faker-js/faker";
import { Todo } from "@prisma/client";
import { client } from "../../src/libs/prisma";

export async function main() {
  const todos: Array<Pick<Todo, "title">> = [];

  for (let i = 0; i < 10; i++) {
    todos.push({
      title: faker.lorem.words(Math.floor(Math.random() * (10 - 15 + 1) + 15)),
    });
  }

  await client.todo.createMany({
    data: todos,
  });
}

main()
  .then(() => console.log("Seed concluded 🌱"))
  .catch((e) => console.log(e.message));
