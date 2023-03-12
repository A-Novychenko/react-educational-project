import { ProjectList } from 'components/ProjectList';
import { getProjects } from '../../data/projects.js';

export const Projects = () => {
  const projects = getProjects();
  return (
    <main>
      <ProjectList projects={projects}></ProjectList>
    </main>
  );
};
