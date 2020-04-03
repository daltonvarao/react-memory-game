import React from "react";
import { Container } from "./styles";

import CardList from "../../components/CardList";
import Header from "../../components/Header";

export default function Game() {
  return (
    <Container>
      <Header title="Jogo da Memória" />
      <CardList />
    </Container>
  );
}
