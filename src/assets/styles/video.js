import styled from "styled-components";
import VideoMP4 from "assets/video/venom.mp4";

export { VideoMP4 };

export const VideoContainer = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background: linear-gradient(
      110deg,
      #0a0c10 25%,
      rgba(11, 12, 16, 0.5) 50%,
      #0a0c10 70%
    );
  }
`;

export const VideoContent = styled.video`
  height: 100%;
`;

export const VideoSource = styled.source``;
