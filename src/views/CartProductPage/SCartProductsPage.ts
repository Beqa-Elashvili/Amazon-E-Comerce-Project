import styled, { css } from "styled-components";
export const SCartProducts = styled.div`
  padding: 12px;
  min-height: 400px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
  & button:hover {
    color: #ffff;
    background-color: gray;
    cursor: pointer;
  }
`;
