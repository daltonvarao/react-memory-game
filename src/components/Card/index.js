import React, { useState, memo } from "react";

import { Container, Image } from "./styles";

function Card({ source, selectCard, keyPos }) {
  const [show, setShow] = useState(false);

  function showImage() {
    selectCard(setShow, source, keyPos, show);
  }

  return (
    <Container onClick={showImage}>
      {show ? <Image src={source} alt="Card" /> : "?"}
    </Container>
  );
}

export default memo(Card);
