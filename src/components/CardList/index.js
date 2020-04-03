import React, { useEffect, useState } from "react";

import { Container } from "./styles";

import Card from "../Card";
import emojis from "../../services/emojis";

export default function CardList() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [savedSources, setSavedSources] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [matches, setMatches] = useState(0);

  function selectCard(setShowCard, source) {
    if (selectedCards.length < 2) {
      setShowCard(true);
    }
    setSelectedCards(selected => [...selected, setShowCard]);
    setSavedSources(sources => [...sources, source]);
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
    clearStates();
  }

  useEffect(() => {
    if (matches === 8) {
      alert("Parabens! Você venceu!");
      endGame();
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

  const sources = [...emojis, ...emojis];
  return (
    <Container>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => (
        <Card key={item} selectCard={selectCard} source={sources[item]} />
      ))}
    </Container>
  );
}
