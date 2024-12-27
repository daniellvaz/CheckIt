import { Alert, FlatList, Text } from "react-native";

import { TodolistHeading } from "./heading";
import { TodolistContent } from "./content";
import { TodolistContainer } from "./container";

import { Checkbox } from "../../../../components/checkbox";
import { GetTodos200Item } from "../../../../http/generated/api.schemas.schemas";
import {
  getGetTodosQueryKey,
  usePatchTodosId,
} from "../../../../http/generated/todos/todos";
import { queryClient } from "../../../../libs/query-client";

export type TodolistProps = {
  title: string;
  data: GetTodos200Item[];
};

export function Todolist({ title, data }: TodolistProps) {
  const mutation = usePatchTodosId({
    mutation: {
      onSuccess(id) {
        Alert.alert("Sucesso", "Tarefa atualizada com sucesso!");

        queryClient.invalidateQueries({
          queryKey: getGetTodosQueryKey(),
        });
      },
    },
  });

  const onPress = async (id: string, currentStatus: boolean) => {
    await mutation.mutateAsync({
      id,
      data: {
        status: currentStatus ? "DONE" : "TODO",
      },
    });
  };

  return (
    <TodolistContainer>
      <TodolistHeading>{title}</TodolistHeading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TodolistContent>
            <Checkbox
              defaultValue={item.status === "DONE"}
              onPress={(status) => onPress(item.id, status)}
            />
            <Text className="text-zinc-50">{item.title}</Text>
          </TodolistContent>
        )}
      />
    </TodolistContainer>
  );
}
