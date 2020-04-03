import React from "react";
import { useHistory } from "react-router-dom";

import { Container, Header, HeaderTitle, Menu, Button } from "./styles";

export default function Home() {
  const history = useHistory();

  function handleNewGame() {
    history.push("/game");
  }

  function handleScoreBoard() {
    history.push("/scores");
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Jogo da Memória</HeaderTitle>
      </Header>
      <Menu>
        <Button onClick={handleNewGame}>Novo Jogo</Button>
        <Button onClick={handleScoreBoard}>Seu Score</Button>
      </Menu>
    </Container>
  );
}
