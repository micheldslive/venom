import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import VenomSpider from "assets/images/venom-spider.svg";
import { ReactComponent as VenomEye } from "assets/images/venom-eye.svg";

export const HeaderContent = styled.header`
  position: fixed;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "")};
  background-color: transparent;
  transition: all 0.1s linear;
  z-index: 1;

  @media (max-width: 767px) {
    position: initial;
  }
`;

export const Container = styled.section`
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const EyeAnimate = keyframes`
   0% { transform:translate(0,0) }
  1.78571% { transform:translate(5px,0) }
  3.57143% { transform:translate(0,0) }
  5.35714% { transform:translate(5px,0) }
  7.14286% { transform:translate(0,0) }
  8.92857% { transform:translate(5px,0) }
  10.71429% { transform:translate(0,0) }
  100% { transform:translate(0,0) }
`;

export const LogoLink = styled(Link)`
  position: relative;
  display: grid;
  z-index: 6;

  svg path {
    transform-origin: center center;
    transform-box: fill-box;
    fill: white;
  }

  svg path {
    animation: ${EyeAnimate} 4.72s ease infinite;
    transform-origin: 50% 50%;
  }
`;

export const Logo = styled(VenomEye)`
  width: 55px;
  z-index: 1;
`;

export const MenuLink = styled.a`
  position: relative;
  display: flex;
  color: var(--gray);
  cursor: pointer;
  align-items: center;
  transition: 0.7s ease;

  @media (min-width: 1180px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: -100px;
      left: 10px;
      right: 0;
      width: 25px;
      margin: 4px auto;
      height: 45px;
      border-radius: 2px;
      transform: translate3d(-15%, 0, 0);
      transition: 0.7s ease;
      background: url(${VenomSpider}) no-repeat;
    }

    &:hover::after {
      top: -50px;
    }

    &:hover,
    &.active {
      color: var(--red);
    }
  }

  @media (max-width: 1179px) {
    &:hover,
    &.active {
      color: var(--red);
    }
  }

  @media (min-width: 769px) and (max-width: 1180px) {
    font-size: 44px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const Navigation = styled.nav`
  z-index: 0;

  @media (max-width: 1180px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 110%;
    background: var(--black1);
    z-index: 5;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;

    ${({ open }) =>
      open &&
      `
      visibility: visible;
      opacity: 1;
      transition: all 0.2s linear;
    `}
  }
`;

export const ListContainer = styled.div`
  list-style: none;

  @media (min-width: 1181px) {
    display: inline-flex;
  }
`;

export const List = styled.li`
  padding: 0 25px;

  @media (max-width: 1180px) {
    &:hover div {
      height: 100%;
      visibility: visible;
      padding: 20px 0;
    }

    &:hover svg {
      transform: rotateZ(-180deg);
    }
  }

  @media (min-width: 768px) and (max-width: 1180px) {
    display: block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;

export const Burger = styled.button`
  @media (min-width: 1181px) {
    display: none;
  }

  @media (max-width: 1180px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 20px;
    height: 19px;
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: 15px;
    z-index: 10;

    &:focus {
      outline: none;
    }

    span {
      width: 16px;
      height: 2px;
      background: white;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :nth-child(1) {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
export const Bullets = styled.span``;

export const SocialContent = styled.div`
  transition: 0.7s ease;

  @media (max-width: 1179px) {
    display: ${({ mobile }) => (mobile ? "none" : "")};
    padding-top: 30px;
  }

  @media (min-width: 1180px) {
    display: ${({ mobile }) => (mobile ? "" : "none")};
  }
`;

export const SocialLink = styled.a`
  padding-left: 16px;

  @media (max-width: 1179px) {
    padding: 0 10px;
    & svg {
      width: 32px;
      height: 32px;
    }
  }

  & svg,
  & path {
    fill: var(--gray);
    transition: 0.7s ease;
  }

  &:hover svg {
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);

    & path {
      fill: var(--red);
    }
  }
`;
