import styled from "styled-components";

export const SFooter = styled.div`
  padding: 40px 0px 40px 0px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .links-title {
  }
  & .links {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px;
    column-gap: 60px;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
  }
  & .grid-item {
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    /* color: #ffffff; */
    text-decoration: none;
  }
  & .line {
    background-color: grey;
    width: 100%;
    height: 0.1px;
    opacity: 0.3;
  }
`;
