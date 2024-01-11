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
    width: max-content;
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
    padding: 10px;
    min-width: max-content;
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
    text-align: center;
    position: absolute;
    margin-left: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    background-color: #d0d1d1;
    height: 44px;
    border-radius: 4px 0px 0px 4px;
    border: none;
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
      text-align: center;
    }
  }

  & .Search-input {
    display: flex;
    align-items: center;
    position: relative;
  }
  & input {
    padding: 14px 120px;
    border: 5px hidden;
    border-radius: 4px;
    transition: border-color 1s;
    width: 820px;
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
      font-size: 11px;
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
export const SCategoryMenu = styled.div`
  display: flex;
  background-image: linear-gradient(
    to bottom,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  justify-content: space-evenly;
  height: 40px;
  & button {
    padding: 12px;
    height: 40px;
    color: #ffffff;
    font-family: serif;
    border-radius: 2px;
    background-image: linear-gradient(
      to bottom,
      #051937,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
    border: none;
    :hover {
      cursor: pointer;
      border: 2px white solid;
    }
  }
`;
