import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { Container, Header, HeaderTitle } from "./styles";

import CardList from "../../components/CardList";

export default function Game() {
  const history = useHistory();

  function goBack() {
    return window.confirm("Deseja realmente sair? Seu progresso será perdido!")
      ? history.goBack()
      : null;
  }

  return (
    <Container>
      <Header>
        <button onClick={goBack} className="back">
          <MdArrowBack size={26} color="#333" />
        </button>
        <HeaderTitle>Jogo da Memória</HeaderTitle>
      </Header>
      <CardList />
    </Container>
  );
}
