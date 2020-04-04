import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  max-width: 388px;
  margin: 0 auto;

  h2.title {
    /* margin-top: 2rem; */
  }
`;

export const ListContainer = styled.ul`
  margin-top: 0.5rem;
`;

export const ListItem = styled.li`
  border-radius: 8px;
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
