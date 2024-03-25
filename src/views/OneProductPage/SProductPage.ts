import styled from "styled-components";

export const SProductPage = styled.div`
  margin: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  .lines {
    background-color: grey;
    height: 100px;
  }
  .container {
    display: flex;
    gap: 12px;
  }
  .containerTwo {
    display: flex;
  }
  .box {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .little {
    color: black;
  }
  .sale {
    color: #df0202;
  }
  .popover {
    p {
      color: gray;
    }
    .cart {
      height: 100%;
    }
  }
`;
