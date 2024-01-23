import styled from "styled-components";

export const FooterLine = styled.div`
  font-size: 12px;
  & .line {
    -webkit-filter: blur(200px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(200px);
    filter: blur(1px);
    width: 100%;
    height: 1px;
    background-color: #ccc;
    box-shadow: 4 5px 5px rgba(5, 5, 5, 0.2);
  }
`;
