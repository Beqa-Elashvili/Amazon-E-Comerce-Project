import styled from "styled-components";

export const SProductPage = styled.div`
  width: 100%;
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
  @media (min-width: 375px) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .imgs {
      display: flex;
      justify-content: center;
    }
    .sliders {
      display: none;
    }
  }
  @media (min-width: 1530px) {
    .container {
      display: flex;
      flex-direction: row;
      gap: 12px;
    }
    .sliders {
      display: block;
    }
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
