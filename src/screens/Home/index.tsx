import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Card from "../../components/Card";

const todoMock = [
  {
    id: 1,
    name: "Estudar React",
    selected: false,
  },
  {
    id: 2,
    name: "Ir na academia",
    selected: false,
  },
] as TodoProps[];

type TodoProps = {
  id: number;
  name: string;
  selected: boolean;
};

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>(todoMock);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <SafeAreaView style={{ padding: 20 }}>
        <FlatList data={todoList} renderItem={({ item: tod }) => <Card />} />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
