import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Projects } from 'pages/Projects';
import { Stack } from 'pages/Stack';
import { Route, Routes } from 'react-router-dom';

import { Container, Nav, NavLinkStyled } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Nav>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/stack">Stack</NavLinkStyled>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </Nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stack" element={<Stack />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      {/* <Home />
        <Stack />
        <Projects /> */}
    </Container>
  );
};
