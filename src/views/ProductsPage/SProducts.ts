import styled from "styled-components";

export const SProducts = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  & .container {
    display: grid;
    padding-bottom: 12px;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    gap: 25px;
  }
`;
