import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Nav,
  NavLinkStyled,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          A.N.
        </Logo>
        <Nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/stack">Stack</NavLinkStyled>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
