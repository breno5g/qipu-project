import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;

export const EmptyCard = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 500;
    opacity: 0.5;
  }
`;
