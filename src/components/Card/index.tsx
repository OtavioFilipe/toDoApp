import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Alert, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { TodoProps } from "../../screens/Home";

import * as Styles from "./styles";

type CardProps = {
  data: TodoProps;
  onChangeStatusToDelete: (id: number) => void;
  onChangeStatusToCheck: (id: number) => void;
  isCheckColor?: "string";
};

const Card: React.FC<CardProps> = ({
  data,
  onChangeStatusToDelete,
  onChangeStatusToCheck,
}: CardProps) => {
  const swipeableRef = useRef<Swipeable>(null);
  const isCheckColor = data.selected ? "#5dd2d3" : "#3775fd";

  function handleDelete() {
    Alert.alert("Remover item", "Você tem certeza que quer remover?", [
      {
        text: "Não",
        onPress: () => swipeableRef.current?.close(),
      },
      {
        text: "Sim",
        onPress: () => {
          onChangeStatusToDelete(data.id);
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
          onChangeStatusToCheck(data.id);
          swipeableRef.current?.close();
        },
      },
    ]);
  }

  return (
    <View style={{ marginTop: 10 }}>
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
          <Styles.Details style={{ backgroundColor: isCheckColor }}>
            {data.selected ? (
              <Feather name="check-circle" size={20} color="#fff" />
            ) : (
              <Feather name="bell" size={20} color="#fff" />
            )}
          </Styles.Details>
          <Text style={{ marginLeft: 30 }}>{data.name}</Text>
        </Styles.Container>
      </Swipeable>
    </View>
  );
};

export default Card;
