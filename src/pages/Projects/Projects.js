import { ProjectList } from 'components/ProjectList';
import { SearchProject } from 'components/SearchProject';
import { useSearchParams } from 'react-router-dom';
import { getProjects } from '../../data/projects.js';

export const Projects = () => {
  const projects = getProjects();
  const [searchParams, setSearchParams] = useSearchParams();
  const projectName = searchParams.get('name') ?? '';
  const visibleProjects = projects.filter(project =>
    project.title.toLowerCase().includes(projectName.toLowerCase())
  );
  const updateQueryString = name => {
    const nextParams = name.trim() !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchProject onChange={updateQueryString} value={projectName} />
      <ProjectList projects={visibleProjects}></ProjectList>
    </main>
  );
};
