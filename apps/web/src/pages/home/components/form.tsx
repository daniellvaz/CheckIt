import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import { PostTodosBody } from "@/http/generated/api.schemas";
import {
  getGetTodosQueryKey,
  usePostTodos,
} from "@/http/generated/todos/todos";
import { useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const schema = z.object({
  title: z
    .string({ message: "O campo título é obrigatório!" })
    .min(3, "Insira pelo menos 3 caracteres!"),
});

export function HomeForm() {
  const onSubmit = async (data: PostTodosBody) => {
    const mutate = usePostTodos();
    const queryClient = useQueryClient();

    await mutate.mutateAsync({
      data,
    });

    await queryClient.invalidateQueries({
      queryKey: getGetTodosQueryKey(),
    });

    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostTodosBody>({
    resolver: zodResolver(schema),
  });

  return (
    <form className="flex gap-4 p-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("title")}
        placeholder="Incluir Atividade"
        error={errors?.title?.message}
      />
      <Button>Enviar</Button>
    </form>
  );
}
