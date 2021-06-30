import axios from 'axios';
import apiKeys from '../apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getProject = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projects = response.data;
      const projectsArray = [];
      if (projects) {
        Object.keys(projects).forEach((projectId) => {
          projectsArray.push(projects[projectId]);
        });
      }
      resolve(projectsArray);
    })
    .catch((error) => reject(error));
});
export default { getProject };
