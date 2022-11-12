import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 60px);
  overflow-y: scroll;
  background-color: #fafafa;
`;

export const EmptyCard = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;

  span {
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.5;
    transform: translateY(7px);
  }
`;
