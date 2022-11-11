import styled from 'styled-components';

export const Header = styled.header`
  padding: 0.3rem;
  box-shadow: 0 2px #33333330;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: var(--main-color);
    font-size: 2rem;
    cursor: pointer;
  }

  span {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--main-color);
  }
`;
