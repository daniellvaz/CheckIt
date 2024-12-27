import { Alert, FlatList, Text, TouchableOpacity } from "react-native";

import { TodolistHeading } from "./heading";
import { TodolistContent } from "./content";
import { TodolistContainer } from "./container";

import { Checkbox } from "../../../../components/checkbox";
import { GetTodos200Item } from "../../../../http/generated/api.schemas.schemas";
import {
  getGetTodosQueryKey,
  useDeleteTodosId,
  usePatchTodosId,
} from "../../../../http/generated/todos/todos";
import { queryClient } from "../../../../libs/query-client";

export type TodolistProps = {
  title: string;
  data: GetTodos200Item[];
};

export function Todolist({ title, data }: TodolistProps) {
  const updateStatusMutation = usePatchTodosId({
    mutation: {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: getGetTodosQueryKey(),
        });
      },
    },
  });

  const deleteTaskMutation = useDeleteTodosId({
    mutation: {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: getGetTodosQueryKey(),
        });
      },
    },
  });

  const onPress = async (id: string, currentStatus: boolean) => {
    if (!currentStatus) {
      Alert.alert("Atenção", "Deseja realmente atualizar a tarefa? 🫣", [
        {
          text: "Atualizar",
          async onPress() {
            await updateStatusMutation.mutateAsync({
              id,
              data: {
                status: "TODO",
              },
            });
          },
        },
      ]);
    } else {
      await updateStatusMutation.mutateAsync({
        id,
        data: {
          status: "DONE",
        },
      });
    }
  };

  const onLongPress = async (id: string, title: string) => {
    Alert.alert(
      "Atenção",
      `Deseja realmente deletar essa tarefa "${title}" ?`,
      [
        {
          text: "Deletar",
          async onPress() {
            await deleteTaskMutation.mutateAsync({
              id,
            });
          },
        },
        {
          text: "Cancelar",
        },
      ]
    );
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
            <TouchableOpacity
              onLongPress={() => onLongPress(item.id, item.title)}
              className="w-full"
            >
              <Text className="text-xl text-zinc-50">{item.title}</Text>
            </TouchableOpacity>
          </TodolistContent>
        )}
      />
    </TodolistContainer>
  );
}
