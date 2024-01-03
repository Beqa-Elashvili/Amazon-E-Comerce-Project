import styled, { css } from "styled-components";

export const SHome = styled.div`
  width: 100px;
  height: 100px;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
