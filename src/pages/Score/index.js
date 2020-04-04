import React, { useState, useEffect } from "react";

import { Container, ListContainer, ListItem } from "./styles";

import { getLastScores } from "../../services/score";

import Header from "../../components/Header";

export default function Score() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setScores(getLastScores());
  }, []);

  return (
    <Container>
      <Header title="Score" />
      {/* <h1>Melhor Score: 21</h1> */}
      <h2 className="title">Melhores Scores</h2>
      <ListContainer>
        {scores.map((score, index) => (
          <ListItem key={index}>
            <h3>#{index + 1}</h3> {score} movimentos
          </ListItem>
        ))}
      </ListContainer>
    </Container>
  );
}
