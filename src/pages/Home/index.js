import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Header, HeaderTitle, Menu, Button } from "./styles";

export default function Home() {
  const history = useHistory();

  function handleNewGame() {
    history.push("/game");
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Jogo da Memória</HeaderTitle>
      </Header>
      <Menu>
        <Button onClick={handleNewGame}>Novo Jogo</Button>
      </Menu>
    </Container>
  );
}
