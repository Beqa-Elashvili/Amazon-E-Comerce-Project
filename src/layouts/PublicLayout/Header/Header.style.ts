import styled from "styled-components";

export const SHeader = styled.div`
  padding: 4px 12px;
  max-height: 62px;
  display: flex;
  align-items: center;
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
    padding: 11px;
    width: 155px;
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
  & .Search-input {
    display: flex;
    align-items: center;
    position: relative;
  }
  & input {
    padding: 14px;
    border: 5px hidden;
    border-radius: 4px 4px 4px 4px;
    transition: border-color 1s;
    width: 800px;
    margin-left: 12px;
    :focus {
      border: 2px solid;
      border-color: lightcoral;
      outline: none;
    }
  }
  & .input-btn {
    position: absolute;
    right: 0;
    padding: 10px;
    background-color: orange;
    overflow: hidden;
    border-radius: 0px 4px 4px 0px;
    :hover {
      border: 0;
      border-radius: 0px 4px 4px 0px;
      opacity: 0.9;
    }
  }
  & .lang-btn {
    margin-left: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    color: #ffffff;
    span {
      margin-left: 4px;
    }
  }
`;
