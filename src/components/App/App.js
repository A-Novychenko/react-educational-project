import { Home } from 'pages/Home';
import { Projects } from 'pages/Projects';
import { Stack } from 'pages/Stack';
import { GlobalStyle } from '../../constants/GlobalStyle';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Home />
      <Stack />
      <GlobalStyle />
      <Projects />
    </Container>
  );
};
