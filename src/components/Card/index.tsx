import { Feather } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Text } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { TodoProps } from "../../screens/Home";

import * as Styles from "./styles";

type CardProps = {
  data: TodoProps;
};

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  const swipeableRef = useRef<Swipeable>(null);

  return (
    <Swipeable
      ref={swipeableRef}
      rightThreshold={42}
      overshootRight={false}
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
        <Text>{data.name}</Text>
      </Styles.Container>
    </Swipeable>
  );
};

export default Card;
