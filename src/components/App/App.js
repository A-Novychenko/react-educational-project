import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Projects } from 'pages/Projects';
import { Stack } from 'pages/Stack';
import { NavLink, Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/stack">Stack</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>

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
