import styled, { css } from "styled-components";

export const SHome = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
  @media (min-width: 374px) {
    .resp-height {
      height: 1100px;
    }
  }
  @media (min-width: 768px) {
    .resp-height {
      height: 940px;
    }
  }
`;
