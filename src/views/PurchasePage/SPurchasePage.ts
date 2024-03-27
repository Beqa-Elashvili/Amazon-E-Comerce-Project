import styled from "styled-components";

export const SPurchasePage = styled.div`
  width: 65%;
  margin: auto;
  padding-bottom: 12px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .mmg {
    float: right;
  }
  .content-2 {
    width: 98%;
    margin: auto;
  }
  .current-Address {
    width: 100%;
    border-radius: 12px;
    padding: 6px;
    border: solid orange;
  }
  .address-btn {
    border: none;
    font-size: 20px;
    padding: 6px;
    border-radius: 4px;
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
`;
