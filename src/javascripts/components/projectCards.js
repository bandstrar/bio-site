import Projects from '../helpers/data/projectsData';

const printToDom = (divId, stringToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = () => {
  let domString = '';
  const myProjects = Projects.projects;

  for (let i = 0; i < myProjects.length; i += 1) {
    if (myProjects[i].available === true) {
      domString += `<div class="project-info">
      <div class="project-title">${myProjects[i].title}</div>
      <img src=${myProjects[i].screenshot}>
      <div class="project-description">${myProjects[i].description}</div>
      <div class="project-tech">Technologies used: ${myProjects[i].technologiesUsed}</div>
      <div class="project-url">Check out the project <a href=${myProjects[i].url}>here.</a></div>
      <div class="project-hub"><a href=${myProjects[i].githubUrl}>Github</a></div>
      </div>`;
    }
  }
  printToDom('projectsPage', domString);
};

export default { createProjectCards };
