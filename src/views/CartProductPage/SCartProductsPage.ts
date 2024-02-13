import styled, { css } from "styled-components";
export const SCartProducts = styled.div`
  width: 98%;
  margin: auto;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
  & button:hover {
    background-color:gray;
    border-radius:100%;
    cursor: pointer;
  }
`;
