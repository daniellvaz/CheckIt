import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";

import Card from "./components/card";

import Logo from "./assets/horizontal.svg";

import {
  getGetTodosQueryKey,
  useGetTodos,
  usePostTodos,
} from "./http/generated/todos/todos";

import { PostTodosBody } from "./http/generated/api.schemas";

function App() {
  const mutate = usePostTodos();
  const queryClient = useQueryClient();
  const { data: todos } = useGetTodos();
  const { register, handleSubmit, reset } = useForm<PostTodosBody>();

  const onSubmit = async (data: PostTodosBody) => {
    await mutate.mutateAsync({
      data,
    });

    await queryClient.invalidateQueries({
      queryKey: getGetTodosQueryKey(),
    });

    reset();
  };

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-50">
      <div className="mb-8 flex w-full items-center justify-center p-4">
        <img src={Logo} alt="CheckIt" width={300} />
      </div>
      <main className="m-auto w-full max-w-4xl">
        <form className="flex gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title")}
            placeholder="Incluir atividade"
            className="w-full rounded border border-zinc-800 bg-zinc-900 p-2 outline-lime-500 placeholder:text-zinc-500"
          />
          <button className="hover: rounded bg-lime-500 px-4 py-2 transition-colors hover:bg-lime-700">
            Enviar
          </button>
        </form>
        <hr className="border border-zinc-900" />
        <div className="p-4">
          <div>
            <h2 className="mb-8 text-2xl font-bold">
              Atividades a fazer(
              {todos?.filter((item) => item.status === "TODO").length})
            </h2>
            <ul>
              {todos &&
                todos?.filter.length > 0 &&
                todos.filter((item) => item.status === "TODO").length > 0 &&
                todos
                  .filter((item) => item.status === "TODO")
                  .map((item) => <Card key={item.id} data={item} />)}
              {todos &&
                todos.length > 0 &&
                todos.filter((item) => item.status === "TODO").length <= 0 && (
                  <p className="text-center font-bold text-zinc-700">
                    Parabés, vc completou todas as suas tarefas
                  </p>
                )}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="mb-8 text-2xl font-bold">
              Atividades Finalizadas (
              {todos?.filter((item) => item.status === "DONE").length})
            </h2>
            <ul>
              {todos &&
                todos
                  .filter((item) => item.status === "DONE")
                  .map((item) => <Card key={item.id} data={item} />)}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
