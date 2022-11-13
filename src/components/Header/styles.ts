import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 2px;
  .top-container {
    padding: 0.3rem 0.6rem;
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
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--main-color);
    }
  }

  .search-input {
    width: 100%;
    padding: 0.5rem 0.3rem;
    border: 1px solid #33333330;
    font-size: 1rem;
  }
`;
