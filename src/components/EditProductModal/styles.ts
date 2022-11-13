import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #33333350;
  overflow: hidden;

  .content {
    width: 90%;
    height: 90%;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    overflow: hidden scroll;

    header {
      display: flex;
      justify-content: space-between;
      color: white;
      padding: 1.5rem;
      background-color: var(--main-color);

      button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        font-size: 2rem;
        color: #fafafa;
        cursor: pointer;
      }
    }

    main {
      form {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          display: flex;
          flex-direction: column;
          gap: inherit;

          input {
            padding: 0.5rem;
          }

          textarea {
            height: 100px;
            padding: 0.5rem;
            resize: none;
          }
        }

        button {
          padding: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;

          color: white;
          background-color: var(--main-color);
          border: none;
          border-radius: 0.5rem;
        }
      }
    }
  }
`;
