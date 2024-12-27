import { View } from "react-native";
import { useForm } from "react-hook-form";

import { Input } from "../../../components/input";
import { Button } from "../../../components/button";
import {
  getGetTodosQueryKey,
  usePostTodos,
} from "../../../http/generated/todos/todos";
import { PostTodosBody } from "../../../http/generated/api.schemas.schemas";
import { queryClient } from "../../../libs/query-client";

export function HomeForm() {
  const { control, handleSubmit, reset } = useForm<PostTodosBody>();
  const mutation = usePostTodos({
    mutation: {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: getGetTodosQueryKey(),
        });
      },
    },
  });

  const onSubmit = async (data: PostTodosBody) => {
    await mutation.mutateAsync({
      data,
    });

    reset();
  };

  return (
    <View className="mb-8 w-full flex-row gap-2 p-4">
      <Input name="title" control={control} />
      <Button onPress={handleSubmit(onSubmit)}>Enviar</Button>
    </View>
  );
}
