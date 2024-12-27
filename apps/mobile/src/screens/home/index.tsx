import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";

import { HomeForm } from "./components/form";
import { Todolist } from "./components/todolist";
import { Header } from "../../components/surfaces/header";
import { Footer } from "../../components/surfaces/footer";

import { TodoSkeleton } from "./components/todolist/skeleton";
import { useGetTodos } from "../../http/generated/todos/todos";

export function Home() {
  const { data } = useGetTodos();

  if (!data) {
    return <TodoSkeleton />;
  }

  const todo = data.filter((item) => item.status === "TODO");
  const done = data.filter((item) => item.status === "DONE");

  return (
    <SafeAreaView className="flex-1 bg-zinc-950">
      <StatusBar style="light" />
      <View className="mt-8 flex-1">
        <Header />
        <HomeForm />
        <Todolist title={`Atividas a fazer (${todo.length})`} data={todo} />
        <Todolist title={`Atividas finalizadas (${done.length})`} data={done} />
      </View>
      <Footer />
    </SafeAreaView>
  );
}
