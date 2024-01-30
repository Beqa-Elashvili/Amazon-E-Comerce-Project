import styled, { css } from "styled-components";

export const SHome = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
