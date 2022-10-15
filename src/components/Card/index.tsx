import React from "react";
import { Text } from "react-native";
import { TodoProps } from "../../screens/Home";

import * as Styles from "./styles";

type CardProps = {
  data: TodoProps;
};

const Card: React.FC<CardProps> = ({ data }: CardProps) => {
  return (
    <Styles.Container>
      <Text> {data.name} </Text>
    </Styles.Container>
  );
};

export default Card;
