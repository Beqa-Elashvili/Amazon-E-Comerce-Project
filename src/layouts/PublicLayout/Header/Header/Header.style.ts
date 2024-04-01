import styled from "styled-components";

export const SHeader = styled.div`
  padding: 4px 12px;
  max-height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;

  & button {
    border: none;
    background-color: rgb(17 24 39);
    cursor: pointer;
  }
  & button:hover {
    border: solid 1px #ffffff;
    border-radius: 3%;
  }
  & .Deliver {
    display: flex;
    min-width: 155px;
    flex-direction: column;
    color: #ffffff;
    padding: 10px;
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
  & select {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    background-color: #d0d1d1;
    width: fit-content;
    height: 44px;
    border-radius: 4px 0px 0px 4px;
    border: none;
    width: auto;
    border-right: 1px grey solid;
    color: #515452;
    transition: border-color 1s;
    :focus {
      border: 2px solid;
      border-color: lightcoral;
      outline: none;
    }
    & option {
      background-color: #ffffff;
      color: black;
    }
  }
  & Input {
    padding: 11px 140px;
    z-index: 0;
    border: hidden;
    border-radius: 4px;
    transition: border-color 1s;
    width: 740px;
    box-shadow: 0px 0 2px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    :focus {
      box-shadow: 0px 0 10px 0 goldenrod;
    }
  }
  & .input-btn {
    right: 0;
    padding: 10px;
    background-color: orange;
    overflow: hidden;
    border-radius: 0px 4px 4px 0px;
    :hover {
      border: 0;
      border-radius: 0px 4px 4px 0px;
      opacity: 0.7;
    }
  }
  & .border-div button {
    border: none;
  }
`;
export const Hbuttons = styled.div`
  display: flex;
  gap: 4px;
  & button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    color: #ffffff;
    height: 55px;
    padding: 20px 6px 20px 6px;
    & p {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
  & .shop-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    & h4 {
      margin-top: 18px;
    }
  }
  & .shopping-cart-icon {
    height: 45px;
    width: 45px;
    filter: brightness(0) invert(1) grayscale(1);
  }
`;
