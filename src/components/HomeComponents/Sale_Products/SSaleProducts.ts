import styled from "styled-components";

export const SSaleProducts = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  & .container {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto auto auto;
    column-gap: 30px;
  }
  & .items {
    text-align: start;
    padding: 12px;
    background-color: aliceblue;
  }
`;
