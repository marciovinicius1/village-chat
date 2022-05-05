import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-bottom: 20px;
    color: var(--dark);
  }

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
export const ChatList = styled.div`
  padding: 10px;
  height: 400px;
  width: 300px;
  background-color: var(--dark);
  border-radius: 10px;

  > div {
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-color: light;
  }
`;
