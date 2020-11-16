import projectData from '../../helpers/data/projectsData';
import card from '../projectCards';

const projectView = () => {
  projectData.getProject().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        if (item.available === true) {
          $('#projectsPage').append(card.createProjectCards(item));
        }
      });
    }
  });
};

export default { projectView };
