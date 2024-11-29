import { HTMLAttributes } from "react";

import { GetTodos200Item } from "@/http/generated/api.schemas";

import { TodoItem } from "./item";
import { TodoHeading } from "./heading";

export type TodoContainerProps = {
  title: string;
  status: "TODO" | "DONE";
  todos: GetTodos200Item[];
  message?: string;
} & HTMLAttributes<HTMLUListElement>;

export function Todo({
  todos,
  status,
  title,
  children,
  message,
  ...props
}: TodoContainerProps) {
  return (
    <>
      <TodoHeading>
        {title}(
        {todos.filter((item) => item.status === status).length > 0 &&
          todos.filter((item) => item.status === status).length}
        )
      </TodoHeading>
      <ul {...props} className="py-4">
        {todos &&
          todos.filter.length > 0 &&
          todos.filter((item) => item.status === status).length > 0 &&
          todos
            .filter((item) => item.status === status)
            .map((item) => <TodoItem key={item.id} data={item} />)}
        {todos && todos.length > 0}
        {message &&
          todos.filter((item) => item.status === status).length <= 0 && (
            <p className="text-center font-bold text-zinc-700">{message}</p>
          )}
      </ul>
    </>
  );
}
