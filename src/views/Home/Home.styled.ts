import styled, { css } from "styled-components";

export const SHome = styled.div`
 width: 98%;
 margin: auto;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
