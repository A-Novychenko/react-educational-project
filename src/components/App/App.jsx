import { PageTitle } from 'components/EventBoardSection/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoardSection/EventBoard/EventBoard';
import { ToDoListSection } from 'components/ToDoSection';
import data from '../../dataBase/data.json';
import toDo from '../../dataBase/toDo.json';
import { Container, Section } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        <PageTitle text="24th Core Worlds Coalition Conference" />
        <EventBoard events={data} />
      </Section>

      <Section bgColor>
        <PageTitle text="todo" />
        <ToDoListSection toDos={toDo}></ToDoListSection>
      </Section>
    </Container>
  );
};
