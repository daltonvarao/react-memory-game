import React, { useEffect, useState } from "react";

import { Container, Image } from "./styles";

export default function Card({ source, selectCard }) {
  const [show, setShow] = useState(false);

  function showImage() {
    // setShow(true);
    selectCard(setShow, source);
  }

  return (
    <Container onClick={showImage}>
      {show ? <Image src={source} alt="Card" /> : "?"}
    </Container>
  );
}
