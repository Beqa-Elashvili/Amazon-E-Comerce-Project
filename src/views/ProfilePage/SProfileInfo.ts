import styled from "styled-components";

export const SProfileInfo = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .SButons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    Button {
      padding: 30px;
      height: auto;
      font-size: large;
      background-color: #cde4e8;
      box-shadow: inset 0 0 10px gray;
      transition: all 0.3s ease 0s;
      :hover {
        background-color: gray;
        box-shadow: 0px 15px 20px rgba(46, 29, 157, 0.4);
        background-color: #d2a35d;
        transform: translatey(-7px);
      }
    }
  }
`;
