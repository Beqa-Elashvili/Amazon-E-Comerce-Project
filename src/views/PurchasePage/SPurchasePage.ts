import styled from "styled-components";

export const SPurchasePage = styled.div`
  margin: auto;
  padding-bottom: 180px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .content-2 {
    width: 100%;
    margin: auto;
  }
  .current-Address {
    width: 100%;
    border-radius: 12px 0px 0px 12px;
    padding: 6px;
    border: solid orange;
  }
  .address-btn {
    border: none;
    font-size: 20px;
    padding: 6px;
    border-radius: 0px 4px 4px 0px;
    cursor: pointer;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 12px;
    input {
      border: solid 1px;
      border-color: goldenrod;
      box-shadow: 0px 0 2px 0 rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.3s ease-in-out;
      :focus {
        box-shadow: 0px 0 6px 0 goldenrod;
      }
    }
  }
  .btn {
    border: solid 1px;
    background-color: orange;
    border-color: goldenrod;
    box-shadow: 0px 0 2px 0 rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    :focus {
      box-shadow: 0px 0 6px 0 goldenrod;
    }
  }
  .CreditCard input {
    max-width: 70%;
    padding: 4px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid burlywood;
    transition: box-shadow 0.3s ease-in-out;
    :focus {
      border: 1px solid blue;
      box-shadow: 0px 0 6px 0 blue;
    }
  }
  .Footer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 18px;
    p {
      color: darkslategray;
      font-size: small;
      font-weight: 400;
    }
    a {
      color: darkcyan;
      text-decoration: none;
    }
  }
`;
