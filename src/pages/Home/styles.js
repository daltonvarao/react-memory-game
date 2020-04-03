import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.header`
  padding: 1rem 1.5rem;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

export const HeaderTitle = styled.h2``;

export const Menu = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 1rem 3rem;
  height: 4rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  border: 3px solid #333;
  background-image: linear-gradient(
    to right,
    #ac92eb,
    #4fc1e8,
    #a0d568,
    #ffce54,
    #ff7f48,
    #ed5564
  );
  font-size: 18px;
  outline: none;

  transition: color 0.2s;

  :hover {
    background-color: #333;
    color: #fff;
    transition: color 0.2s;
  }
`;
