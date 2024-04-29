import styled, { css } from "styled-components";

export const ScategoryPage = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
