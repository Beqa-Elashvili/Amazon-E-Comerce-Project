import styled from "styled-components";

export const SFooter = styled.div`
  padding: 30px 0px 30px 0px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .links {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 15px;
    column-gap: 70px;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
    padding: 0px 10px 0px 10px;
  }
  & .grid-item {
    padding: 5px;
    text-align: center;
    border-radius: 5px;
    color: grey;
    text-decoration: none;
    font-family: system-ui;
    font-size: 14px;
    font-weight: 600;
  }
  & .line {
    background-color: grey;
    width: 100%;
    height: 0.1px;
    opacity: 0.3;
  }
`;
