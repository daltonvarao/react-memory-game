import styled from "styled-components";

export const Container = styled.header`
  padding: 1rem;
  position: fixed;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  button.back {
    background: transparent;
    border: 0;
    height: 26px;
    margin-right: 1rem;
    outline: none;
  }
`;

export const HeaderTitle = styled.h2``;
