import React, { useState } from "react";

import { Container, Image } from "./styles";

export default function Card({ source, selectCard }) {
  const [show, setShow] = useState(false);

  function showImage() {
    selectCard(setShow, source);
  }

  return (
    <Container onClick={showImage}>
      {show ? <Image src={source} alt="Card" /> : "?"}
    </Container>
  );
}
