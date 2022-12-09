import styled from "styled-components";


export const ContainerCol = styled.div`
  margin: 2em 0 0 0;
  padding: 0 50px;
  max-width: 1500px;
  width: 100%;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
  align-items: center;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }

  @media (min-width: 1500px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) {
    max-width: 1800px;
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "30px" : "15px")};
  background-color: ${({ primary }) => (primary ? "#E38B06" : "white")};
  color: ${({ primary }) => (primary ? "#000" : "black")};
  padding: ${({ big }) => (big ? "18px 30px" : "10px 28px")};
  font-size: ${({ bigFont }) => (bigFont ? "20px" : "18px")};
  display: flex;
  direction: row;
  align-items: center;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  @media only screen and (max-width: 1000px) {
    /* width: 100%; */
    padding: ${({ big }) => (big ? "18px 30px" : "10px 20px")};
  }
  @media only screen and (max-width: 375px) {
    padding: ${({ big }) => (big ? "12px 20px" : "10px 20px")};
    font-size: ${({ bigFont }) => (bigFont ? "16px" : "18px")};
  }
`;

export const OutlineButton = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? "40px" : "30px")};
  border: 2px solid #333;
  color: #333;
  outline: none;
  padding: ${({ big }) => (big ? "15px 60px" : "13px 55px")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  transition: all 0.5s ease;
  background-color: #fefefe;

  &:hover {
    background-color: #333;
    color: #fff;
    border: none;
    transform: translateY(-0.5rem) scale(1.02);
  }
  &:active {
    transform: translateY(0.5rem);
  }

  @media only screen and (max-width: 1200px) {
    border-radius: ${({ bigRadius }) => (bigRadius ? "20px" : "18px")};
    padding: ${({ big }) => (big ? "9px 30px" : "8px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "18px" : "16px")};
  }

  @media only screen and (max-width: 780px) {
    border: none;
    color: #e38b06;
    padding: 1rem 2rem;
    background: none;
    transition: all 0.4s ease;

    &:hover {
      border-bottom: 1px solid #e38b06;
      background: none;
      border-radius: 0;
      color: #e38b06;
    }
  }
`;
