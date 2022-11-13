import styled from 'styled-components';

interface ContainerProps {
  step: number;
}

export const Container = styled.main<ContainerProps>`
  height: 100vh;
  background-color: tomato;
  background: linear-gradient(180deg, rgba(36, 127, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);

  form {
    height: 100vh;
    max-width: 550px;
    overflow: hidden;
    margin: auto;

    .carousel {
      width: calc(100vw * 6);
      max-width: calc(550px * 6);
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      transform: translateX(calc(${(props) => props.step} * -100vw));

      @media (min-width: 600px) {
        width: calc(550px * 6);
        transform: translateX(calc(${(props) => props.step} * -550px));
      }

      fieldset {
        height: 100vh;
        min-height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: none;
        color: #fafafa;

        div.top-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          span {
            margin: 0 auto;
            letter-spacing: 0.1rem;
            font-size: 10px;
            color: #fafafa99;
          }

          h1 {
            text-align: center;
          }

          p {
            white-space: pre-wrap;
          }

          input {
            background-color: transparent;
            border: none;
            border-bottom: 2px solid #fafafa;
            outline: none;
            caret-color: #fafafa;
            padding: 0.5rem;
            color: white;
            font-size: 1.5rem;
          }

          label {
            cursor: pointer;
            width: 300px;
            height: 300px;
            background-color: #33333380;
            margin: 0 auto;
            padding: 3rem 4rem;
            position: relative;

            &::before {
              content: 'As dimensões da foto devem ser de 600 x 600';
              display: inline-block;
              text-align: center;
            }

            &::after {
              content: '+';
              position: absolute;
              width: fit-content;
              height: fit-content;
              font-size: 4rem;
              font-weight: 700;
              margin: auto;
              inset: 0;
            }

            input[type='file'] {
              display: none;
            }

            .currency {
              padding: 0.5rem 0.5rem 0.5rem 2.5rem;
              position: relative;
              display: inline-block;
            }
          }
        }

        button {
          padding: 1rem;
          font-size: 2rem;
          font-weight: 500;
          text-transform: uppercase;
          background-color: transparent;
          border: none;
          color: inherit;
          border-top: 2px solid #fafafa;
          cursor: pointer;
        }
      }
    }
  }
`;
