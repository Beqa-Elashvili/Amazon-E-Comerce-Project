import styled from "styled-components";

export const SSaleProducts = styled.div`
  top: 50%;
  left: 2%;

  img {
    height: 340px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
    object-fit: cover;
    border: solid 3px white;
    border-radius: 8px;
    max-width: 320px;
  }

  .relative:hover img {
    transform: scale(1.05);
    box-shadow: 0 0px 20px rgba(255, 165, 0, 0.5);
    filter: blur(0.8px);
  }

  h2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    color: orange;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .relative:hover h2 {
    opacity: 1;
    cursor: pointer;
  }
`;
