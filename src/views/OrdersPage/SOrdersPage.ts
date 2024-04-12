import styled, { css } from "styled-components";

export const SOrdersPage = styled.div`
  width: 98%;
  margin: auto;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${(props) => css`
    background-color: ${props.theme.colors["primary"]};
  `}
`;
