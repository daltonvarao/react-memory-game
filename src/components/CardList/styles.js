import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 0.75rem;
`;

export const GameInformations = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  .new-game-button {
    font-size: 24px;
    outline: none;

    :hover {
      opacity: 0.7;
    }
  }

  p {
    font-size: 24px;
  }
`;
