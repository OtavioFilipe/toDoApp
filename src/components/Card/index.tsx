import React, { useRef } from "react";
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
      renderRightActions={() => <Styles.Delete></Styles.Delete>}
    >
      <Styles.Container></Styles.Container>
    </Swipeable>
  );
};

export default Card;
