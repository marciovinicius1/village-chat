import React from "react";
import ButtonTutorial from "../../Buttons/ButtonTutorial";
import ButtonNewRoom from "../../Buttons/ButtonNewRoom";
import ButtonJoinRoom from "../../Buttons/ButtonJoinRoom";

import { Container, Block } from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <Block>
        <ButtonNewRoom />
        <ButtonJoinRoom />
        <ButtonTutorial />
      </Block>
    </Container>
  );
};

export default SideBar;
