import { Component } from "react";
import {
  VideoContainer,
  VideoContent,
  VideoSource,
  VideoMP4,
} from "assets/styles/video";

export default class Video extends Component {
  render() {
    return (
      <VideoContainer>
        <VideoContent autoPlay muted loop>
          <VideoSource src={VideoMP4} type="video/mp4"></VideoSource>
        </VideoContent>
      </VideoContainer>
    );
  }
}
