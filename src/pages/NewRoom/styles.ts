import styled from 'styled-components';
import { King } from '../../assets/svgr';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: hsla(229, 61%, 45%, 1);

  background: linear-gradient(
    45deg,
    hsla(229, 61%, 45%, 1) 0%,
    hsla(286, 54%, 51%, 1) 100%
  );

  background: -moz-linear-gradient(
    45deg,
    hsla(229, 61%, 45%, 1) 0%,
    hsla(286, 54%, 51%, 1) 100%
  );

  background: -webkit-linear-gradient(
    45deg,
    hsla(229, 61%, 45%, 1) 0%,
    hsla(286, 54%, 51%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#2D46B9", endColorstr="#A63EC5", GradientType=1 );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#2D46B9", endColorstr="#A63EC5", GradientType=1 );
`;
export const FormBox = styled.div`
  height: 400px;
  width: 300px;
  background-color: var(--dark);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    gap: 10px;

    margin-bottom: 12px;
  }

  input {
    width: 200px;
    height: 40px;
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 6px;
    border: none;
    padding: 4px;
  }

  button {
    margin-top: 20px;
  }
`;
export const KingIcon = styled(King)`
  font-size: 80px;
  margin-bottom: 20px;
`;
