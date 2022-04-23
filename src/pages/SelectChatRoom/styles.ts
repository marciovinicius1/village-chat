import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: var(--gray);

  display: flex;
  justify-content: center;
  align-items: center;
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
