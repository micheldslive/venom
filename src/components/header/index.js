import { Component } from "react";
import { menu } from "services/menu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { NavLink } from "react-router-dom";
import {
  Container,
  HeaderContent,
  List,
  Logo,
  NavContainer,
  Navigation,
  MenuLink,
  Buttons,
  Burger,
  Bullets,
  ListContainer,
  LogoLink,
  SocialContent,
  SocialLink,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "assets/styles/header";

class Social extends Component {
  render() {
    return (
      <SocialContent mobile={this.props.mobile}>
        <SocialLink href="https://web.facebook.com/micheldslive/" target="_blank">
          <Facebook />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/micheldslive/" target="_blank">
          <Instagram />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/micheldslive/" target="_blank">
          <Linkedin />
        </SocialLink>
        <SocialLink href="https://web.facebook.com/micheldslive/" target="_blank">
          <Twitter />
        </SocialLink>
      </SocialContent>
    );
  }
}

class Hamburger extends Component {
  render() {
    return (
      <Burger open={this.props.open} onClick={() => this.props.openClick()}>
        <Bullets />
        <Bullets />
      </Burger>
    );
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openClick = this.openClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openClick = () => {
    this.setState({ open: !this.state.open });
  };

  closeMenu = () => {
    this.setState({ open: false });
  };

  render() {
    const open = this.state.open;
    open ? disableBodyScroll(document) : enableBodyScroll(document);

    return (
      <HeaderContent open={open}>
        <Container>
          <NavContainer>
            <LogoLink to="/">
              <Logo />
            </LogoLink>
            <Navigation open={open}>
              <ListContainer>
                {menu.map((link) => (
                  <List key={link.name}>
                    <MenuLink as={NavLink} exact to={link.to} onClick={this.closeMenu} activeClassName="active">
                      {link.name}
                    </MenuLink>
                  </List>
                ))}
                <List><Social /></List>
              </ListContainer>
            </Navigation>
          </NavContainer>
          <Buttons>
            <Social mobile={true} />
            <Hamburger open={open} openClick={this.openClick} />
          </Buttons>
        </Container>
      </HeaderContent>
    );
  }
}