import styled from 'styled-components';

export const Container = styled.button`
  background-color: #f5f5f5;
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 50px;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px #33333360;
  color: var(--main-color);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
