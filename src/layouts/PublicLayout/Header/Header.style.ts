import styled from "styled-components";

export const SHeader = styled.div`
  padding: 4px 12px;
  max-height: 62px;
  display: flex;
  & button:hover {
    border: solid 1px #ffffff;
    border-radius: 3%;
  }
  & button {
    border: none;
    padding: 12px 4px 0px 0px;
    background-color: rgb(17 24 39);
    cursor: pointer;
  }
  & .Deliver {
    display: flex;
    min-width: 120px;
    margin-left: 4px;
    flex-direction: column;
    color: #ffffff;
  }
  & .Map {
    filter: brightness(0) invert(1) grayscale(1);
  }
  & h5 {
    margin-left: 18px;
    color: gray;
    font-weight: 600;
  }
  & h3 {
    font-weight: 600;
  }
`;
