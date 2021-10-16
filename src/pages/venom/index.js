import { Component } from "react";
import { Helmet } from "react-helmet-async";
import Tilt from "react-parallax-tilt";
import {
  VenomCol,
  VenomContainer,
  VenomContent,
  VenomRow,
  VenomTitle,
  VenomText,
  VenomTitleSRC,
  VenomImageSRC,
  VenomInfos,
  VenomImage,
  VenomImageContent,
  VenomButtons,
  VenomButton,
  VenomSpan,
  LogoLink,
  LogoImage,
  MarvelLogo,
  SonyLogo,
} from "assets/styles/venom";

export default class Venom extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Venom - Let There be Carnage</title>
          <meta name="description" content="Venom - Let There be Carnage" />
        </Helmet>
        <VenomContent>
          <VenomContainer>
            <VenomRow>
              <VenomCol lg={6} md={6}>
                <VenomInfos>
                  <VenomTitle src={VenomTitleSRC} />
                  <VenomText>
                    Mussum Ipsum, cacilds vidis litro abertis. Leite de
                    capivaris, leite de mula manquis sem cabeça. Suco de
                    cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
                    e fermentis. Mauris nec dolor in eros commodo tempor.
                  </VenomText>
                  <VenomButtons>
                    <VenomButton href="">
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      Watch Movie
                    </VenomButton>
                    <VenomButton href="">
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      <VenomSpan></VenomSpan>
                      Buy Now
                    </VenomButton>
                  </VenomButtons>
                  <VenomButtons>
                    <LogoLink href="">
                      <LogoImage src={MarvelLogo} />
                    </LogoLink>
                    <LogoLink href="">
                      <LogoImage src={SonyLogo} />
                    </LogoLink>
                  </VenomButtons>
                </VenomInfos>
              </VenomCol>
              <VenomCol lg={6} md={6}>
                <VenomImageContent>
                  <Tilt options={{ perspective: 2200, scale: 1 }}>
                    <VenomImage src={VenomImageSRC} />
                  </Tilt>
                </VenomImageContent>
              </VenomCol>
            </VenomRow>
          </VenomContainer>
        </VenomContent>
      </>
    );
  }
}
