import styled from "styled-components";

export const SFooter = styled.div`
  color: #ffffff;
  font-family: system-ui;
  .FooterBackgroundOne {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #232f3e;
  }

  .grid-item {
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    :hover {
      text-decoration: underline;
    }
  }
  .line {
    background-color: grey;
    width: 100%;
    height: 0.1px;
    opacity: 0.3;
  }

  .underLInks {
    padding: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    .links {
      display: flex;
      gap: 12px;
      p:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .lang-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #232f3e;
    border: solid 1px white;
    width: 130px;
    height: 34px;
    color: #ffffff;
    cursor: pointer;
  }
  .rotated {
    transition: transform 0.5s ease;
    transform: rotate(360deg);
  }
`;
