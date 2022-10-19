import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Alert, Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { TodoProps } from "../../screens/Home";

import * as Styles from "./styles";

type CardProps = {
  data: TodoProps;
};

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  const swipeableRef = useRef<Swipeable>(null);

  function handleDelete() {
    Alert.alert("Remover item", "Você tem certeza que quer remover?", [
      {
        text: "Não",
        onPress: () => swipeableRef.current?.close(),
      },
      {
        text: "Sim",
        onPress: () => {
          //onChangeStatusToDelete(id)
        },
      },
    ]);
  }

  function handleSuccess() {
    Alert.alert("Confirmar", "Você tem certeza que deseja confirmar?", [
      {
        text: "Não",
        onPress: () => swipeableRef.current?.close(),
      },
      {
        text: "Sim",
        onPress: () => {
          swipeableRef.current?.close();
        },
      },
    ]);
  }

  return (
    <Swipeable
      ref={swipeableRef}
      rightThreshold={42}
      overshootRight={false}
      onSwipeableRightOpen={handleDelete}
      onSwipeableLeftOpen={handleSuccess}
      renderLeftActions={() => (
        <Styles.Success>
          <Feather name="check-circle" size={20} color="#fff" />
        </Styles.Success>
      )}
      renderRightActions={() => (
        <Styles.Delete>
          <Feather name="trash" size={20} color="#fff" />
        </Styles.Delete>
      )}
    >
      <Styles.Container>
        <Styles.Details>
          <Feather name="bell" size={20} color="#fff" />
        </Styles.Details>
        <Text style={{ marginLeft: 30 }}>{data.name}</Text>
      </Styles.Container>
    </Swipeable>
  );
};

export default Card;
