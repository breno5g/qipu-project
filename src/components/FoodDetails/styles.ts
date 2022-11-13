import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #f5f5f5;
  top: 0;
  z-index: 100;

  header {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    background-color: var(--main-color);

    .left-side,
    .right-side {
      display: flex;
      gap: 1rem;
    }

    .left-side {
      div {
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
          width: 100px;
          height: 100px;
          border-radius: 0.5rem;
        }

        h1 {
          font-size: 1.5rem;
          color: white;
        }
      }
    }

    button {
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      color: white;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  main {
    ul {
      padding: 2rem;

      li {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        margin-bottom: 1rem;

        .title {
          opacity: 0.6;
        }

        .content {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
    }
  }
`;
