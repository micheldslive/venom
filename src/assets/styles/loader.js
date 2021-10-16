import styled from "styled-components";
import { ReactComponent as VenomLogoSVG } from "assets/images/venom-face.svg";

export const PreloaderContent = styled.div``;

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: var(--black1);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bg-out 0.3s 6s linear forwards;
  opacity: 1;
  z-index: 11;

  @keyframes bg-out {
    0% {
      height: 110%;
      transition: linear;
    }

    100% {
      height: 0;
      opacity: 0;
      z-index: initial;
    }
  }
`;

export const PreloaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10%;
`;

export const VenomLogo = styled(VenomLogoSVG)`
  width: 120px;
  z-index: -1;

  path {
    fill: transparent;
    stroke-width: 0.6;
    stroke: white;
    animation: venom-animate 4s 1s linear forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: -360;

    @keyframes venom-animate {
      0% {
        stroke-dashoffset: -360;
      }
      40% {
        stroke-dashoffset: -180;
      }
      80% {
        stroke-dashoffset: 0;
        fill: transparent;
        stroke: white;
      }
      100% {
        stroke-dashoffset: 0;
        fill: white;
        stroke: transparent;
      }
    }
  }
`;
