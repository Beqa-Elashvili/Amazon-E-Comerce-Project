import styled from "styled-components";

export const SCategoryButtonsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #232f3e;
  justify-content: space-evenly;
  height: 40px;
  & button {
    padding: 12px;
    height: 40px;
    color: #ffffff;
    font-family: serif;
    border-radius: 2px;
    background-color: #232f3e;
    border: none;
    :hover {
      cursor: pointer;
      border: 2px white solid;
    }
  }
`;
