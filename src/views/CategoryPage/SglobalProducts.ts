import styled, { css } from "styled-components";

export const SglobalProducts = styled.div`
  width: 98%;
  margin: auto;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
