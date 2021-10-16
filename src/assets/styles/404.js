import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainError = styled.div`
  position: relative;
  padding: 64px;
  max-width: 512px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section``;

export const Error = styled.h1`
  font-size: 48px;
  position: relative;
  color: var(--gray);

  @media (max-width: 700px) {
    font-size: 32px;
  }
`;

export const ErrorText = styled.h2`
  font-size: 24px;
  padding-bottom: 32px;
  color: var(--gray);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  transition: 300ms;

  &:after {
    content: "";
    width: 0px;
    height: 2px;
    display: block;
    background: var(--red);
    transition: 300ms;
  }

  &:hover:after {
    width: 40%;
  }

  &:hover {
    color: var(--red);
  }
`;
