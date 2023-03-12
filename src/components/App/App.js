import { Education } from 'components/Education';
import { SharedLayout } from 'components/SharedLayout';
import { Work } from 'components/Work';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Projects } from 'pages/Projects';
import { ProjectDetails } from 'pages/ProjectsDetails';
import { Stack } from 'pages/Stack';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="react-educational-project/" element={<SharedLayout />}> */}
        <Route index element={<Home />}>
          {/* <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} /> */}
        </Route>
        <Route path="stack" element={<Stack />}>
          <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
