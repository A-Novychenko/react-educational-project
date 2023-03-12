import { Title, ContentBox } from 'pages/ProjectsDetails';
import { getProjectById } from 'data/projects';

import { useParams } from 'react-router-dom';
import plug from '../../img/plug.jpg';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  return (
    <main>
      <div>
        <Title>{project.title}</Title>

        <ContentBox>
          <img src={plug} alt="#" width="320" />
          <p>{project.description}</p>
        </ContentBox>
      </div>
    </main>
  );
};
