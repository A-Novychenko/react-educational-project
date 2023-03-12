const projects = [
  {
    id: 1,
    title: 'Webstudio',
    description:
      'The site of a web studio that designs, projects and develops websites. The site presents the types of services, the team, as well as a portfolio with completed projects.The site is made in accordance with the layout (figma), semantic markup, structured css, adaptive layout (mobile first), modal window functionality is made on pure js',
    stack: 'HTML, CSS, SASS, BEM, JS',
  },
  {
    id: 2,
    title: 'Ice Cream',
    description:
      'Ice cream company website. The team project is made in accordance with the layout (figma), semantic markup, structured css, adaptive layout (mobile first), modal window functionality is made on pure js',
    stack: 'HTML, CSS, SASS, BEM, JS',
  },
  {
    id: 3,
    title: 'Filmoteka',
    description:
      "A service that allows you to search for films, get information about them and save them in the user's personal card.The team project is made in accordance with the layout (figa), structured css, adaptive layout (mobile first), the functionality is made on vanilla js",
    stack: 'HTML, CSS, SASS, JS',
  },
  {
    id: 4,
    title: 'ToDo',
    description:
      'TODO - a note-taking application that stores data on the backend. The project is made in an impromptu design, developed using react',
    stack: 'HTML, CSS, JS, React',
  },
];

export const getProjects = () => {
  return projects;
};

export const getProjectById = projectId => {
  return projects.find(project => project.id.toString() === projectId);
};
