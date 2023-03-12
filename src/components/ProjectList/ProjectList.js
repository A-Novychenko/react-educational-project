import { Wrapper, Item, CardLink, Title } from 'components/ProjectList';
import plug from '../../img/plug.jpg';

export const ProjectList = ({ projects }) => {
  return (
    <main>
      <Wrapper>
        {projects.map(project => (
          <Item key={project.id}>
            <CardLink to={`${project.id}`}>
              <div>
                <img src={plug} alt="#" width="240" />
              </div>
              <Title>{project.title}</Title>
            </CardLink>
          </Item>
        ))}
      </Wrapper>
    </main>
  );
};
