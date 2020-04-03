import React from "react";
import { useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import { Container, HeaderTitle } from "./styles";

export default function Header({ title }) {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <button onClick={goBack} className="back">
        <MdArrowBack size={26} color="#333" />
      </button>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
