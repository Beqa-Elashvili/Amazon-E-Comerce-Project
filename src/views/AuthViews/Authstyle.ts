import styled from "styled-components";

export const RegisterStyle = styled.div`
  & a {
    :hover {
      text-decoration: underline;
    }
  }
  & p {
    font-size: 12px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  & .content {
    border: 1px solid grey;
    padding: 12px;
    border-radius: 10px;
    width: 350px;
    h5 {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
    }
  }
  & .blur-line {
    -webkit-filter: blur(200px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(200px);
    filter: blur(1px);
    width: 325px;
    height: 1px;
    background-color: #ccc;
  }
  & .account {
    p {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
  & .line {
    height: 1px;
    width: 110px;
    background-color: grey;
  }
  & .link-button {
    border: 1px solid black;
    border-color: grey;
    width: 355px;
    border-radius: 10px;
    padding: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0.1, 0.2);
  }
`;
