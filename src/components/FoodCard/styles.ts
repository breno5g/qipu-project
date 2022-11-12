import styled from 'styled-components';

interface ContainerProps {
  alertColor: string;
}

export const Container = styled.div<ContainerProps>`
  box-shadow: 0 2px #33333330;
  padding: 1rem;
  cursor: pointer;

  header,
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  header {
    margin-bottom: 0.5rem;

    h1,
    span {
      font-size: 1.3rem;
      font-weight: 500;
      color: #2184d1;
    }
  }

  div {
    p,
    span {
      font-size: 0.9rem;
    }

    p {
      width: 70%;
      color: #33333390;
    }

    span {
      color: var(
        ${(props) => {
          return props.alertColor;
        }}
      );
    }
  }
`;
