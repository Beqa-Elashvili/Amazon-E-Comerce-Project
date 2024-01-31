import styled from "styled-components";

export const BackStyle = styled.div`
  & div {
    position: relative;
    img {
      filter: blur(2px);
    }
    h1 {
      position: absolute;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      top: 10%;
    }
    p {
      font-size: 20px;
    }
  }
  & .carousel {
    height: 500px;
    width: 100%;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background: #364d79;
  }
  & .Title_one {
    top: 30%;
    right: 15%;
    transform: translate(-50%, -100%);
    p {
      color: brown;
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
  }
  & .Title_two {
    width: 20%;
    top: 8%;
    color: goldenrod;
    right: 20%;
    p {
      color: brown;
    }
  }
  & .Title_three {
    width: 20%;
    right: 20%;
    color: brown;
  }
  & .Title_four {
    left: 10%;
  }
  & .Title_five {
    width: 20%;
    left: 20%;
  }
  & .Title_six {
    width: 20%;
    right: 5%;
    color: black;
    p {
      color: firebrick;
    }
  }
`;
