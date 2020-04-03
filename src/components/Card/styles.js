import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border: 2px solid #333;
  border-radius: 0.25rem;
  font-size: 28px;
  font-weight: 700;
  outline: none;
  background-image: linear-gradient(
    to right,
    #ac92eb,
    #4fc1e8,
    #a0d568,
    #ffce54,
    #ff7f48,
    #ed5564
  );
  transition: color 0.2s;

  :hover {
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s;
  }
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
`;
