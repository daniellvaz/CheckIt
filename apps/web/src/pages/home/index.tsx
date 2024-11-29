import { useGetTodos } from "@/http/generated/todos/todos";

import { Todo } from "./components/todo";
import { HomeForm } from "./components/form";
import { HomeContent } from "./components/content";
import { HomeContainer } from "./components/container";
import { TodoListSkeleton } from "./components/todo/skeleton";

export function Home() {
  const { data: todos } = useGetTodos();

  if (!todos) {
    return <TodoListSkeleton />;
  }

  return (
    <HomeContainer>
      <HomeForm />
      <HomeContent>
        <Todo
          todos={todos}
          status="TODO"
          title="Atividades a fazer"
          message="Parabés, vc completou todas as suas tarefas! 😀"
        />
        <Todo
          todos={todos}
          status="DONE"
          title="Atividades realizadas"
          message="Você ainda não completou nenhuma tarefa! ☹️"
        />
      </HomeContent>
    </HomeContainer>
  );
}
