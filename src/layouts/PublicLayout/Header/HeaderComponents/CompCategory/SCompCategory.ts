import styled from "styled-components";

export const SCategoryButtonsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #232f3e;
  & button {
    text-align: center;
    padding: 0px 12px;
    height: 40px;
    color: #ffffff;
    font-family: serif;
    border-radius: 2px;
    background-color: #232f3e;
    border: none;
    :hover {
      cursor: pointer;
      border: 1px white solid;
    }
  }
`;
