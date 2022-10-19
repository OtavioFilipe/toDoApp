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
  {
    id: 3,
    name: "Estudar funcionalidades",
    selected: false,
  },
] as TodoProps[];

export type TodoProps = {
  id: number;
  name: string;
  selected: boolean;
};

const Home: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>(todoMock);

  function onChangeStatusToDelete(id: number) {
    setTodoList((oldState) => oldState.filter((todo) => todo.id !== id));
  }

  function onChangeStatusToCheck(id: number) {
    setTodoList((oldState) =>
      oldState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            selected: true,
          };
        } else {
          return todo;
        }
      })
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fafafa" }}>
      <SafeAreaView style={{ padding: 20 }}>
        <FlatList
          data={todoList}
          renderItem={({ item: todo }) => (
            <Card
              data={todo}
              onChangeStatusToDelete={onChangeStatusToDelete}
              onChangeStatusToCheck={onChangeStatusToCheck}
            />
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
