import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: auto;
  margin-left: auto;
  /* margin-top: 80px; */
  padding: 0 40px;

  width: 1200px;
  /* height: 450px; */
  text-align: center;

  border-radius: 20px;

  box-shadow: 0px 0px 36px 28px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 36px 28px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 36px 28px rgba(0, 0, 0, 0.75); ;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid green;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 32px;
  padding-bottom: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px;
  color: green;
  font-size: 16px;
  font-weight: 700;

  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  border-radius: 4px;
  &.active {
    background-color: green;
    color: black;
  }
`;
