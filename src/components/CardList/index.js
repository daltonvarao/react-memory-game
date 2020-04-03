import React, { useEffect, useState } from "react";

import { Container, Cards, GameInformations } from "./styles";
import { shuffle } from "../../utils/array";
import { setLastScore } from "../../services/score";

import Card from "../Card";
import sources from "../../services/emojis";

shuffle(sources);

export default function CardList() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [savedSources, setSavedSources] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [matches, setMatches] = useState(0);
  const [running, setRunning] = useState(true);
  const [moves, setMoves] = useState(0);

  function selectCard(setShowCard, source) {
    if (running) {
      if (selectedCards.length < 2) {
        setShowCard(true);
      }
      setSelectedCards(selected => [...selected, setShowCard]);
      setSavedSources(sources => [...sources, source]);
      setMoves(moves => moves + 1);
    }
  }

  function clearStates() {
    setSelectedCards([]);
    setSavedSources([]);
  }

  function match() {
    setMatches(matches => matches + 1);
    setMatchedCards(matcheds => [...selectedCards, ...matcheds]);
    clearStates();
  }

  function discard() {
    selectedCards.map(setShow => {
      return setShow(false);
    });
    clearStates();
  }

  function endGame() {
    matchedCards.map(setShow => {
      return setShow(false);
    });
    setMatches(0);
    setMoves(0);
    setRunning(true);
    clearStates();
  }

  useEffect(() => {
    if (matches === Math.floor(sources.length / 2)) {
      setRunning(false);
      setLastScore(moves);
      alert("Parabens! Você venceu!");
    }
  }, [matches]);

  useEffect(() => {
    if (selectedCards.length === 2) {
      if (savedSources[0] === savedSources[1]) {
        match();
      } else {
        setTimeout(discard, 1000);
      }
    }
  }, [selectedCards, savedSources]);

  return (
    <Container>
      <Cards>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => (
          <Card key={item} selectCard={selectCard} source={sources[item]} />
        ))}
      </Cards>

      <GameInformations>
        <p>Movimentos: {moves}</p>
        {!running ? (
          <button className="new-game-button" onClick={endGame}>
            Novo jogo
          </button>
        ) : null}
      </GameInformations>
    </Container>
  );
}
