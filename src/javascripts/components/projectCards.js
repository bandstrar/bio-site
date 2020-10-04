const createProjectCards = (myProjects) => {
  const domString = `<div class="project-info">
      <div class="project-title">${myProjects.title}</div>
      <img src=${myProjects.screenshot}>
      <div class="project-description">${myProjects.description}</div>
      <div class="project-tech">Technologies used: ${myProjects.technologiesUsed}</div>
      <div class="project-url">Check out the project <a href=${myProjects.url}>here.</a></div>
      <div class="project-hub"><a href=${myProjects.githubUrl}>Github</a></div>
      </div>`;

  return domString;
};

export default { createProjectCards };
