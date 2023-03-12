import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Projects } from 'pages/Projects';
import { ProjectDetails } from 'pages/ProjectsDetails';
import { Stack } from 'pages/Stack';
import { Route, Routes } from 'react-router-dom';

import { Container, Nav, NavLinkStyled } from './App.styled';

export const App = () => {
  return (
    <Container>
      <header>
        <Nav>
          <NavLinkStyled to="react-educational-project/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/stack">Stack</NavLinkStyled>
          <NavLinkStyled to="/projects">Projects</NavLinkStyled>
        </Nav>
      </header>

      <Routes>
        <Route path="react-educational-project/" element={<Home />}></Route>
        <Route path="/stack" element={<Stack />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Container>
  );
};
