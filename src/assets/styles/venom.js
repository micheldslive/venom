import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import VenomTitleSRC from "assets/images/venom-title.png";
import VenomImageSRC from "assets/images/venom.png";
import MarvelLogo from "assets/images/marvel-logo.svg";
import SonyLogo from "assets/images/sony-logo.svg";

export { VenomTitleSRC, VenomImageSRC, MarvelLogo, SonyLogo };

export const VenomContent = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.7s ease;

  @media (max-width: 767px) {
    height: 100%;
    padding-bottom: 30px;
  }
`;

export const VenomContainer = styled.section``;

export const VenomRow = styled(Row)``;

export const VenomCol = styled(Col)`
  margin: 0;
  padding: 0;
  transition: 0.7s ease;
  display: flex;

  @media (max-width: 767px) {
    &:nth-child(1) {
      order: 2;
    }
  }
`;

export const VenomInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VenomTitle = styled.img`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 15px;
`;

export const VenomText = styled.p`
  width: 80%;
  margin: 0 auto;
  color: var(--gray);
  text-align: justify;
  padding-bottom: 15px;
`;

export const VenomImageContent = styled.div`
  max-width: 450px;
  margin: 0 auto;

  @media (max-width: 520px) {
    margin: 0 20px;
  }
`;

export const VenomImage = styled.img`
  width: 100%;
`;

export const VenomButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

export const VenomSpan = styled.span``;

export const VenomButton = styled.a`
  margin: 0 10px;
  position: relative;
  text-transform: uppercase;
  color: white;
  padding: 10px 20px;
  letter-spacing: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s ease;
  border: 1px solid var(--red);

  &:hover {
    border-color: transparent;
  }

  &:before {
    position: absolute;
    top: 2px;
    left: 2px;
    bottom: 2px;
    content: "";
    width: 100%;
    transition: 0.7s ease;
  }

  &:hover span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--red1), var(--red));
    animation: animate1 2s linear infinite;
  }

  @keyframes animate1 {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  &:hover span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--red1), var(--red));
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate2 {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  &:hover span:nth-child(3) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, var(--red1), var(--red));
    animation: animate3 2s linear infinite;
  }

  @keyframes animate3 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  &:hover span:nth-child(4) {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, var(--red1), var(--red));
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4 {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

export const LogoLink = styled.a`
  margin: 0 10px;
`;

export const LogoImage = styled.img`
  width: 80px;
`;
