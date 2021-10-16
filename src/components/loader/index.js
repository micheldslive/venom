import { Component } from "react";
import {
  PreloaderMain,
  PreloaderContainer,
  VenomLogo,
} from "assets/styles/loader";

export default class Loader extends Component {
  render() {
    return (
      <PreloaderContainer>
        <PreloaderMain>
          <VenomLogo />
        </PreloaderMain>
      </PreloaderContainer>
    );
  }
}
