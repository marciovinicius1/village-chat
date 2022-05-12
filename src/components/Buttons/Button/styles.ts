import styled from "styled-components";

export const ButtonStyle = styled.button`
  height: 40px;
  width: 200px;
  background-color: var(--primary);
  color: var(--gray);
  border: none;
  text-decoration: none;
  padding: 16px 20px;
  text-align: center;

  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 700;
  margin: 4px 2px;
  border-radius: 8px;
  transition: 0.3s;

  cursor: pointer;

  &:hover {
    color: var(--yellow);
  }
`;
